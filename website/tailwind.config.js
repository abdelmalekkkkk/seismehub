/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import to from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [to], 
  darkMode: 'class'
}

