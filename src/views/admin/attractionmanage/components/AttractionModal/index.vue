<!-- src/components/ScenicSpotAddModal.vue -->
<template>
  <a-modal v-model:open="props.visible" :title="props.title" ok-text="提交" cancel-text="取消" @ok="handleSubmit"
    @cancel="handleCancel" width="600px" destroyOnClose>
    <div class="main">
      <a-form ref="formRef" :model="formData" :rules="formRules" layout="vertical" label-col="{ span: 5 }"
        wrapper-col="{ span: 19 }">
        <!-- 景点名称 -->
        <a-form-item label="景点名称" name="spotName">
          <a-input v-model:value="formData.spotName" placeholder="请输入景点名称" maxlength="100" show-count />
        </a-form-item>

        <!-- 所属目的地 - 下拉选择模式 -->
        <a-form-item label="所属目的地" name="destination">
          <a-select v-model:value="formData.destination" placeholder="请选择所属目的地" allow-clear style="width: 100%"
            show-search option-filter-prop="children">
            <!-- 预设常用目的地选项 -->
            <a-select-option value="北京市">北京市</a-select-option>
            <a-select-option value="上海市">上海市</a-select-option>
            <a-select-option value="广州市">广州市</a-select-option>
            <a-select-option value="深圳市">深圳市</a-select-option>
            <a-select-option value="杭州市">杭州市</a-select-option>
            <a-select-option value="南京市">南京市</a-select-option>
            <a-select-option value="成都市">成都市</a-select-option>
            <a-select-option value="重庆市">重庆市</a-select-option>
            <a-select-option value="西安市">西安市</a-select-option>
            <a-select-option value="武汉市">武汉市</a-select-option>
          </a-select>
        </a-form-item>

        <!-- 新增：详细地址 -->
        <a-form-item label="详细地址" name="address">
          <a-input v-model:value="formData.address" placeholder="请输入景点详细地址" maxlength="200" show-count />
        </a-form-item>

        <!-- 景点封面 - 新增/编辑模式兼容 -->
        <a-form-item label="景点封面" name="coverImage">
          <a-upload :action="uploadApi" :file-list="coverFileList" :before-upload="beforeUpload"
            :on-change="handleCoverChange" :on-remove="handleCoverRemove" list-type="picture-card" accept="image/*"
            max-count="1">
            <!-- 仅在无封面时显示上传按钮 -->
            <div v-if="coverFileList.length === 0">
              <plus-outlined />
              <div style="margin-top: 8px">点击上传</div>
            </div>
          </a-upload>
          <div class="upload-tip">支持 jpg/png/jpeg 格式，大小不超过 2MB</div>
        </a-form-item>

        <!-- 轮播图上传 - 最多4张，最少1张 -->
        <a-form-item label="轮播图片" name="carouselImages">
          <a-upload :action="uploadApi" :file-list="carouselFileList" :before-upload="beforeUpload"
            :on-change="handleCarouselChange" :on-remove="handleCarouselRemove" list-type="picture-card"
            accept="image/*" max-count="4">
            <!-- 仅在未达上限时显示上传按钮 -->
            <div v-if="carouselFileList.length < 4">
              <plus-outlined />
              <div style="margin-top: 8px">点击上传</div>
            </div>
          </a-upload>
          <div class="upload-tip">支持 jpg/png/jpeg 格式，大小不超过 2MB，最多上传4张，最少上传1张</div>
        </a-form-item>

        <!-- 介绍 -->
        <a-form-item label="介绍" name="introduction">
          <a-textarea v-model:value="formData.introduction" placeholder="请输入景点详细介绍" :rows="4" maxlength="500"
            show-count />
        </a-form-item>

        <!-- 状态 -->
        <a-form-item label="状态" name="status">
          <a-select v-model:value="formData.status" placeholder="请选择景点状态" allow-clear>
            <a-select-option value="active">正常开放</a-select-option>
            <a-select-option value="maintenance">维护中</a-select-option>
            <a-select-option value="closed">暂时关闭</a-select-option>
          </a-select>
        </a-form-item>

        <!-- 开放时间 -->
        <a-form-item label="开放时间" name="openTime">
          <a-input v-model:value="formData.openTime" placeholder="示例：08:00-18:00" maxlength="50" />
        </a-form-item>

        <!-- 建议游玩时间 -->
        <a-form-item label="建议游玩时间" name="suggestPlayTime">
          <a-input v-model:value="formData.suggestPlayTime" placeholder="示例：2小时、1天" maxlength="50" />
        </a-form-item>

        <!-- 官方网站 -->
        <a-form-item label="官方网站" name="officialWebsite">
          <a-input v-model:value="formData.officialWebsite" placeholder="请输入官方网站地址" maxlength="200" />
        </a-form-item>

        <!-- 门票售价 -->
        <a-form-item label="门票售价" name="ticketPrice">
          <a-input-number v-model:value="formData.ticketPrice" placeholder="请输入门票价格" :min="0" :precision="2"
            style="width: 100%" addon-after="元" />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { message } from 'ant-design-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import type { FormInstance, UploadFile, UploadProps } from 'ant-design-vue';

