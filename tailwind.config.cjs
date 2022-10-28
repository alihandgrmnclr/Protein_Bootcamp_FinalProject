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
        'bgsecondary': '#9b6753',
        'bggreen': '#328827f0',
        'blackdark':'#9b6753',
      },
      fontFamily:{
        Pixel : ["Pixel"],
      },
    },
  },
  plugins: [],
}
/*
Dim Gray Dark Color (#473e3a), 
Dim Gray Dark Color(#7b584e), 
Rosy Brown Dark Color (#9b6753), 
Black Dark Color (#20211a), 
Goldenrod Light Color (#ef912d), 

*/