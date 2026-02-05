<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入用户邮箱" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary" @click="modalOpen = true;title='新增角色';cloneDeepData={}">新增角色</a-button>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource">
        <template #operationBtn="{data}">
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
import { getInstance } from 'ant-design-vue/es/message';
const modalOpen = ref<boolean>(false);
const cloneDeepData = ref<any>({});
const title = ref<string>('');
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const vm = getInstance();
const columns = [
  {
    title: '角色ID',
    dataIndex: 'name',
    width: '10%',
    align:'center'
  },
  {
    title: '角色名称',
    dataIndex: 'email',
    width: '15%',
    align:'center'
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: '10%',
    align:'center'
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: '10%',
    align:'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: '5%',
    align:'center'
  },
   {
    title: '注册时间',
    dataIndex: 'registerTime',
    width: '10%',
    align:'center'
  },
   {
    title: '最后登录时间',
    dataIndex: 'lastLoginTime',
    width: '10%',
    align:'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width:'5%',
    fixed: 'right',
    align:'center'
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
    password: `London Park no. ${i}`,
    registerTime:new Date().toLocaleDateString(),
    lastLoginTime:new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleEdit = (record:any)=>{
  title.value = '编辑用户'
  cloneDeepData.value = cloneDeep(record);
  modalOpen.value = true;
  console.log(cloneDeepData.value);
}
const handleUser = ()=>{
  modalOpen.value = false;
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
</script>

<style scoped></style>
