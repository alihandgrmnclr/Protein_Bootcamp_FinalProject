/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'btnprimary':'#473e3a',
        'bgprimary': '#7b584e',
        'bgsecondary': '#9b6753'
      }
    },
  },
  plugins: [],
}
/*Goldenrod Light Color (#ef912d), Rosy Brown Dark Color (#9b6753), Dim Gray Dark Color (#473e3a), Black Dark Color (#20211a), Dim Gray Dark Color(#7b584e), */