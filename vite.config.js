import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
})