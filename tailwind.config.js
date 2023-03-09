const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/draw.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(255, 247, 145)",
        black: colors.black,
        white: colors.white,
        shade: "rgba(0, 0, 0, 0.45)",
        bgshade: "rgba(0, 0, 0, 0.05)",
      },
      cursor: {
        brush:
          "url(https://user-images.githubusercontent.com/31418038/222933655-ef5ddf50-f81a-454d-90bd-950655d6890f.png) 0 25, crosshair",
        pencil:
          "url(https://user-images.githubusercontent.com/31418038/222928792-b124c967-7337-45f4-b68e-83c6d1a4abb8.png) 0 25, crosshair",
        eraser:
          "url(https://user-images.githubusercontent.com/31418038/222933699-9f640b67-a725-464f-be46-c3b13faaec70.png) 0 25, crosshair",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
