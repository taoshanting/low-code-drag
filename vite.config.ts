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
  // 添加服务器配置
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    cors: true,
    proxy: {
      // 代理所有 /api 前缀的请求
      '/api': {
        // 实际的后端接口地址，这里先用 mock 服务地址
        target: 'http://localhost:3000',
        // 允许跨域
        changeOrigin: true,
        // 是否重写路径
        rewrite: (path) => path.replace(/^\/api/, ''),
        // 配置请求头
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        // 配置 ws
        ws: true,
      },
    
    },
  },
  // 构建配置
  build: {
    // 构建后的文件目录
    outDir: 'dist',
    // 构建后的静态资源目录
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        // 用于控制输出的 chunk 分割
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'antd-vendor': ['antd'],
        },
      },
    },
    // 设置为 false 可以禁用最小化混淆
    minify: 'terser',
    // terser 配置
    terserOptions: {
      compress: {
        // 生产环境时移除 console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
