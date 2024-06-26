import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  console.log(`Building for ${mode}...`);

  let config = {
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
        },
      }),
    ],
    base:"",
    resolve: {
      alias: {
        '$': resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: (bundle_info) => {
            if (bundle_info.name == "main"){
              return "index.js"
            }
          },
          manualChunks: undefined,
        },
        input: {
          main: resolve(__dirname, "./src/lib/webchat.svelte")
        },
      },
    },
    envDir: "./",
  }

  if (mode == "production") {
    config.build.rollupOptions.output.dir = "./dist_live"
  }

  
  if (mode == "devmaster") {
    config.build.rollupOptions.output.dir = "./dist_devmaster"
  }

  if (mode == "dev") {
    config.build.rollupOptions.output.dir = "./dist_dev"
  }

  return config
});
