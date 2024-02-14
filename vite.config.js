import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
          dir: './dist',
          entryFileNames: 'index.js',
          manualChunks: undefined,
      },
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
}
});
