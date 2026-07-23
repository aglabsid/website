import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://aglabs.id',
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
