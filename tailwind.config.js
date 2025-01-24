/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            barlow: ["Barlow", "serif"],
            inter: ["Inter", "serif"],
         },
         colors: {
            primary: "#112241",
            secondary: "#ffffff",
            primaryBg: "#F5F5F5",
            secondaryBg: "#EDEDED",
            whiteText: "#F8F8F8",
            blackText: "#272B39",
         },
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               md: "7rem",
            },
         },
         boxShadowColor: "#",
      },
   },
   plugins: [],
};
