import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/test_redTaxi/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.redtaxi.co.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
