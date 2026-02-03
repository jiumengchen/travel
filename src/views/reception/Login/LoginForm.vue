<template>
  <a-form style="margin-top: 30px" ref="formRef" :model="loginForms" :rules="rules">
    <a-form-item name="email">
      <p>电子邮箱</p>
      <a-input placeholder="your@email.com" style="height: 40px" v-model:value="loginForms.email">
        <template #prefix>
          <MailOutlined style="padding-right: 10px" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="password">
      <div class="password">
        <p>密码</p>
        <p>忘记密码?</p>
      </div>
      <a-input-password placeholder="••••••••" style="height: 40px" v-model:value="loginForms.password">
        <template #prefix>
          <LockOutlined style="padding-right: 10px" />
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item>
      <a-checkbox v-model:checked="loginForms.checked">记住我的登录状态</a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="width: 100%; height: 40px" @click="login">
        <div class="btnContext">
          <svg-icon name="login" fill="#fff"> </svg-icon>
          <p>登录</p>
        </div>
      </a-button>
    </a-form-item>
    <a-form-item>
      <div class="other" style="text-align: center; color: #7c838f">
        <p>前往后台管理系统</p>
      </div>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { MailOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRouter } from 'vue-router'
const $router = useRouter()
const formRef = ref()
const loginForms = ref({
  email: '',
  password: '',
  checked: false,
})
const validateEmail = async (_rule: Rule, value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (value == '' || !emailRegex.test(value)) {
    return Promise.reject('请输入有效的邮箱地址（例如：example@email.com）')
  } else {
    return Promise.resolve()
  }
}
const validatePass = async (_rule: Rule, value: string) => {
  const regex = /^[a-zA-Z0-9_]{6,16}$/
  if (value == '' || !regex.test(value)) {
    return Promise.reject('密码长度需在 6-16 位之间，请检查后再试')
  } else {
    return Promise.resolve()
  }
}
const rules: Record<string, Rule[]> = {
  email: [{ required: true, validator: validateEmail, trigger: 'change' }],
  password: [{ required: true, validator: validatePass, trigger: 'change' }],
}

const login = async () => {
  await formRef.value.validate()
  $router.push('/')
}
</script>

<style scoped lang="scss">
.password {
  display: flex;
  justify-content: space-between;

  p {
    &:nth-child(2) {
      color: #1a73e8;
      cursor: pointer;
    }
  }
}

.btnContext {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0 10px;
  }
}

.other {
  cursor: pointer;

  &:hover {
    p {
      color: #1677ff;
    }

    text-decoration: underline;
  }
}
</style>
