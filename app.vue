<template>
  <div class="m-h-screen flex flex-col justify-center gap-20 items-center px-6 py-[10rem]">
    <Heading />
    <LinkList />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'My links',
  meta: [
    { name: 'robots', content: 'noindex' }
  ],
})
</script>