/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl' : '6rem',
      },

      colors: {
        primary: "#FF751A",
        secondary: "#FF6600"
      }
    },
  },
  plugins: [],
}

