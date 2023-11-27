/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fit, minmax(250px, auto))',
        'mobile':  'repeat(auto-fit, minmax(150px, 1fr))',
      },
      colors: {
        'wip': '#ffffff',
        'black-white': '#fdfdff',
        'wcom': '#F1F3F5',
        'input': '#f4f6f8'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}

