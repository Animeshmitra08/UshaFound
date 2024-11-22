/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Dosis": ['Dosis', 'sans-serif'],
        "Playfair" : ["Playfair Display", "serif"],
        "Kaushan_Script": ["Kaushan Script", "serif"],
        "Caprasimo":["Caprasimo", "serif"],
        "PT" : ["PT Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}