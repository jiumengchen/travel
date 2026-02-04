<template>
  <!-- 修复：cancelText 补充 props 前缀，新增关闭事件透传 -->
  <a-modal
    v-bind="$attrs"
    :open="props.open"
    :title="props.title"
    :ok-text="props.okText"
    :cancel-text="props.cancelText"
    @ok="handleConfirm"
    @cancel="handleCancel"
    @close="handleClose"
  >
    <!-- 具名插槽：父组件自定义弹窗内容 -->
    <slot name="content"></slot>
    <!-- 新增默认插槽：兼容更灵活的内容传递 -->
    <slot></slot>
  </a-modal>
</template>

<script setup lang="ts">

// 优化：用 withDefaults 规范 TS 类型 + 默认值（Vue 3 推荐写法）
interface ModalProps {
  open: boolean
  okText?: string
  cancelText?: string
  title?: string
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
  okText: '确定',
  cancelText: '取消',
  title: '无标题'
})

// 优化：声明所有需要透传的事件，补充 TS 类型
const emit = defineEmits<{
  confirm: [] // 确定事件，无参数
  cancel: []  // 取消事件，无参数
  close: []   // 关闭事件，无参数
}>()

// 修复：补充 confirm 方法（改名 handleConfirm 更语义化）
const handleConfirm = () => {
  emit('confirm')
}

// 新增：取消事件处理
const handleCancel = () => {
  emit('cancel')
}

// 新增：关闭事件处理（a-modal 点击遮罩/关闭按钮触发）
const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
/* 可根据需要添加自定义样式，比如调整弹窗宽度、内边距等 */
:deep(.ant-modal-content) {
  border-radius: 8px;
}
</style>