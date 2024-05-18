/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0f0f0f",
        hover: "#A9FF5C",
        wheat: "#EFECE6",
        sec: "#959490",
        purple: "#cb5cff",
      },
    },
  },
  plugins: [],
};
