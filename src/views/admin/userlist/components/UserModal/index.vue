<template>
  <a-modal
    v-bind="$attrs"
    :open="props.open"
    :title="props.title"
    :ok-text="props.okText || '提交'"
    :cancel-text="props.cancelText || '取消'"
    @ok="handleSubmit"
    @cancel="handleCancel"
    @close="handleClose"
    width="500px"
  >
    <!-- 表单区域 -->
    <a-form layout="vertical" :model="formData">
      <a-form-item
        label="用户名"
        name="name"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formData.name" placeholder="请输入用户名" />
      </a-form-item>

      <a-form-item
        label="邮箱"
        name="email"
        :rules="[{ required: true, type: 'email', message: '请输入正确的邮箱格式' }]"
      >
        <a-input v-model:value="formData.email" placeholder="请输入邮箱" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, min: 6, message: '密码长度不能少于6位' }]"
      >
        <a-input-password v-model:value="formData.password" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item
        label="角色"
        name="role"
        :rules="[{ required: true, message: '请选择用户角色' }]"
      >
        <a-select v-model:value="formData.role" placeholder="请选择角色">
          <a-select-option :value="1">管理员</a-select-option>
          <a-select-option :value="2">普通用户</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
const title = ref('')
// 定义 Props
interface AddUserModalProps {
  open: boolean
  title?: string
  okText?: string
  cancelText?: string
  data?: any
}

const props = withDefaults(defineProps<AddUserModalProps>(), {
  open: false,
  title: '新增用户',
  okText: '提交',
  cancelText: '取消',
})

// 定义事件
const emit = defineEmits<{
  confirm: [formData: { name: string; email: string; password: string; role: number }]
  cancel: []
  close: []
}>()

// 表单数据
const formData = reactive({
  name: '',
  email: '',
  password: '',
  role: 1,
})

// 提交表单
const handleSubmit = () => {
  emit('confirm', { ...formData })
  // 重置表单
  formData.name = ''
  formData.email = ''
  formData.password = ''
  formData.role = 1
}

// 取消按钮
const handleCancel = () => {
  emit('cancel')
}

// 关闭弹窗
const handleClose = () => {
  emit('close')
}

watch(()=>props.data,()=>{
  formData.name = props.data.name
  formData.email = props.data.email
  formData.password = props.data.password
  formData.role = 1
})
</script>
