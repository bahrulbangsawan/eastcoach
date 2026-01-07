import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Only include Cloudflare plugin if dist exists (avoids chicken-and-egg problem)
const useCloudflare = existsSync("./dist/server/server.js");

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    useCloudflare && cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    viteReact(),
  ].filter(Boolean),
  server: {
    port: 3001,
  },
});
