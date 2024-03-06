import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path';
import cssnano from 'cssnano';

export default defineConfig(({ mode }) => {
  console.log(`Building for ${mode}...`);

  return {
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
        },
      }
      )],
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
    },
    envDir: './',
    css: {
      postcss: {
        plugins: [cssnano({
          preset: 'default',
        })],
      },
    },
  };
})
