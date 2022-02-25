const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mochiy Pop One', ...defaultTheme.fontFamily.sans],
        OdibeeSans: ["Odibee Sans", "cursive"],
        PassionOne: ["Passion One", "cursive"],
      },
      backgroundImage: theme => ({
        'truck-img': "url('/bg_mobile.png')",
      })
    },
  },
  plugins: [],
}