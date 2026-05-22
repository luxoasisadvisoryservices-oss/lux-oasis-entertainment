/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "'Helvetica Neue'", "sans-serif"],
      },
      colors: {
        paper: "#f7f5f1",
        paper2: "#f1ede6",
        paper3: "#ebe6dd",
        border: "#e2ddd4",
        border2: "#ccc7bb",
        muted: "#9c9890",
        body: "#6a6760",
        text: "#2a2926",
        dark: "#181714",
        gold: "#b8916a",
        gold2: "#9a7450",
        "gold-bg": "#f4ede2",
      },
    },
  },
  plugins: [],
};
