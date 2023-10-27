import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/typescript-react-hotel-booking-app/',
  plugins: [react()],
});
