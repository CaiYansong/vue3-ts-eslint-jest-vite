import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: {
      "@": "/src",
    },
  },
})
