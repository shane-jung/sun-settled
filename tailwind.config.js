/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      // fontWeight: {
      //   light: 200,
      //   normal: 300,
      //   bold: 400,
      // },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
    },
    container: {
      padding: ".5rem",
    },
  },
  important: true,
  plugins: [require("flowbite/plugin")],
}
