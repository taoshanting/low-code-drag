import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import styleImport from 'vite-plugin-style-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
 
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 如果有全局 less 变量文件，可在这里引入
        // additionalData: `@import "@/styles/variables.less";`
      },
    },
  },
})
