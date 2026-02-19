import type { ManifestV3Export } from "@crxjs/vite-plugin"
import type { BuildOptions } from "vite"
import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import devManifest from "./manifest.dev.json"
import manifest from "./manifest.json"
import pkg from "./package.json"

// eslint-disable-next-line node/prefer-global/process
const isDev = process.env.__DEV__ === "true"
export const baseManifest = {
  ...manifest,
  version: pkg.version,
  ...(isDev ? devManifest : {} as ManifestV3Export),
} as ManifestV3Export

export const baseBuildOptions: BuildOptions = {
  emptyOutDir: !isDev,
  rollupOptions: {
    input: {},
    output: {
      entryFileNames: chunk => `src/pages/${chunk.name}/index.js`,
    },
  },
  sourcemap: isDev,
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    react(),
  ],
  publicDir: resolve(__dirname, "public"),
})
