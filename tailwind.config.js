/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "bg-dark": "hsla(0, 0%, 12%, 1)",
        "span-color": "hsla(0, 0%, 89%, 0.5)",
      },
    },
  },
  plugins: [],
};

