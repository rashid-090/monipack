import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  }
})