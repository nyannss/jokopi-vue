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
        primary: { DEFAULT: "#6A4029" },
        "primary-title": "#0b132a",
        secondary: "#ffba33",
      },
    },
  },
  plugins: [],
};
