<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入标签名称" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary" @click="updateVisible = true; title = '新增标签';cloneDeepData={}">新增标签</a-button>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource">
        <template #operationBtn="{ data }">
          <a-button type="primary" @click="handleEdit(data.record)">编辑</a-button>
          <a-button type="primary" danger @click="handleDeleteUser(data.record)">删除</a-button>
        </template>
        <template #tag="{ data }">
          <a-tag :color="data.record.tagColor">{{ data.record.tag}}</a-tag>
        </template>
      </x-table>
      <notify-confirm type="danger" :title="delTitle" :isShow="isDelTips" @cancel="handleDelCancel"
        @confirm="handleDelConfirm"></notify-confirm>
        <TagModal :visible="updateVisible" :title="title" :initData="cloneDeepData" @cancel="handleCancel"></TagModal>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import TagModal from './components/TagModal/index.vue'
const cloneDeepData = ref<any>({});
const title = ref<string>('');
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const updateVisible = ref<boolean>(false);
const columns = [
  {
    title: '标签ID',
    dataIndex: 'id',
    width: 5,
    align: 'center',
    ellipsis: true
  },
  {
    title: '标签',
    dataIndex: 'tag',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '标签颜色',
    dataIndex: 'tagColor',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '关联模块',
    dataIndex: 'associated',
    width: '10%',
    align: 'center',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 10,
    fixed: 'right',
    align: 'center',
    ellipsis: true
  },
];
interface DataItem {
  key:string;
  id: number;
  tag: any;
  tagColor: string;
  associated: string,
  createTime: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: i + 1,
    tag: '标签' + i,
    tagColor: 'green',
    associated:'目的地',
    createTime: new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleEdit = (record: any) => {
  title.value = '编辑标签'
  cloneDeepData.value = cloneDeep(record);
  updateVisible.value = true;
  console.log(cloneDeepData.value);
}
const handleDeleteUser = (record: any) => {
  delTitle.value = `您确定要删除 “${record.tag}” 该标签吗？`;
  isDelTips.value = true;
}

const handleDelCancel = () => {
  delTitle.value = ''
  isDelTips.value = false;
}

const handleDelConfirm = () => {
  isDelTips.value = false;
}

const handleCancel = ()=>{
  updateVisible.value = false
}
</script>

<style scoped></style>
