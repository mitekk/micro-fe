import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const APPLICATION_PORT = 8082;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT,
  },
  plugins: [
    react(),
    federation({
      name: "react-app",
      filename: "reactApp.js",
      exposes: {
        "./App": "./src/WithState.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
