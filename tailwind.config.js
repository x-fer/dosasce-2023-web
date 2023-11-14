/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#B3000C",
        green: "#0C6E30",
        white: "#F5F5F5",
        blue: "#011638",
        black: "#191516",
        "dark-red": "#8F000A",
        "dark-white": "#FFD6D9",
      },
      backgroundImage: {
        "hero-pattern": "url('@/assets/BackgroundIcons.png')",
      },
    },
    fontFamily: {
      monomaniac: ["Monomaniac", "monospace"],
    },
  },
  plugins: [],
};
