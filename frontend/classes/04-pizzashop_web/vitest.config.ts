import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: ["./test/vitest.setup.ts"],
      environment: "happy-dom",
    },
  }),
);
