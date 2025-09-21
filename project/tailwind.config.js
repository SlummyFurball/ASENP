/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00cbff',
        'lightgrey': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
