import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// HostingRaja-friendly: plain static build output in dist/, no SSR.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
