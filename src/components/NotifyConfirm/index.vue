<template>
  <a-modal :open="isShow" centered :closable="false" class="clear-modal" :width="width" :footer="null">
    <div class="delete-tip" :style="{ backgroundColor: type === 'success' ? '#e5f7e9' : '#fee2e2' }">
      <svg-icon name="warning" fill="#ef4444" width="24px" height="24px" v-if="type === 'danger'"></svg-icon>
      <svg-icon name="success-line" fill="#00b42a" width="24px" height="24px" v-if="type === 'success'"></svg-icon>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ context }}</p>
    <div class="btn">
      <div class="cancel" @click="cancel">{{ cancelText }}</div>
      <div class="confirm" @click="confirm" :class="[type === 'danger' ? 'dangerBtn' : 'successBtn']">{{
        confirmText }}</div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  context: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    required: true
  },
  isShow: {
    type: Boolean,
    default: false,
    required: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  width: {
    type: Number,
    default: 450
  }
})
const emit = defineEmits(['confirm', 'cancel']);

const cancel = () => {
  emit('cancel')
}
const confirm = () => {
  emit('confirm')
}
</script>

<style lang="scss" scoped>
.clear-modal {

  .delete-tip {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
    color: #1f2937;
  }

  p {
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    color: #7c838f;
  }

  .btn {
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 20px;

    div {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
    }

    .cancel {
      border: 1px solid #d1d5db;
      color: #374151;

      &:hover {
        background-color: #f9fafb;
      }
    }

    .confirm {
      border: 1px solid #d1d5db;
      color: #fff;
    }

    .dangerBtn {
      background-color: #ef4444;

      &:hover {
        background-color: #dc2626;
      }
    }

    .successBtn {
      background-color: #22c55e;

      &:hover {
        background-color: #4ade80;
      }
    }
  }
}
</style>
