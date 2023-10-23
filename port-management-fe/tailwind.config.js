/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
        fugaz: ["Fugaz One", "sans-serif"],
        sofia: ["Sofia", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        pacifico: ["Pacifico", "cursive"]
      },
    },
  },
  plugins: [],
};