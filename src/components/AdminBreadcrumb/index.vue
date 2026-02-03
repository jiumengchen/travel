<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="item in $route.matched">{{ item.meta.title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const $route = useRoute();
console.log($route.matched)
</script>

<style scoped></style>
