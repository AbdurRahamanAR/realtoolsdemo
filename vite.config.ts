import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1849C6",
          "link-color": "#1849C6",
          "border-radius-base": "10px",
          "height-base": "50px",
          "height-lg": "65px",
        },
        javascriptEnabled: true,
      },
    },
  },
});
