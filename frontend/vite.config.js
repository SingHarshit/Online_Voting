import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://college-system-eq4r.onrender.com',
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import './src/index.css';`,
      },
    },
  },
})
