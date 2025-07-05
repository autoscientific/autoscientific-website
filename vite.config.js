import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // Multi-page setup
  build: {
    rollupOptions: {
      input: {
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
        about: resolve(fileURLToPath(new URL('.', import.meta.url)), 'about.html'),
        'thank-you': resolve(fileURLToPath(new URL('.', import.meta.url)), 'thank-you.html')
      }
    }
  },
  // Development server configuration
  server: {
    port: 1234,
    open: true
  },
  // CSS handling
  css: {
    devSourcemap: true
  }
})
