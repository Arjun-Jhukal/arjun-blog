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
          DEFAULT: "#0D47A1", // Dark adventurous blue (sky/mountain)
        },
        secondary: {
          DEFAULT: "#264653", // Deep teal — rugged outdoor vibe
        },
        accent: {
          DEFAULT: "#F4A261", // Warm orange — ideal for CTAs or highlights
        },
        background: {
          DEFAULT: "#F9FAFB", // Soft light gray background
        },
        highlight: {
          DEFAULT: "#E9C46A", // Sandy tone — good for cost or food sections
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
