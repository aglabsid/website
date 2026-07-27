import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://aglabs.id',
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
