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
  </TemplateComponent>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
