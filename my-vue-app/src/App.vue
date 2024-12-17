<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { PageName } from '@/types/index';
const router = useRouter();
onMounted(() => {
  router.push({ name: PageName.Auth });
});
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style scoped></style>
