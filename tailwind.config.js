/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F2E9",
        "cream-deep": "#EDE6D6",
        ink: "#2A2320",
        "pink-deep": "#B24C72",
        "pink-soft": "#E8A9C0",
        "pink-mist": "#F7E1EA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-manrope)"],
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
    },
  },
  plugins: [],
};
