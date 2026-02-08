<!-- src/components/ScenicSpotViewModal.vue -->
<template>
  <a-modal v-model:open="props.visible" title="景点详情" ok-text="关闭" cancel-text="" @ok="handleClose" width="700px"
    destroyOnClose :maskClosable="false" :footer="null">
    <div class="view-main">
      <!-- 基础信息区域 -->
      <div class="info-section">
        <a-descriptions :column="1" bordered size="middle">
          <!-- 景点ID -->
          <a-descriptions-item label="景点ID">
            {{ formData.id || '-' }}
          </a-descriptions-item>

          <!-- 景点名称 -->
          <a-descriptions-item label="景点名称">
            {{ formData.spotName || '-' }}
          </a-descriptions-item>

          <!-- 所属目的地 -->
          <a-descriptions-item label="所属目的地">
            {{ formData.destination || '-' }}
          </a-descriptions-item>

          <!-- 新增：详细地址 -->
          <a-descriptions-item label="详细地址">
            {{ formData.address || '-' }}
          </a-descriptions-item>

          <!-- 景点封面 -->
          <a-descriptions-item label="景点封面">
            <div v-if="formData.coverImage" class="image-preview">
              <img :src="formData.coverImage" alt="景点封面" class="cover-img" />
            </div>
            <span v-else>-</span>
          </a-descriptions-item>

          <!-- 轮播图片 -->
          <a-descriptions-item label="轮播图片">
            <div v-if="formData.carouselImages && formData.carouselImages.length" class="carousel-preview">
              <div v-for="(img, index) in formData.carouselImages" :key="index" class="carousel-item">
                <img :src="img" :alt="`轮播图${index + 1}`" class="carousel-img" />
                <span class="img-index">{{ index + 1 }}</span>
              </div>
            </div>
            <span v-else>-</span>
          </a-descriptions-item>

          <!-- 介绍 -->
          <a-descriptions-item label="介绍">
            <div class="intro-content">
              {{ formData.introduction || '-' }}
            </div>
          </a-descriptions-item>

          <!-- 状态 -->
          <a-descriptions-item label="状态">
            <a-tag :color="getStatusTagColor(formData.status)" class="status-tag">
              {{ getStatusText(formData.status) }}
            </a-tag>
          </a-descriptions-item>

          <!-- 开放时间 -->
          <a-descriptions-item label="开放时间">
            {{ formData.openTime || '-' }}
          </a-descriptions-item>

          <!-- 建议游玩时间 -->
          <a-descriptions-item label="建议游玩时间">
            {{ formData.suggestPlayTime || '-' }}
          </a-descriptions-item>

          <!-- 官方网站 -->
          <a-descriptions-item label="官方网站">
            <a v-if="formData.officialWebsite" :href="formData.officialWebsite" target="_blank" class="website-link">
              {{ formData.officialWebsite }}
            </a>
            <span v-else>-</span>
          </a-descriptions-item>

          <!-- 门票售价 -->
          <a-descriptions-item label="门票售价">
            {{ formData.ticketPrice !== undefined ? `${formData.ticketPrice} 元` : '-' }}
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import type { PropType } from 'vue';

// 定义景点数据类型（新增 address 字段）
interface ScenicSpotData {
  id?: string;          // 景点ID
  spotName?: string;    // 景点名称
  destination?: string; // 所属目的地
  address?: string;     // 新增：详细地址
  coverImage?: string;  // 封面图片
  carouselImages?: string[]; // 轮播图片
  introduction?: string; // 介绍
  status?: 'active' | 'maintenance' | 'closed' | string; // 状态
  openTime?: string;    // 开放时间
  suggestPlayTime?: string; // 建议游玩时间
  officialWebsite?: string; // 官方网站
  ticketPrice?: number; // 门票售价
}

// 定义组件属性
const props = defineProps({
  // 控制模态框显示/隐藏
  visible: {
    type: Boolean,
    default: false
  },
  // 要展示的景点详情数据
  detailData: {
    type: Object as PropType<ScenicSpotData>,
    required: true,
    default: () => ({})
  }
});

// 定义组件事件
const emit = defineEmits([
  // 关闭模态框事件
  'update:visible'
]);

// 展示数据（深拷贝避免修改原数据）
const formData = reactive<ScenicSpotData>({
  id: '',               // 景点ID
  spotName: '',         // 景点名称
  destination: '',      // 所属目的地
  address: '',          // 新增：初始化详细地址
  coverImage: '',       // 封面图片
  carouselImages: [],   // 轮播图片
  introduction: '',     // 介绍
  status: '',           // 状态
  openTime: '',         // 开放时间
  suggestPlayTime: '',  // 建议游玩时间
  officialWebsite: '',  // 官方网站
  ticketPrice: 0        // 门票售价
});

// 监听详情数据变化，更新展示内容
watch(
  () => props.detailData,
  (newVal) => {
    if (newVal) {
      // 深拷贝数据，避免响应式关联
      Object.assign(formData, JSON.parse(JSON.stringify(newVal)));
    }
  },
  { immediate: true, deep: true }
);

// 状态文本转换（对应新增组件的状态值）
const getStatusText = (status: string) => {
  const statusMap = {
    active: '正常开放',
    maintenance: '维护中',
    closed: '暂时关闭'
  };
  return statusMap[status as keyof typeof statusMap] || status || '-';
};

// 状态标签颜色
const getStatusTagColor = (status: string) => {
  const colorMap = {
    active: 'success',
    maintenance: 'warning',
    closed: 'error'
  };
  return colorMap[status as keyof typeof colorMap] || 'default';
};

// 关闭模态框
const handleClose = () => {
  emit('update:visible', false);
};
</script>

<style scoped lang="scss">
.view-main {
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;

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

.info-section {
  :deep(.ant-descriptions) {
    font-size: 14px;

    .ant-descriptions-item-label {
      font-weight: 500;
      color: #333;
    }

    .ant-descriptions-item-content {
      color: #666;
      // 地址字段换行优化
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
}

// 封面图样式
.image-preview {
  margin-top: 5px;

  .cover-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #eee;
  }
}

// 轮播图样式
.carousel-preview {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .carousel-item {
    position: relative;

    .carousel-img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid #eee;
    }

    .img-index {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 3px;
    }
  }
}

// 介绍内容样式
.intro-content {
  margin-top: 5px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-all;
}

// 状态标签
.status-tag {
  margin-top: 5px;
}

// 官网链接
.website-link {
  color: #4096ff;
  text-decoration: underline;

  &:hover {
    color: #1677ff;
  }
}
</style>
