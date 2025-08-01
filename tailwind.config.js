/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          100: '#f6e2a8',
          200: '#f0d485',
          300: '#eac665',
          400: '#e4b84a',
          500: '#dea632',
          600: '#c89429',
          700: '#b08220',
          800: '#987018',
          900: '#805e10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out',
        'bounce': 'bounce 2s infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};