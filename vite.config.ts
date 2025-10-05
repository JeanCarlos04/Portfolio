import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          projects: ["src/dataComponents/projects.data.ts"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
