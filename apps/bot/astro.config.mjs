import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  redirects: {
    '/chat': 'https://t.me/aglabs_bot',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
