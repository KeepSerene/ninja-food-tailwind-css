/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/*.{html,js}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "#ff6363",

        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },

        cyan: {
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },

      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },

  plugins: [],
};
