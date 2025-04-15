/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // ✅ Thêm JSX/TSX
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
