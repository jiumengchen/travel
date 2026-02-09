<template>
  <a-modal
    v-model:visible="props.visible"
    title="新增类型"
    ok-text="确定"
    cancel-text="取消"
    @ok="handleOk"
    @cancel="handleCancel"
    centered
  >
    <a-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      layout="vertical"
    >
      <!-- 类型名称 -->
      <a-form-item
        label="类型名称"
        name="typeName"
      >
        <a-input
          v-model:value="formData.typeName"
          placeholder="请输入类型名称"
          maxlength="50"
          show-count
        />
      </a-form-item>

      <!-- 关联模块 -->
      <a-form-item
        label="关联模块"
        name="associated"
      >
        <a-select
          v-model:value="formData.associated"
          placeholder="请选择关联模块"
          style="width: 100%"
        >
          <!-- 这里可以根据实际业务替换为动态数据 -->
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
import type { FormInstance } from 'ant-design-vue';

// 定义组件Props
interface Props {
  visible: boolean;
  // 可选：如果需要编辑已有数据，可传入初始值
  initialData?: {
    typeName?: string;
    associated?: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  initialData: () => ({})
});

// 定义组件Emits
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'submit', data: { typeName: string; associated: string }): void;
  (e: 'cancel'): void;
}>();

// 表单引用
const formRef = ref<FormInstance>();

// 表单数据
const formData = reactive({
  typeName: props.initialData?.typeName || '',
  associated: props.initialData?.associated || ''
});

watch(()=>props.initialData,()=>{
    Object.assign(formData,props.initialData)
})

// 表单校验规则
const formRules = reactive({
  typeName: [
    { required: true, message: '请输入类型名称', trigger: 'blur' },
    { max: 50, message: '类型名称最多50个字符', trigger: 'blur' }
  ],
  associated: [
    { required: true, message: '请选择关联模块', trigger: 'change' }
  ]
});

// 确认提交
const handleOk = async () => {
  if (!formRef.value) return;
  
  try {
    // 表单校验
    await formRef.value.validate();
    
    // 提交数据（这里可根据需要补充createTime等字段，一般由后端生成）
    const submitData = {
      typeName: formData.typeName,
      associated: formData.associated
    };
    
    // 向外触发提交事件
    emit('submit', submitData);
    
    // 重置表单
    resetForm();
    
    // 关闭模态框
    emit('update:visible', false);
  } catch (error) {
    console.error('表单校验失败:', error);
  }
};

// 取消操作
const handleCancel = () => {
  // 重置表单
  resetForm();
  
  // 触发取消事件
  emit('cancel');
  
  // 关闭模态框
  emit('update:visible', false);
};

// 重置表单数据
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields();
  }
  formData.typeName = '';
  formData.associated = '';
};
</script>

<style scoped>
/* 可根据需要自定义样式 */
.ant-modal-body {
  padding: 20px;
}
.ant-form-item {
  margin-bottom: 16px;
}
</style>