// 定义组件属性
const props = defineProps({
  // 控制模态框显示/隐藏
  visible: {
    type: Boolean,
    default: false
  },
  // 可选：传入默认值（编辑场景用）
  initData: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: '新增景点'
  }
});

// 定义组件事件
const emit = defineEmits([
  // 关闭模态框事件
  'update:visible',
  // 提交表单事件
  'submit',
  // 取消事件
  'cancel'
]);

// 表单引用
const formRef = ref<FormInstance>();

// 封面文件列表（用于预览）
const coverFileList = ref<UploadFile[]>([]);
// 轮播图文件列表（用于预览）
const carouselFileList = ref<UploadFile[]>([]);

// 上传接口（替换为你的实际接口地址）
const uploadApi = ref('/api/upload/image');

// 表单数据（新增 address 字段）
const formData = reactive({
  spotId: '',                  // 景点ID
  spotName: '',                // 景点名称
  destination: '',             // 所属目的地
  address: '',                 // 新增：详细地址
  coverImage: '',              // 景点封面URL
  carouselImages: [] as string[], // 轮播图URL列表
  introduction: '',            // 介绍
  status: '',                  // 状态
  openTime: '',                // 开放时间
  suggestPlayTime: '',         // 建议游玩时间
  officialWebsite: '',         // 官方网站
  ticketPrice: 0               // 门票售价
});

// 表单校验规则（新增 address 校验规则）
const formRules = reactive({
  spotName: [
    { required: true, message: '请输入景点名称', trigger: 'blur' },
    { max: 100, message: '景点名称长度不能超过100个字符', trigger: 'blur' }
  ],
  destination: [
    { required: true, message: '请选择所属目的地', trigger: 'change' },
    { max: 50, message: '所属目的地长度不能超过50个字符', trigger: 'change' }
  ],
  address: [                   // 新增：详细地址校验
    { required: true, message: '请输入详细地址', trigger: 'blur' },
    { max: 200, message: '详细地址长度不能超过200个字符', trigger: 'blur' }
  ],
  coverImage: [
    { required: true, message: '请上传景点封面', trigger: 'change' }
  ],
  carouselImages: [
    {
      required: true,
      validator: (rule: any, value: string[]) => {
        if (value.length === 0) {
          return Promise.reject('请至少上传1张轮播图片');
        }
        if (value.length > 4) {
          return Promise.reject('最多只能上传4张轮播图片');
        }
        return Promise.resolve();
      },
      trigger: 'change'
    }
  ],
  introduction: [
    { required: true, message: '请输入景点介绍', trigger: 'blur' },
    { max: 500, message: '景点介绍长度不能超过500个字符', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请选择景点状态', trigger: 'change' }
  ],
  openTime: [
    { required: true, message: '请输入开放时间', trigger: 'blur' }
  ],
  suggestPlayTime: [
    { required: true, message: '请输入建议游玩时间', trigger: 'blur' }
  ],
  ticketPrice: [
    { required: true, message: '请输入门票售价', trigger: 'blur' }
  ]
});

// 上传前校验（通用：封面/轮播图共用）
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  // 校验文件类型
  const isImage = file.type.startsWith('image/');
  if (!isImage) {
    message.error('只能上传图片格式文件！');
    return false;
  }
  // 校验文件大小（2MB）
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小不能超过 2MB！');
    return false;
  }
  return true;
};

// 封面上传/状态变更处理
const handleCoverChange: UploadProps['onChange'] = (info) => {
  // 上传成功
  if (info.file.status === 'done') {
    // 假设接口返回的图片URL在 info.file.response.data.url
    const imageUrl = info.file.response?.data?.url || info.file.thumbUrl;
    formData.coverImage = imageUrl;
    coverFileList.value = [info.file]; // 只保留一张封面
    message.success('封面上传成功！');
  }
  // 上传失败
  if (info.file.status === 'error') {
    message.error('封面上传失败，请重试！');
  }
};

