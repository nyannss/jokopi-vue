/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        history: "url('/assets/images/cold-brew.webp')",
        main: "url('/assets/images/bg-main-coffee.webp')",
        profile: "url('/assets/images/bg-profile.webp')",
        cart: "url('/assets/images/bg-cart.webp')",
      },
      boxShadow: {
        primary: "0px 6px 20px 0px #00000020;",
      },
      colors: {
        primary: {
          50: "#50150C",
          100: "#5B2313",
          200: "#63311D",
          300: "#77513C",
          400: "#85624F",
          500: "#927362",
          600: "#9F8374",
          700: "#9F8374",
          800: "#AC9487",
          900: "#B9A59A",

          DEFAULT: "#6A4029",
        },
        "primary-title": "#0b132a",
        secondary: "#ffba33",
      },
    },
  },
  daisyui: {
    themes: [
      {
        jokopi: {
          primary: "#6A4029",
          secondary: "#ffba33",
          accent: "#0b132a",
          neutral: "#9f9f9f",
          "base-100": "#fff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "plain-white": "#FFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
