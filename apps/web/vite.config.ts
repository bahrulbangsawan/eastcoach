import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  // Always include Cloudflare plugin for build, but for dev only if dist exists
  // This avoids the chicken-and-egg problem during local development
  const useCloudflare =
    command === "build" || existsSync("./dist/server/server.js");

  return {
    plugins: [
      tsconfigPaths(),
      useCloudflare && cloudflare({ viteEnvironment: { name: "ssr" } }),
      tanstackStart(),
      viteReact(),
    ].filter(Boolean),
    server: {
      port: 3001,
    },
  };
});
