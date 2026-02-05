<template>
  <a-modal
    :open="props.visible"
    :title="props.title || '新增目的地'"
    ok-text="保存"
    cancel-text="取消"
    @ok="handleSubmit"
    @cancel="handleCancel"
    destroyOnClose
  >
    <div class="view-modal-box">
      <a-form
        :model="innerFormData"
        layout="vertical"
        ref="formRef"
        :validate-trigger="['blur']"
      >
        <!-- 新增：封面图片上传 -->
        <a-form-item
          label="目的地封面"
          name="cover"
          :rules="[{ required: true, message: '请上传目的地封面' }]"
        >
          <a-upload
            :file-list="coverFileList"
            :before-upload="handleBeforeUpload"
            :custom-request="handleCustomUpload"
            list-type="picture-card"
            accept="image/*"
            @preview="handlePreview"
            @remove="handleRemove"
          >
            <div v-if="coverFileList.length === 0">
              <plus-outlined />
              <div style="margin-top: 8px;">上传封面</div>
            </div>
          </a-upload>
          <!-- 预览弹窗 -->
          <a-modal :visible="previewVisible" footer="null" @cancel="previewVisible = false">
            <img alt="封面预览" style="width: 100%" :src="previewImage" />
          </a-modal>
        </a-form-item>

        <!-- 基础信息 -->
        <a-form-item
          label="名称"
          name="name"
          :rules="[{ required: true, message: '请输入目的地名称' }]"
        >
          <a-input
            v-model:value="innerFormData.name"
            placeholder="例如：伦敦海德公园"
          />
        </a-form-item>

        <a-form-item
          label="所属地区"
          name="region"
          :rules="[{ required: true, message: '请输入所属地区' }]"
        >
          <a-input
            v-model:value="innerFormData.region"
            placeholder="例如：英国伦敦"
          />
        </a-form-item>

        <a-form-item
          label="介绍"
          name="intro"
          :rules="[{ required: true, message: '请输入目的地详细介绍' }]"
        >
          <a-textarea
            v-model:value="innerFormData.intro"
            placeholder="请输入目的地详细介绍"
            :rows="3"
          />
        </a-form-item>

        <!-- 快速信息 -->
        <a-divider>快速信息</a-divider>

        <a-form-item 
          label="最佳旅游时间"
          name="bestTravelTime"
          :rules="[{ required: true, message: '请输入最佳旅游时间' }]"
        >
          <a-input
            v-model:value="innerFormData.quickInfo.bestTravelTime"
            placeholder="例如：春秋两季（3-5月，9-11月）"
          />
        </a-form-item>

        <a-form-item 
          label="语言"
          name="language"
          :rules="[{ required: true, message: '请输入语言' }]"
        >
          <a-input
            v-model:value="innerFormData.quickInfo.language"
            placeholder="例如：普通话、上海话、英语"
          />
        </a-form-item>

        <a-form-item 
          label="货币"
          name="currency"
          :rules="[{ required: true, message: '请输入货币' }]"
        >
          <a-input
            v-model:value="innerFormData.quickInfo.currency"
            placeholder="例如：人民币(CNY)"
          />
        </a-form-item>

        <a-form-item 
          label="电源插座"
          name="powerSocket"
          :rules="[{ required: true, message: '请输入电源插座信息' }]"
        >
          <a-input
            v-model:value="innerFormData.quickInfo.powerSocket"
            placeholder="例如：A型、I型（220V, 50Hz）"
          />
        </a-form-item>

        <a-form-item 
          label="支付方式"
          name="paymentMethod"
          :rules="[{ required: true, message: '请输入支付方式' }]"
        >
          <a-input
            v-model:value="innerFormData.quickInfo.paymentMethod"
            placeholder="例如：支付宝、微信支付、信用卡"
          />
        </a-form-item>

        <!-- 标签 -->
        <a-form-item
          label="标签"
          name="tags"
          :rules="[{ required: true, message: '请至少添加一个标签' }]"
        >
          <a-select
            v-model:value="innerFormData.tags"
            mode="tags"
            placeholder="输入标签后按回车确认"
          />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '新增目的地'
  },
  formData: {
    type: Object,
    default: () => ({
      name: '',
      region: '',
      intro: '',
      cover: '',
      quickInfo: {
        bestTravelTime: '',
        language: '',
        currency: '',
        powerSocket: '',
        paymentMethod: ''
      },
      tags: []
    })
  }
})

const emit = defineEmits(['confirm', 'cancel'])
const formRef = ref()

// 内部表单数据
const innerFormData = ref({
  name: '',
  region: '',
  intro: '',
  cover: '',
  quickInfo: {
    bestTravelTime: '',
    language: '',
    currency: '',
    powerSocket: '',
    paymentMethod: ''
  },
  tags: []
})

// 封面上传相关
const coverFileList = ref([])
const previewVisible = ref(false)
const previewImage = ref('')

// 监听外部传入的 formData，实现编辑回显
watch(() => props.formData, (newVal) => {
  innerFormData.value = { ...newVal }
  // 编辑时回显封面
  if (newVal.cover) {
    coverFileList.value = [{
      uid: '-1',
      name: 'cover.jpg',
      status: 'done',
      url: newVal.cover
    }]
  }
}, { immediate: true, deep: true })

// 上传前校验
const handleBeforeUpload = (file) => {
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    message.error('请上传图片格式的文件')
    return false
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('封面图片大小不能超过 2MB')
    return false
  }
  return true
}

// 自定义上传（可替换为你的接口上传逻辑）
const handleCustomUpload = ({ file, onSuccess }) => {
  // 这里模拟上传，实际项目中替换为你的上传接口
  setTimeout(() => {
    // 假设接口返回图片URL
    const url = URL.createObjectURL(file)
    innerFormData.value.cover = url
    onSuccess('ok', file)
  }, 1000)
}

// 预览封面
const handlePreview = (file) => {
  previewImage.value = file.url || file.thumbUrl
  previewVisible.value = true
}

// 移除封面
const handleRemove = () => {
  coverFileList.value = []
  innerFormData.value.cover = ''
}

// 提交表单
const handleSubmit = async () => {
  try {
    await formRef.value.validateFields()
    emit('confirm', { ...innerFormData.value })
  } catch (error) {
    console.log('表单校验失败：', error)
  }
}

// 关闭模态框并重置
const handleCancel = () => {
  formRef.value?.resetFields()
  innerFormData.value = {
    name: '',
    region: '',
    intro: '',
    cover: '',
    quickInfo: {
      bestTravelTime: '',
      language: '',
      currency: '',
      powerSocket: '',
      paymentMethod: ''
    },
    tags: []
  }
  coverFileList.value = []
  previewVisible.value = false
  emit('cancel')
}
</script>

<style scoped lang="scss">
.view-modal-box {
  padding: 10px 0;
  overflow: auto;
  max-height: 70vh;

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
</style>