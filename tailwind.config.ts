import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      gunmetal: "#2D3142",
      gray: "#4F5D75",
      silver: "#BFC0C0",
      white: "#FFFFFF",
      coral: "#EF8354",
      lightGray: "#f5f5f4",
      red: {
        500: '#ef4444'
      },
      orange: {
        500: '#f97316'
      }
    }
  },
  plugins: [],
};
export default config;
