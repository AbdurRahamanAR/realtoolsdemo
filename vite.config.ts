import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1849C6',
          'link-color': '#1849C6',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
})