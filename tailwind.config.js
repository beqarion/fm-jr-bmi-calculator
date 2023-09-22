/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        custom: {
          blue: "#345FF6",
          gunmetal: "#253347",
          "dark-electric-blue": "#5E6E85",
          gray: "#D8E2E7",
          white: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
      },
      boxShadow: {
        "custom-form": "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
    },
  },
  plugins: [],
}
