<template>
  <a-modal
    v-model:open="visible"
    :title="title"
    @ok="handleOk"
    @cancel="handleCancel"
    width="600px"
    :confirm-loading="confirmLoading"
  >
    <a-descriptions bordered :column="2">
      <a-descriptions-item label="用户名">
        {{ userData.name || '-' }}
      </a-descriptions-item>
      <a-descriptions-item label="邮箱">
        {{ userData.email || '-' }}
      </a-descriptions-item>
      <a-descriptions-item label="角色">
        {{ formatRole(userData.role) }}
      </a-descriptions-item>
      <a-descriptions-item label="状态">
        <a-tag :color="getStatusColor(userData.status)">
          {{ getStatusName(userData.status) }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="封禁原因" :span="2">
        {{ userData.banReason || '无' }}
      </a-descriptions-item>
      <a-descriptions-item label="注册时间">
        {{ userData.registerTime || '-' }}
      </a-descriptions-item>
      <a-descriptions-item label="最后登录时间">
        {{ userData.lastLoginTime || '未登录' }}
      </a-descriptions-item>
    </a-descriptions>
    
    <!-- 操作按钮区域 -->
    <template #footer>
      <a-space>
        <a-button @click="handleCancel">取消</a-button>
        <a-button 
          @click="handleUnblock"
          :loading="unblockLoading"
          class="unbanBtn"
        >
          解封
        </a-button>
      </a-space>
    </template>
  </a-modal>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { message } from 'ant-design-vue';

// 定义 Props
const props = defineProps({
  // 是否显示模态框
  visible: {
    type: Boolean,
    default: false,
  },
  // 用户数据
  userData: {
    type: Object,
    default: () => ({}),
  },
  // 标题
  title: {
    type: String,
    default: '用户详情',
  },
  // 是否显示解封按钮
  showUnblockButton: {
    type: Boolean,
    default: true,
  },
  // 确认按钮加载状态
  confirmLoading: {
    type: Boolean,
    default: false,
  },
});

// 定义 Emits
const emit = defineEmits([
  'update:visible',
  'confirm',
  'cancel',
  'unblock',
]);

// 内部状态
const internalVisible = ref(false);
const unblockLoading = ref(false);

// 计算属性 - 同步外部 visible
const visible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value),
});

// 状态颜色映射
const getStatusColor = (status) => {
  const colorMap = {
    1: 'green',
    2: 'red'
  };
  return colorMap[status] || 'default';
};

const getStatusName = (status)=>{
    const nameMap = {
        1:'正常',
        2:'封禁'
    }
    return nameMap[status] || '-'
}

// 格式化角色
const formatRole = (role) => {
  const roleMap = {
    1: '普通用户',
    2: '管理员',
    3: '超级管理员',
  };
  return roleMap[role] || role || '-';
};

// 解封处理
const handleUnblock = async () => {
  unblockLoading.value = true;
  try {
    // 触发解封事件，父组件处理具体逻辑
    emit('unblock', props.userData);
  } catch (error) {
    console.error('解封失败:', error);
  } finally {
    unblockLoading.value = false;
  }
};

// 确定按钮处理
const handleOk = () => {
  emit('confirm', props.userData);
  visible.value = false;
};

// 取消按钮处理
const handleCancel = () => {
  emit('cancel');
  visible.value = false;
};

// 监听 visible 变化
watch(() => props.visible, (newVal) => {
  internalVisible.value = newVal;
});

// 初始化
watch(() => props.userData, (newData) => {
  console.log('用户数据更新:', newData);
}, { immediate: true });
</script>

<style scoped lang="scss">
/* 可添加自定义样式 */
.ant-descriptions-item-label {
  font-weight: 600;
}

.ant-descriptions-item-content {
  word-break: break-all;
}
.unbanBtn{
  background-color: #10B981;
  color: #fff;
  border: none;
  &:hover{
    filter: brightness(110%);
    border: none;
    color: #fff;
  }
}
</style>