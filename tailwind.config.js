/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strongPurple: "#490057",
        basePurple: "#A303A0",
        lightPurple: "#9400B11C",
        bgColor: "#F3F3F3",
        grey: "#B8B8B8",
        textGrey: "#787878",
        darkGrey: "#D5D5D5",
        yellow: "#FBB03B",
      },
    },
  },
  plugins: [],
};
