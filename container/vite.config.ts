import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from '@originjs/vite-plugin-federation'

const APPLICATION_PORT = 8080

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: 'esnext'
  },
  server: {
    port: APPLICATION_PORT
  },
  preview: {
    port: APPLICATION_PORT
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'container-app',
      remotes: {
        vue_app: 'http://localhost:8081/assets/vueApp.js',
        react_app: 'http://localhost:8082/assets/reactApp.js'
      },
      shared: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
