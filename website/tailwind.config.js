/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import to from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [to], 
  darkMode: 'class'
}

