<template>
  <a-modal
    v-model:open="props.visible"
    title="新增标签"
    ok-text="确认添加"
    cancel-text="取消"
    @ok="handleSubmit"
    @cancel="handleCancel"
    centered
  >
    <a-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      layout="vertical"
    >
      <!-- 标签名称 -->
      <a-form-item
        label="标签"
        name="tag"
      >
        <a-input
          v-model:value="formData.tag"
          placeholder="请输入标签名称"
          maxlength="50"
          show-count
        />
      </a-form-item>

      <!-- 标签颜色 -->
      <a-form-item
        label="标签颜色"
        name="tagColor"
      >
        <a-select
          v-model:value="formData.tagColor"
          placeholder="请选择标签颜色"
          allow-clear="false"
        >
          <a-select-option
            v-for="color in colorOptions"
            :key="color.value"
            :value="color.value"
          >
            <span :style="{ color: color.value }">{{ color.label }}</span>
          </a-select-option>
        </a-select>
      </a-form-item>

      <!-- 关联模块 -->
      <a-form-item
        label="关联模块"
        name="associated"
      >
        <a-select
          v-model:value="formData.associated"
          placeholder="请选择关联模块"
          allow-clear
        >
          <!-- 这里可以根据实际业务需求替换为后端接口返回的数据 -->
          <a-select-option value="module1">模块1</a-select-option>
          <a-select-option value="module2">模块2</a-select-option>
          <a-select-option value="module3">模块3</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';

// 定义组件属性
const props = defineProps({
  // 控制弹窗显示/隐藏
  visible: {
    type: Boolean,
    default: false
  },
  // 编辑时传入的初始数据（可选）
  initData: {
    type: Object,
    default: () => ({})
  }
});

// 定义组件事件
const emit = defineEmits(['cancel', 'submit']);

// 表单引用
const formRef = ref<FormInstance>();

// 标签颜色可选值
const colorOptions = [
  { label: '粉色', value: 'pink' },
  { label: '红色', value: 'red' },
  { label: '橙色', value: 'orange' },
  { label: '绿色', value: 'green' },
  { label: '青色', value: 'cyan' },
  { label: '蓝色', value: 'blue' },
  { label: '紫色', value: 'purple' }
];

// 表单数据
const formData = reactive({
  tag: '',         // 标签名称
  tagColor: '',    // 标签颜色
  associated: ''   // 关联模块
});

// 表单校验规则
const formRules = reactive<Record<string, Rule[]>>({
  tag: [
    { required: true, message: '请输入标签名称', trigger: 'blur' },
    { min: 1, max: 50, message: '标签名称长度应在1-50个字符之间', trigger: 'blur' }
  ],
  tagColor: [
    { required: true, message: '请选择标签颜色', trigger: 'change' }
  ],
  associated: [
    { required: true, message: '请选择关联模块', trigger: 'change' }
  ]
});

watch(()=>props.initData,()=>{
    Object.assign(formData, props.initData);
})

// 提交表单
const handleSubmit = async () => {
  try {
    // 表单校验
    await formRef.value?.validate();
    
    // 补充自动生成的字段（实际项目中这些字段通常由后端生成）
    const submitData = {
      ...formData,
      id: Date.now().toString(), // 临时ID，实际项目中由后端返回
      createTime: new Date().toISOString(), // 创建时间
      operation: '' // 操作列无需前端填充
    };
    
    // 触发提交事件，将数据传递给父组件
    emit('submit', submitData);
    
    // 重置表单
    formRef.value?.resetFields();
  } catch (error) {
    console.error('表单校验失败:', error);
  }
};

// 取消/关闭弹窗
const handleCancel = () => {
  // 重置表单
  formRef.value?.resetFields();
  // 触发关闭事件
  emit('cancel');
};
</script>

<style scoped>
/* 可选：自定义样式 */
.ant-select-option-content span {
  font-weight: 500;
}
</style>