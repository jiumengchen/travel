<template>
  <div class="login-container">
    <!-- 登录卡片 -->
    <div class="login-card">
      <div class="login-header">
        <h2 class="login-title">旅游智能推荐后台管理系统</h2>
        <p class="login-desc">欢迎登录，开始您的管理之旅</p>
      </div>

      <!-- 登录表单 -->
      <a-form ref="loginFormRef" :model="loginForm" :rules="loginRules" layout="vertical" class="login-form">
        <!-- 邮箱输入框 -->
        <a-form-item name="email" label="电子邮箱">
          <a-input v-model:value="loginForm.email" type="email" placeholder="请输入您的电子邮箱" size="large" prefix="📧" />
        </a-form-item>

        <!-- 密码输入框 -->
        <a-form-item name="password" label="密码">
          <a-input-password v-model:value="loginForm.password" placeholder="请输入您的密码" size="large" prefix="🔒"
            visibility-toggle />
        </a-form-item>

        <!-- 身份选择（下拉框，移到密码下方） -->
        <a-form-item name="identity" label="登录身份">
          <a-select v-model:value="loginForm.identity" placeholder="请选择登录身份" size="large" class="identity-select">
            <a-select-option value="admin">系统管理员</a-select-option>
            <a-select-option value="operator">普通操作员</a-select-option>
            <a-select-option value="viewer">只读查看员</a-select-option>
          </a-select>
        </a-form-item>

        <!-- 记住密码 & 忘记密码 -->
        <a-form-item class="login-form-actions">
          <a-checkbox v-model:checked="loginForm.remember">记住密码</a-checkbox>
          <a-button type="text" class="forgot-password">忘记密码？</a-button>
        </a-form-item>

        <!-- 登录按钮 -->
        <a-form-item>
          <a-button type="primary" size="large" class="login-btn" :loading="isLoading" @click="handleLogin" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'

// 表单引用
const loginFormRef = ref(null)

// 加载状态
const isLoading = ref(false)

// 登录表单数据（identity默认值改为空，需手动选择）
const loginForm = reactive({
  email: '',
  password: '',
  identity: '', // 可选值：admin/operator/viewer
  remember: true,
})

// 表单验证规则
const loginRules = reactive({
  email: [
    { required: true, message: '请输入电子邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效的电子邮箱', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
  ],
  identity: [{ required: true, message: '请选择登录身份', trigger: 'change' }],
})

// 登录处理函数
const handleLogin = async () => {
  try {
    // 表单验证
    await loginFormRef.value.validate()

    // 模拟加载状态
    isLoading.value = true

    // 模拟登录请求（实际项目中替换为真实接口调用）
    setTimeout(() => {
      console.log('登录信息：', {
        identity: loginForm.identity,
        email: loginForm.email,
        password: loginForm.password,
      })

      // 身份名称映射
      const identityNameMap = {
        admin: '系统管理员',
        operator: '普通操作员',
        viewer: '只读查看员',
      }

      // 模拟登录成功
      message.success(`以【${identityNameMap[loginForm.identity]}】身份登录成功！`)

      // 登录成功后的逻辑：存储token、身份信息、跳转首页等
      // localStorage.setItem('token', 'your_token_here');
      // localStorage.setItem('userIdentity', loginForm.identity);
      // router.push('/dashboard');

      isLoading.value = false
    }, 1000)
  } catch (error) {
    // 表单验证失败
    console.error('表单验证失败:', error)
    message.error('请填写正确的登录信息')
  }
}
</script>

<style scoped>
/* 整体容器样式 */
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e8f4f8 0%, #f0f8fb 100%);
}

/* 登录卡片样式 */
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #fff;
  /* 主题色 #fff */
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

/* 登录头部 */
.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-title {
  color: #1677ff;
  /* 主题色 #1677ff */
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.login-desc {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* 表单样式 */
.login-form {
  width: 100%;
}

/* 身份下拉选择框样式 */
.identity-select {
  width: 100%;
}

:deep(.ant-select-selector) {
  border-color: #d9d9d9;
  height: 40px !important;
  line-height: 40px !important;
}

:deep(.ant-select-focused .ant-select-selector) {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2);
}

:deep(.ant-select-item-selected) {
  color: #1677ff;
  font-weight: 500;
}

:deep(.ant-select-arrow) {
  color: #1677ff;
}

.login-form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #1677ff;
  /* 主题色 #1677ff */
  font-size: 14px;
}

/* 登录按钮 */
.login-btn {
  background-color: #1677ff;
  /* 主题色 #1677ff */
  border-color: #1677ff;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
}

.login-btn:hover {
  background-color: #0958d9;
  border-color: #0958d9;
}

/* 响应式适配 */
@media (max-width: 576px) {
  .login-card {
    width: 90%;
    padding: 30px 20px;
  }
}
</style>
