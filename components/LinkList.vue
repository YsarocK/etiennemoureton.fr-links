<template>
  <ul class="flex flex-col w-full max-w-lg gap-14">
    <div v-for="category in categories" :key="category">
      <h2 class="mb-4 capitalize font-bold">{{ category }}</h2>
      <ul class="flex flex-col gap-4 w-full max-w-lg">
        <Link v-for="link in data.filter(el => el.type === category)" :key="link.name" :data="link" />
      </ul>
    </div>
  </ul>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import ExternalLink from './LinkInterface'
interface ParsedLink extends ParsedContent, ExternalLink {}

const { data } = await useAsyncData('data', () => queryContent<ParsedLink>('/links').find())

const categories = ref([])
data.value.forEach((el) => {
  !categories.value.includes(el.type) && categories.value.push(el.type)
})
</script>