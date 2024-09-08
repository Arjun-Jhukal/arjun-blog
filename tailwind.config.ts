import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        "2xl": "50px",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px", // Similar to Bootstrap, but slightly larger for screens > 1440px
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f13b3b",
        },
        secondary: {
          DEFAULT: "#424851",
        },
        ternary: {
          DEFAULT: "#989da2",
        },
      },

      aspectRatio: {
        "blog-image": "240 / 100",
      },
    },
  },
  plugins: [],
};
export default config;
