<template>
  <a-table :columns="props.columns" :data-source="props.dataSource" bordered>
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <div class="operation-button">
          <slot name="operationBtn" :data="{record}"></slot>
        </div>
      </template>
       <template v-if="column.dataIndex === 'status'">
        <div class="operation-button">
          <slot name="status" :data="{record}"></slot>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const props = defineProps({
  columns:{
    type:Array,
    default:[]
  },
  dataSource:{
    type:Array,
    default:[]
  }
})
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}


const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

const edit = (key: string) => {
  editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
};
const save = (key: string) => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
};
const cancel = (key: string) => {
  delete editableData[key];
};
</script>
<style scoped>
.operation-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
