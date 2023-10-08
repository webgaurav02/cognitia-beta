/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['POPPINS'],
        poppinsbold: ['POPPINSBOLD'],
        montserrat: ['MONTSERRAT']
      },
      colors:{
      bgcoding: '#C98656',
      bgrobotics: '#F8F274',
      bgdpt: '#60A685',
      bgclt: '#E1ABE8'
    },
    },
  },
  plugins: [],
}