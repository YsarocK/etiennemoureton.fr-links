<template>
  <ul class="flex flex-col gap-4">
    <Link v-for="link in data" :key="link.id" :data="link" />
  </ul>
</template>

<script setup>
const { data } = await useAsyncData('data', () => queryContent('/links').find())
</script>