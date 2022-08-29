<template>
  <a class="rounded-md flex gap-8 px-6 py-4 bg-slate-100" :href="data.url" target="blank">
    <h1 class="">{{ data.title }}</h1>
  </a>
</template>

<script setup>
const props = defineProps({
  data: Object
})

onMounted(() => {
  console.log(props.data.img) // medium
})
</script>