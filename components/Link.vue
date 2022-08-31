<template>
  <a class="w-full rounded-md flex gap-6 px-6 py-4 bg-slate-100 border-solid border-2 border-slate-100 transition-all hover:border-slate-200" :href="data.url" target="blank">
    <Icon />
    <h3>{{ data.title }}</h3>
  </a>
</template>

<script setup lang="ts">
import { Component } from "vue"
import { Link } from './LinkInterface'

interface Props {
  data: Link
}

const { data } = defineProps<Props>()

const Icon: Component = defineAsyncComponent(() =>
  import(`assets/svg/${data.img}.svg`)
)
</script>