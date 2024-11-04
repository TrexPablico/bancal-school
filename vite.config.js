import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // para sa kwan sa jpg JPG error
  assetsInclude: ["**/*.jpg", "**/*.JPG"],
});
