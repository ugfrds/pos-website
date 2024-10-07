import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pos-website/', // This ensures the correct base path for GitHub Pages
  plugins: [react()],
})
