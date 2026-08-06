import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Photo_portfolio/', // must match your repo name exactly, with leading & trailing slash
})