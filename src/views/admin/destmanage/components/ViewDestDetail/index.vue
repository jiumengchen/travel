<template>
  <a-modal :open="props.visible" :title="props.title || '目的地详情'" ok-text="关闭" :footer="null" @ok="handleClose"
    @cancel="handleClose" width="800px" destroyOnClose centered>
    <div class="view-modal-box">
      <!-- 封面展示区域 -->
      <div class="cover-section">
        <div class="cover-label">目的地封面</div>
        <div class="cover-img-box">
          <img v-if="destData.cover" :src="destData.cover" alt="目的地封面" class="cover-img">
          <div v-else class="no-cover">暂无封面</div>
        </div>
      </div>

      <!-- 基础信息区域 -->
      <div class="base-info-section">
        <div class="section-title">基础信息</div>
        <a-descriptions :column="2" bordered>
          <a-descriptions-item label="目的地名称">{{ destData.name || '-' }}</a-descriptions-item>
          <a-descriptions-item label="所属地区">{{ destData.region || '-' }}</a-descriptions-item>
          <!-- 新增：目的地类型 -->
          <a-descriptions-item label="目的地类型">{{ destData.type || '-' }}</a-descriptions-item>
          <a-descriptions-item label="状态">
            <a-tag :color="destData.status === 1 ? 'green' : 'red'">
              {{ destData.status === 1 ? '正常' : '封禁' }}
            </a-tag>
          </a-descriptions-item>
          <a-descriptions-item label="创建时间" :span="2">{{ destData.createTime || '-' }}</a-descriptions-item>
          <a-descriptions-item label="详细介绍" :span="2">
            <div class="intro-content">{{ destData.intro || '-' }}</div>
          </a-descriptions-item>
        </a-descriptions>
      </div>

      <!-- 快速信息区域 -->
      <div class="quick-info-section">
        <div class="section-title">快速信息</div>
        <a-descriptions :column="2" bordered>
          <a-descriptions-item label="最佳旅游时间">
            {{ destData?.bestTravelTime || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="语言">
            {{ destData?.language || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="货币">
            {{ destData?.currency || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="电源插座">
            {{ destData?.powerSocket || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="支付方式" :span="2">
            {{ destData?.paymentMethod || '-' }}
          </a-descriptions-item>
        </a-descriptions>
      </div>

      <!-- 标签区域 -->
      <div class="tags-section">
        <div class="section-title">标签</div>
        <div class="tags-box">
          <a-tag v-for="(tag, index) in destData.tags" :key="index" color="blue" class="tag-item">
            {{ tag }}
          </a-tag>
          <span v-if="!destData.tags || destData.tags.length === 0">-</span>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'

// 定义Props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '目的地详情'
  },
  destData: {
    type: Object,
    default: () => ({
      name: '',
      region: '',
      type: '', // 新增：目的地类型默认值
      intro: '',
      cover: '',
      status: 1,
      createTime: '',
      bestTravelTime: '',
      language: '',
      currency: '',
      powerSocket: '',
      paymentMethod: '',
      tags: []
    })
  }
})

// 定义事件
const emit = defineEmits(['close'])

// 内部数据（避免直接修改props）
const destData = ref({ ...props.destData })

// 监听props.destData变化，更新内部数据（自动兼容type字段）
watch(() => props.destData, (newVal) => {
  destData.value = { ...newVal }
}, { immediate: true, deep: true })

// 关闭模态框
const handleClose = () => {
  emit('close')
}
</script>

<style scoped lang="scss">
.view-modal-box {
  padding: 10px 0;
  overflow: auto;
  max-height: 70vh;
  padding: 20px;

  // 滚动条样式（和新增组件保持一致）
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 3px;

    &:hover {
      background: #bfbfbf;
    }
  }
}

// 封面区域样式
.cover-section {
  margin-bottom: 20px;

  .cover-label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #1f2937;
  }

  .cover-img-box {
    width: 100%;
    height: 200px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .cover-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .no-cover {
      color: #9ca3af;
      font-size: 14px;
    }
  }
}

// 通用区域标题
.section-title {
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0 8px 0;
  color: #1f2937;
}

// 基础信息区域
.base-info-section {
  .intro-content {
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-all;
  }
}

// 快速信息区域
.quick-info-section {
  margin-bottom: 16px;
}

// 标签区域
.tags-section {
  .tags-box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 0;

    .tag-item {
      margin-bottom: 4px;
    }
  }
}

// 适配Descriptions样式
:deep(.ant-descriptions) {
  .ant-descriptions-item-label {
    font-weight: 500;
  }

  .ant-descriptions-item-content {
    color: #4b5563;
  }
}
</style>
