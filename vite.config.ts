import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-library",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
})
