import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        lossless: true,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
            },
          },
          "sortAttrs",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
    }),
    Sitemap({ hostname: "https://khushneel.in", dynamicRoutes: ["/"] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@animations": path.resolve(__dirname, "./src/animations"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // suppress eval warning from lottie-web (third-party, can't be changed)
        if (warning.code === "EVAL" && warning.id?.includes("lottie")) return;
        warn(warning);
      },
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          gsap: ["gsap"],
          framer: ["framer-motion"],
          lottie: ["lottie-react"],
          icons: ["react-icons"],
          particles: ["@tsparticles/react", "@tsparticles/slim"],
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-helmet-async",
          ],
        },
      },
    },
  },
});
