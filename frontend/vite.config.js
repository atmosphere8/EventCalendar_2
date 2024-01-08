import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@videos": fileURLToPath(new URL("./src/assets/videos", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
      "@abstracts": fileURLToPath(
        new URL("./src/assets/styles/sass/abstracts", import.meta.url)
      ),
      "@fonts": fileURLToPath(new URL("./src/assets/fonts", import.meta.url)),
    },
  },
});
