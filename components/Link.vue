<template>
  <a class="w-full rounded-md flex gap-6 px-6 py-4 bg-slate-100" :href="data.url" target="blank">
    <Icon />
    <h1 class="">{{ data.title }}</h1>
  </a>
</template>

<script setup>
const props = defineProps({
  data: Object
})

const Icon = defineAsyncComponent(() =>
  import(`assets/svg/${props.data.img}.svg`)
)
</script>