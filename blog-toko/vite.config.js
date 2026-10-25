import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite' // Hapus baris ini jika Anda masih pakai Tailwind v3

export default defineConfig({
  plugins: [
    tailwindcss(), // Hapus baris ini jika Anda masih pakai Tailwind v3
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        produk: resolve(__dirname, 'produk.html'),
        detail: resolve(__dirname, 'detail-produk.html')
      }
    }
  }
})