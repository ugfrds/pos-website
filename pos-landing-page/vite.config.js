import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures the correct base path for GitHub Pages
  plugins: [react()],
})
