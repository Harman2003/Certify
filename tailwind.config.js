/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        welcome: "url('/images/welcome.png')",
        logo: "url('/images/logo.jpg')",
        styleAI: "url('/images/FlipkartAI.png')",
        sample:
          "url(https://rukminim2.flixcart.com/image/832/832/xif0q/jean/h/p/f/30-jk2-mjrp-02-zaysh-original-imagqgf6yh4gtwhx.jpeg?q=70)",
      },
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
    },
  },
  plugins: [],
};
