<template>
  <a-table :columns="props.columns" :data-source="props.dataSource" bordered rowClassName="rowClassName">
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

</script>
<style scoped>
.operation-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.rowClassName{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
</style>
