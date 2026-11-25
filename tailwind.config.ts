import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          light: "#13315C",
          dark: "#071A33",
        },
        accent: {
          DEFAULT: "#FFCA3A",
          light: "#FFE08A",
          dark: "#7A5C00",
        },
        mist: "#F4F6F8",
        charcoal: "#202A35",
      },
    },
  },
  plugins: [],
};

export default config;
