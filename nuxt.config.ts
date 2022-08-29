import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
  ],
  image: {
    provider: 'ipx',
    dir: 'assets/img'
  }
})
