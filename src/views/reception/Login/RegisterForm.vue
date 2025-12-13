<template>
  <a-form style="margin-top: 30px;" ref="formRef" :model="registerForms" :rules="rules">
    <a-form-item name="name">
      <p>姓名</p>
      <a-input style="height: 40px;" placeholder="请输入您的姓名" v-model:value="registerForms.name">
        <template #prefix>
          <svg-icon name="user" :fill="iconColor.name"></svg-icon>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="phone">
      <p>手机号码</p>
      <a-input style="height: 40px;" placeholder="请输入您的手机号码" v-model:value="registerForms.phone">
        <template #prefix>
          <svg-icon name="phone" :fill="iconColor.phone"></svg-icon>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="email">
      <p>电子邮箱</p>
      <a-input style="height: 40px;" placeholder="your@email.com" v-model:value="registerForms.email">
        <template #prefix>
          <svg-icon name="email-b" :fill="iconColor.email"></svg-icon>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="password">
      <p>设置密码</p>
      <a-input-password style="height: 40px;" placeholder="••••••••" v-model:value="registerForms.password">
        <template #prefix>
          <svg-icon name="password-b" :fill="iconColor.password"></svg-icon>
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="yespass">
      <p>确认密码</p>
      <a-input-password style="height: 40px;" placeholder="••••••••" v-model:value="registerForms.yespass">
        <template #prefix>
          <svg-icon name="password-b" :fill="iconColor.yespass"></svg-icon>
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="checked">
      <a-checkbox class="checkbox"
        v-model:checked="registerForms.checked">我同意<span>服务条款</span>和<span>隐私政策</span></a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="height: 40px;width: 100%;" @click="register">
        <div class="btnContext">
          <svg-icon name="register" fill="#fff"></svg-icon>
          <p>注册</p>
        </div>
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form';
import { notification } from 'ant-design-vue';
const formRef = ref();
const registerForms = ref({
  name: '',
  phone: '',
  email: '',
  password: '',
  yespass: '',
  checked: false

})
const iconColor = ref({
  name: '#333',
  phone: '#333',
  email: '#333',
  password: '#333',
  yespass: '#333'
})
const register = async () => {
  await formRef.value.validate();
  openNotificationWithIcon('success')
}
const validateName = async (_rule: Rule, value: string) => {
  const nameRegex = /^[\u4e00-\u9fa5a-zA-Z]{2,}$/;
  if (value.trim() == '' || !nameRegex.test(value)) {
    iconColor.value.name = '#ff4d4f'
    return Promise.reject('姓名长度至少为2个字符，且由中文和英文组成');
  } else {
    iconColor.value.name = '#333'
    return Promise.resolve();
  }
}
const validatePhone = async (_rule: Rule, value: string) => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (value.trim() == '' || !phoneRegex.test(value)) {
    iconColor.value.phone = '#ff4d4f'
    return Promise.reject('请输入有效的手机号码（以1开头，第二位为3-9）');
  } else {
    iconColor.value.phone = '#333'
    return Promise.resolve();
  }
}
const validateEmail = async (_rule: Rule, value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value == '' || !emailRegex.test(value)) {
    iconColor.value.email = '#ff4d4f'
    return Promise.reject('请输入有效的邮箱地址（例如：example@email.com）');
  } else {
    iconColor.value.email = '#333'
    return Promise.resolve();
  }
}
const validatePass = async (_rule: Rule, value: string) => {
  const regex = /^[a-zA-Z0-9_]{6,16}$/;
  if (value == '' || !regex.test(value)) {
    iconColor.value.password = '#ff4d4f'
    return Promise.reject('密码长度需在 6-16 位之间，请检查后再试');
  } else {
    iconColor.value.password = '#333'
    return Promise.resolve();
  }
}
const validateYesPass = async (_rule: Rule, value: string) => {
  if (value == '' || registerForms.value.password != value) {
    iconColor.value.yespass = '#ff4d4f'
    return Promise.reject('前后密码不一致，请检查后再试');
  } else {
    iconColor.value.yespass = '#333'
    return Promise.resolve();
  }
}
const validateChecked = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('请同意服务条款和隐私政策');
  } else {
    return Promise.resolve();
  }
}
const rules: Record<string, Rule[]> = {
  name: [{ required: true, validator: validateName, trigger: 'change' }],
  phone: [{ required: true, validator: validatePhone, trigger: 'change' }],
  email: [{ required: true, validator: validateEmail, trigger: 'change' }],
  password: [{ required: true, validator: validatePass, trigger: 'change' }],
  yespass: [{ required: true, validator: validateYesPass, trigger: 'change' }],
  checked: [{ required: true, validator: validateChecked, trigger: 'change' }]
};
const openNotificationWithIcon = (type: string) => {
  (notification as any)[type]({
    message: '提示',
    description:
      '注册成功！',
  });
};
</script>

<style scoped>
.checkbox {
  span {
    color: #1a73e8;
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
</style>
