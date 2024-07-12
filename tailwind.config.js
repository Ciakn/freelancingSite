/** @type {import('tailwindcss').Config} */
import {fontFamily } from "tailwindcss/defaultTheme"
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir" , ...fontFamily.sans ]
      }
    },
  },
  plugins: [],
};

