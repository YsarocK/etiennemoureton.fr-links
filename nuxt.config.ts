import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'vue-plausible'
  ],
  plausible: {
    domain: 'links.etiennemoureton.fr',
    enableAutoOutboundTracking: true
  }
})
