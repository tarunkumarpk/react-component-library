import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "my-library",
   		 
      fileName: "outputFile",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
})
