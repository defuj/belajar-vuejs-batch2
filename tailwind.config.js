/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-blue': {
          100: '#E9E3FF',
          200: '#B9A2FF',
          300: '#9374FF',
          400: '#9374FF',
          500: '#4318FF',
          600: '#3311DB',
          700: '#2100B6',
          800: '##190793',
          900: '##11047A'
        },
        grey: {
          100: '#FAFCFE',
          200: '#F6F8FD',
          300: '#F4F7FE',
          400: '#E9EDF7',
          500: '#E0E5F2',
          600: '#A3AED0',
          700: '#707EAE',
          800: '##47548C',
          900: '#2B3674'
        },
        'dark-grey': {
          100: '#EFF4FB',
          200: '#E1E9F8',
          300: '#C9D4EA',
          400: '#B0BBD5',
          500: '#8F9BBA',
          600: '#68769F',
          700: '#485585',
          800: '#2D396B',
          900: '#1B2559'
        }
      }
    }
  },
  plugins: []
}
