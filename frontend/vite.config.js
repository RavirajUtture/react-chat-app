import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const VITE_BASE_URL="http://localhost:5000"
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: VITE_BASE_URL,
      },
    },
  },
});
