/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary: '#272727',
        primary: '#1e293b',
        secondary: '#f7f6f1',
      },
      fontFamily: {
        sans: ['vazir'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
