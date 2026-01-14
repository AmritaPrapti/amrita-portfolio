/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: { layout: "1200px" },
      spacing: { section: "140px" },
    },
  },
  plugins: [],
};
