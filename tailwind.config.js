/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "374px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "prim-color": "#F9F9F9",
        "sec-color": "#686868",
        "bg-dark": "hsla(0, 0%, 12%, 1)",
        "span-color": "hsla(0, 0%, 89%, 0.5)",
        "btn-text-color": "#1F1F1F",
        "hover-color": "#141414",
      },
    },
  },
  plugins: [],
};

