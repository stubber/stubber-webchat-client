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
    resolve: {
      alias: {
        '$': resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "index.js",
          manualChunks: undefined,
        },
        input: {
          main: resolve(__dirname, "./src/lib/webchat.svelte"),
        },
      },
    },
    envDir: "./",
  }

  if (mode == "development") {
    config.build.rollupOptions.output.dir = "./dist_dev"
  }

  if (mode == "production") {
    config.build.rollupOptions.output.dir = "./dist"
  }

  return config
});
