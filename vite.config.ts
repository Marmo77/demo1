import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/demo1',
  server: {
    host: "0.0.0.0",
    port: 5173,
    fs: {
      strict: false,
    }
  },
  plugins: [react()],
})