// 移除封面处理
const handleCoverRemove: UploadProps['onRemove'] = () => {
  formData.coverImage = '';
  coverFileList.value = [];
};

// 轮播图上传/状态变更处理
const handleCarouselChange: UploadProps['onChange'] = (info) => {
  // 上传成功
  if (info.file.status === 'done') {
    const imageUrl = info.file.response?.data?.url || info.file.thumbUrl;
    // 更新轮播图列表（去重+保持顺序）
    const newList = [...carouselFileList.value];
    const existIndex = newList.findIndex(item => item.uid === info.file.uid);
    if (existIndex > -1) {
      newList[existIndex] = info.file;
    } else {
      newList.push(info.file);
    }
    carouselFileList.value = newList;

    // 更新表单数据中的轮播图URL列表
    formData.carouselImages = newList.map(item => {
      return item.response?.data?.url || item.thumbUrl || '';
    }).filter(Boolean);

    message.success('轮播图上传成功！');
  }
  // 上传失败
  if (info.file.status === 'error') {
    message.error('轮播图上传失败，请重试！');
  }
};

// 移除轮播图处理
const handleCarouselRemove: UploadProps['onRemove'] = (file) => {
  // 移除对应文件
  carouselFileList.value = carouselFileList.value.filter(item => item.uid !== file.uid);
  // 更新表单数据中的轮播图URL列表
  formData.carouselImages = carouselFileList.value.map(item => {
    return item.response?.data?.url || item.thumbUrl || '';
  }).filter(Boolean);
};

// 监听初始化数据（编辑模式回显，自动兼容address字段）
watch(
  () => props.initData,
  (newVal) => {
    if (newVal && props.visible) {
      Object.assign(formData, newVal);
      // 编辑模式下回显封面图片
      if (newVal.coverImage) {
        coverFileList.value = [
          {
            uid: '-1',
            name: 'cover.jpg',
            status: 'done',
            url: newVal.coverImage // 后端返回的封面URL
          }
        ];
      }
      // 编辑模式下回显轮播图片
      if (newVal.carouselImages && Array.isArray(newVal.carouselImages) && newVal.carouselImages.length > 0) {
        carouselFileList.value = newVal.carouselImages.map((url: string, index: number) => ({
          uid: `-carousel-${index}`,
          name: `carousel-${index + 1}.jpg`,
          status: 'done',
          url: url
        }));
      }
    }
  },
  { immediate: true }
);

// 监听模态框显示状态，重置表单
watch(
  () => props.visible,
  (newVal) => {
    if (!newVal) {
      resetForm();
    }
  }
);

// 重置表单（自动重置address字段）
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields();
  }
  // 重置表单数据
  Object.keys(formData).forEach(key => {
    if (key === 'ticketPrice') {
      formData[key as keyof typeof formData] = 0;
    } else if (key === 'carouselImages') {
      formData.carouselImages = [];
    } else {
      formData[key as keyof typeof formData] = '';
    }
  });
  // 清空封面和轮播图
  coverFileList.value = [];
  carouselFileList.value = [];
};

// 提交表单（自动包含address字段）
const handleSubmit = async () => {
  if (!formRef.value) return;

  try {
    // 表单校验（包含address字段校验）
    await formRef.value.validate();
    // 向外触发提交事件，传递包含address的完整表单数据
    emit('submit', { ...formData });
    // 提交成功后关闭模态框
    emit('update:visible', false);
    // 根据标题判断提示文本
    const successText = props.title.includes('新增') ? '新增景点成功！' : '编辑景点成功！';
    message.success(successText);
  } catch (error) {
    message.error('表单校验失败，请检查输入内容！');
    console.error('表单校验错误：', error);
  }
};

// 取消操作
const handleCancel = () => {
  emit('update:visible', false);
  emit('cancel');
  resetForm();
};
</script>

<style scoped lang="scss">
.main {
  max-height: 70vh;
  overflow: auto;
  padding: 20px;

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

// 上传样式优化
.upload-tip {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}

:deep(.ant-upload-picture-card-wrapper) {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

:deep(.ant-upload.ant-upload-select.ant-upload-select-picture-card) {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

// 轮播图上传区域间距优化
:deep(.ant-form-item:nth-child(5)) {
  // 因新增地址字段，序号从4改为5
  margin-bottom: 16px;
}

// 下拉选择框样式优化
:deep(.ant-select-selector) {
  border-radius: 6px;
}

// 地址输入框样式优化
:deep(.ant-input) {
  border-radius: 6px;
}
</style>
