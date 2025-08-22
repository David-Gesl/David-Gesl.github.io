import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import tailwind css plugin 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Add tailwind css plugin
  ],
})
