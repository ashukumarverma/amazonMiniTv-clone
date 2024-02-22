/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dest/*.{html, js}"],
  theme: {
    extend: {
      colors:{
        'nav-bg': '#1a2224'
      }
    },
  },
  plugins: [],
}

