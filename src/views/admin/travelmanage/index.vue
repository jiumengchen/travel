<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入目的地名称" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary" @click="updateVisible = true; title = '新增公告'">新增公告</a-button>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource" :scroll="{ x: 2000 }">
        <template #operationBtn="{ data }">
          <a-button type="primary" @click="handleView(data.record)">查看更多</a-button>
          <a-button type="primary" @click="handleEdit(data.record)">编辑</a-button>
          <a-button type="primary" danger @click="handleDeleteUser(data.record)">删除</a-button>
        </template>
        <template #status="{ data }">
          <a-tag :color="data.record.status === 1 ? 'green' : 'red'">{{ data.record.status === 1 ? '正常' : '封禁'
          }}</a-tag>
        </template>
      </x-table>
      <notify-confirm type="danger" :title="delTitle" :isShow="isDelTips" @cancel="handleDelCancel"
        @confirm="handleDelConfirm"></notify-confirm>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import { cloneDeep } from 'lodash-es';
const cloneDeepData = ref<any>({});
const title = ref<string>('');
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const viewVisible = ref<boolean>(false);
const updateVisible = ref<boolean>(false);
const columns = [
  {
    title: '公告ID',
    dataIndex: 'id',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '公告类型',
    dataIndex: 'name',
    width: 15,
    align: 'center',
    ellipsis: true
  },
  {
    title: '公告标题',
    dataIndex: 'region',
    width: '10%',
    align: 'center',
    ellipsis: true
  },
  {
    title: '公告正文',
    dataIndex: 'intro',
    width: 15,
    align: 'center',
    ellipsis: true
  },
  {
    title: '发布人ID',
    dataIndex: 'intro',
    width: 15,
    align: 'center',
    ellipsis: true
  },
  {
    title: '发布人昵称',
    dataIndex: 'intro',
    width: 15,
    align: 'center',
    ellipsis: true
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 5,
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
    width: 13,
    fixed: 'right',
    align: 'center',
    ellipsis: true
  },
];
interface DataItem {
  key: string;
  id: number;
  name: string;
  cover: string;
  region: string;
  type: string;
  intro: string;
  bestTravelTime: string;
  language: string;
  currency: string;
  powerSocket: string;
  paymentMethod: string;
  tags: string;
  createTime: string;

}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: i + 1,
    name: `目的地名称 ${i}`,
    cover: 'https://img2.baidu.com/it/u=775383497,2207713348&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    region: '中国',
    type: '自然景观',
    intro: '这是一个介绍' + i + 1,
    bestTravelTime: '3月 - 5月',
    language: '普通话',
    currency: '人民币(RMB)',
    powerSocket: 'A型',
    paymentMethod: '支付宝、微信',
    tags: '自然景观',
    createTime: new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleEdit = (record: any) => {
  title.value = '编辑目的地'
  cloneDeepData.value = cloneDeep(data.filter(t => t.id === record.id)[0]);
  updateVisible.value = true;
  console.log(cloneDeepData.value);
}
const handleDeleteUser = (record: any) => {
  delTitle.value = `您确定要删除 “${record.name}” 该用户吗？`;
  isDelTips.value = true;
}

const handleDelCancel = () => {
  delTitle.value = ''
  isDelTips.value = false;
}

const handleDelConfirm = () => {
  isDelTips.value = false;
}

const handleView = (record: any) => {
  cloneDeepData.value = cloneDeep(data.find(t => t.id === record.id));
  viewVisible.value = true;
}
</script>

<style scoped></style>
