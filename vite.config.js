import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },


      manifest: {
        "theme_color": "#333",
        "background_color": "#333",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "rawan",
        "description": "rawan app",
        "name": "rawan",
        "icons": [
          {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
      ,}


    })
  ],
})
