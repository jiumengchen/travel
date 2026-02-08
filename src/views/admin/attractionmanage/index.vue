<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入景点名称" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary" @click="updateVisible = true; title = '新增景点'">新增景点</a-button>
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
      <AttractionModal :visible="updateVisible" @cancel="updateVisible = false" :initData="cloneDeepData"
        :title="title">
      </AttractionModal>
      <ViewAttrModal :visible="viewVisible" @cancel="viewVisible = false" :detailData="cloneDeepData"></ViewAttrModal>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AttractionModal from './components/AttractionModal/index.vue';
import ViewAttrModal from './components/ViewAttrModal/index.vue';
import { cloneDeep } from 'lodash-es';
const cloneDeepData = ref<any>({});
const title = ref<string>('');
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const viewVisible = ref<boolean>(false);
const updateVisible = ref<boolean>(false);
const columns = [
  {
    title: '景点ID',
    dataIndex: 'id',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '景点名称',
    dataIndex: 'spotName',
    width: 15,
    align: 'center',
    ellipsis: true
  },
  {
    title: '所属目的地',
    dataIndex: 'destination',
    width: '10%',
    align: 'center',
    ellipsis: true
  },
  {
    title: '介绍',
    dataIndex: 'introduction',
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
    title: '开放时间',
    dataIndex: 'openTime',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '建议游玩时间',
    dataIndex: 'suggestPlayTime',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '官方网站',
    dataIndex: 'officialWebsite',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '详细地址',
    dataIndex: 'address',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '门票售价',
    dataIndex: 'ticketPrice',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'registerTime',
    width: 10,
    align: 'center',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 20,
    fixed: 'right',
    align: 'center',
    ellipsis: true
  },
];
interface DataItem {
  id: number;
  spotName: string;
  destination: string;
  key: string;
  introduction: string,
  status: number;
  openTime: string;
  suggestPlayTime: string;
  officialWebsite: string;
  ticketPrice: number;
  address: string;
  registerTime: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: i + 1,
    spotName: `景区名称${i}`,
    destination: '北京市',
    introduction: '这是一个旅游景点' + i,
    status: 1,
    openTime: '每天 8:00 - 22:00',
    suggestPlayTime: '3小时-5小时',
    officialWebsite: 'https://www.baidu.com',
    ticketPrice: i,
    address: '广东省深圳市龙岗区坂田大道',
    registerTime: new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleEdit = (record: any) => {
  title.value = '编辑景点'
  cloneDeepData.value = cloneDeep(record);
  updateVisible.value = true;
  console.log(cloneDeepData.value);
}
const handleDeleteUser = (record: any) => {
  delTitle.value = `您确定要删除 “${record.spotName}” 该景点吗？`;
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
  cloneDeepData.value = cloneDeep(record);
  viewVisible.value = true;
}
</script>

<style scoped></style>
