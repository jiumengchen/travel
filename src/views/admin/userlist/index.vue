<template>
  <TemplateComponent>
    <template #HeaderLeft>
      <a-input-search v-model:value="value" placeholder="请输入用户邮箱" enter-button @search="onSearch"
        style="width: 300px;" />
    </template>
    <template #HeaderRight>
      <a-button type="primary">新增用户</a-button>
      <a-button type="primary">刷新</a-button>
      <a-button type="primary">重置</a-button>
    </template>
    <template #Main>
      <x-table :columns="columns" :dataSource="dataSource">
        <template #operationBtn="{data}">
          <a-button type="primary" @click="handleEdit(data.record)">编辑</a-button>
          <a-button type="primary" danger>删除</a-button>
        </template>
        <template #status="{data}">
            <a-tag :color="data.record.status === 1 ? 'green' : 'red'">{{ data.record.status === 1 ? '正常' : '封禁'}}</a-tag>
        </template>
      </x-table>
    </template>
  </TemplateComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    width: '10%',
    align:'center'
  },
  {
    title: '邮箱',
    dataIndex: 'age',
    width: '15%',
    align:'center'
  },
  {
    title: '密码',
    dataIndex: 'address',
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
  age: number;
  status:number;
  role:number;
  address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    role:1,
    status: 1,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const dataSource = ref(data);
const handleEdit = (record:any)=>{
  console.log(record);
}
</script>

<style scoped></style>
