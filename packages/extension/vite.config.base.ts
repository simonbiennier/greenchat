import { ManifestV3Export } from "@crxjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { BuildOptions, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { crxI18n, stripDevIcons } from "./custom-vite-plugins";
import devManifest from "./manifest.dev.json";
import manifest from "./manifest.json";
import pkg from "./package.json";

const isDev = process.env.__DEV__ === "true";
// set this flag to true, if you want localisation support
const localise = false;

export const baseManifest = {
  ...manifest,
  version: pkg.version,
  ...(isDev ? devManifest : {} as ManifestV3),
  ...(localise
    ? {
        default_locale: "en",
        description: "__MSG_extDescription__",
        name: "__MSG_extName__"
      }
    : {})
} as ManifestV3Export;

export const baseBuildOptions: BuildOptions = {
  emptyOutDir: !isDev,
  rollupOptions: {
    input: {},
    output: {
      entryFileNames: chunk => `src/pages/${chunk.name}/index.js`
    }
  },
  sourcemap: isDev
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    react(),
    stripDevIcons(isDev),
    crxI18n({ localise, src: "./src/locales" })
  ],
  publicDir: resolve(__dirname, "public")
});
