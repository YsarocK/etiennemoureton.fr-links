<template>
  <div class="h-screen flex flex-col justify-center gap-20 items-center p-6">
    <Heading />
    <LinkList />
  </div>
</template>
<script setup>
useHead({
  title: 'My links',
})
</script>