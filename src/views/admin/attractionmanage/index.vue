<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入目的地名称" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary" @click="updateVisible = true;title = '新增目的地'">新增目的地</a-button>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource">
        <template #operationBtn="{data}">
          <a-button type="primary" @click="handleView(data.record)">查看更多</a-button>
          <a-button type="primary" @click="handleEdit(data.record)">编辑</a-button>
          <a-button type="primary" danger @click="handleDeleteUser(data.record)">删除</a-button>
        </template>
        <template #status="{data}">
            <a-tag :color="data.record.status === 1 ? 'green' : 'red'">{{ data.record.status === 1 ? '正常' : '封禁'}}</a-tag>
        </template>
      </x-table>
      <notify-confirm type="danger" :title="delTitle" :isShow="isDelTips" @cancel="handleDelCancel" @confirm="handleDelConfirm"></notify-confirm>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';
const cloneDeepData = ref<any>({});
const title = ref<string>('');
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const viewVisible = ref<boolean>(false);
const updateVisible = ref<boolean>(false);
const columns = [
  {
    title: '目的地ID',
    dataIndex: 'name',
    width: 10,
    align:'center',
    ellipsis: true
  },
  {
    title: '名称',
    dataIndex: 'email',
    width: 15,
    align:'center',
    ellipsis: true
  },
  {
    title: '所属地区',
    dataIndex: 'password',
    width: '10%',
    align:'center',
    ellipsis: true
  },
  {
    title: '介绍',
    dataIndex: 'password',
    width: 15,
    align:'center',
    ellipsis: true
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 5,
    align:'center',
    ellipsis: true
  },
   {
    title: '创建时间',
    dataIndex: 'registerTime',
    width: 10,
    align:'center',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width:15,
    fixed: 'right',
    align:'center',
    ellipsis: true
  },
];
interface DataItem {
  key: string;
  name: string;
  email: string;
  status:number;
  role:number;
  password: string;
  registerTime:string,
  lastLoginTime:string
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    role:1,
    status: 1,
    email: `2879668${i}@qq.com`,
    password: `London Park no. ${i}1111111111111111111111`,
    registerTime:new Date().toLocaleDateString(),
    lastLoginTime:new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleEdit = (record:any)=>{
  title.value = '编辑目的地'
  cloneDeepData.value = cloneDeep(record);
  updateVisible.value = true;
  console.log(cloneDeepData.value);
}
const handleDeleteUser = (record:any)=>{
  delTitle.value = `您确定要删除 “${record.name}” 该用户吗？`;
  isDelTips.value = true;
}

const handleDelCancel = ()=>{
  delTitle.value = ''
  isDelTips.value = false;
}

const handleDelConfirm = ()=>{
  isDelTips.value = false;
}

const handleView = (record:any)=>{
  viewVisible.value = true;
}
</script>

<style scoped></style>
