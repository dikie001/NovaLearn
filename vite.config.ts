import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Novalearn",
        short_name: "Nova",
        start_url: "/",
        display: "standalone",
        background_color: "ffffff", // dark purple (Tailwind's purple-950)
        theme_color: "#030712", // Tailwind's gray-950
        description: "Presonal app for learning and quizzes",
        icons: [
          {
            src: "/images/novalearn.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/novalearn.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit fix
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,woff2,mp3,ogg,wav}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination === "document" ||
              request.destination === "script" ||
              request.destination === "style" ||
              request.url.endsWith(".json"),
            handler: "NetworkFirst",
            options: {
              cacheName: "nova-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
