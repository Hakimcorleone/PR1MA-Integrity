/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061525",
          900: "#08213a",
          800: "#0b2c4d",
          700: "#123b62",
        },
        amberAccent: "#d7a12b",
        success: "#168a5b",
        risk: "#c7511f",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(6, 21, 37, 0.14)",
      },
    },
  },
  plugins: [],
};
