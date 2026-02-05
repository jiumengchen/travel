<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入用户邮箱" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource">
        <template #operationBtn="{data}">
          <a-button  @click="handleUser(data.record)" class="delBanBtn">查看 / 解封</a-button>
        </template>
        <template #status="{data}">
            <a-tag :color="data.record.status === 1 ? 'green' : 'red'">{{ data.record.status === 1 ? '正常' : '封禁'}}</a-tag>
        </template>
      </x-table>
      <notify-confirm type="danger" :title="delTitle" :isShow="isDelTips" @cancel="handleCancel" @confirm="handleConfirm"></notify-confirm>
      <UserDetailModal :visible="modalOpen" @cancel="handleUnbanCancel" @unblock="handleUnban" :userData="userData"></UserDetailModal>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserDetailModal from './components/UserDetailModal/index.vue'
import { cloneDeep } from 'lodash-es';
const modalOpen = ref<boolean>(false);
const title = ref<string>('');
const userData = ref<any>({});
const delTitle = ref<string>('');
const isDelTips = ref<boolean>(false);
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    width: '10%',
    align:'center'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: '15%',
    align:'center'
  },
  {
    title: '封禁原因',
    dataIndex: 'banReason',
    width: '20%',
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
  banReason: string;
  registerTime:string,
  lastLoginTime:string
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    role:1,
    status: 2,
    email: `2879668${i}@qq.com`,
    banReason: `被举报了 ${i}`,
    registerTime:new Date().toLocaleDateString(),
    lastLoginTime:new Date().toLocaleDateString()
  });
}
const dataSource = ref(data);
const handleUser = (record:any)=>{
  modalOpen.value = true;
  userData.value = cloneDeep(record);
}

const handleCancel = ()=>{
  delTitle.value = ''
  isDelTips.value = false;
}

const handleConfirm = ()=>{
  isDelTips.value = false;
}

const handleUnban = ()=>{
  delTitle.value = `您确定要解封 “${userData.value.name}” 用户吗？`;
  isDelTips.value = true;
}
const handleUnbanCancel = ()=>{
  modalOpen.value = false;
}
</script>

<style scoped lang="scss">
.delBanBtn{
  background-color: #10B981;
  color: #fff;
  border: none;
  &:hover{
    filter: brightness(110%);
    border: none;
    color: #fff;
  }
}
</style>
