<template>
  <div class="layout">
    <AdminBreadcrumb />
    <div class="top">
      <div class="left">
        <slot name="HeaderLeft"></slot>
      </div>
      <div class="right">
        <slot name="HeaderRight"></slot>
      </div>
    </div>
    <div class="main">
      <slot name="Main"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .top {
    margin-top: 20px;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .main {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 122px);
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
}
</style>
