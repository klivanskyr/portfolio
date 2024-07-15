import type { Config } from "tailwindcss";
import { Inter_Tight } from "next/font/google";

const config: Config = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter_Tight: ['Inter_Tight'],
    },
  },
  plugins: [],
};

export default config;
