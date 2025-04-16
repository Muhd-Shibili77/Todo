import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // auto-updates the service worker
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
              },
            },
          },
        ],
      },
      manifest: {
        name: 'My React PWA',
        short_name: 'React PWA',
        description: 'A React-based PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
        ],
      },
    }),
  ],
});
