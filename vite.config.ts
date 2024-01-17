import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Unocss(),],
  // vite 别名
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://139.198.34.216:8201/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/aps': {
        target: 'http://139.198.34.216:8202/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aps/, '')
      }
    }
  },
  
})
