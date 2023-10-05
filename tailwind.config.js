/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['POPPINS'],
        montserrat: ['MONTSERRAT']
      },
      colors:{
      bgcoding: '#C98656',
      bgrobotics: '#F8F274',
      bgdpt: '#60A685'
    },
    },
  },
  plugins: [],
}