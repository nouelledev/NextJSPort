/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#23263A",
        "card-bd": "#2D3151",
        "card-contact": "#363B5A",
        "nav-color": "#23263A",
      },
      borderRadius: {
        "my-size": "2.5rem",
      },
    },
  },
  plugins: [],
};
