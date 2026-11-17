import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    // Target modern browsers for optimized JS output
    target: 'es2020',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Production standard manual chunk splitting for Three.js & libraries
        manualChunks: {
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-react': ['react', 'react-dom'],
          'vendor-utils': ['lucide-react', 'canvas-confetti', 'clsx', 'tailwind-merge'],
        },
      },
    },
  },
});
