import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Nome do repositório (case-sensitive!)
  base: "/Plantio-SiteApresentacao/" 
})