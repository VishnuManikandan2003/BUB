/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      animation: {
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
};