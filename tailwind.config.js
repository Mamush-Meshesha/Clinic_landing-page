/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fan: ["Playwrite AU SA", "cursive"]
      },
      screens: {
        "sm": "360px",
        'md': "768px",
        'lg': "1100px",
        'xl': '1400px',
        '2xl': '1580px',
        '3xl': '2000px',
      }
    },
  },
  plugins: [],
};
