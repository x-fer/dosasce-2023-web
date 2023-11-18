/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#E63047',
        green: '#0C6E30',
        white: '#FDFBFE',
        blue: '#072237',
        black: '#191516',
        'light-blue': '#2CC2D9',
        'dark-red': '#8F000A',
        'dark-white': '#FFD6D9',
      },
      backgroundImage: {
        // 'hero-pattern': "url('@/assets/BackgroundIcons.png')",
        // 'snow-pattern': "url('@/assets/BackgroundSnow.png')",
        'background-color': 'white',
      },
      animation: {
        moveLeft: 'moveLeft 50s linear infinite',
        moveRight: 'moveRight 50s linear infinite',
      },
      keyframes: {
        moveLeft: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-6*200px))',
          },
        },
        moveRight: {
          '0%': {
            transform: 'translateX(calc(-6*200px))',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
