import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),   
    tailwindcss(),
  ],
  build: {
    // Increases the warning limit to 1000 KB (1 MB)
    chunkSizeWarningLimit: 1000, 
  }
})

