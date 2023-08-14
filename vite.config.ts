import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./restaurentapp2023-privateKey.key",
      cert: "./restaurentapp2023.crt",
    },
  },
  plugins: [react()],
});
