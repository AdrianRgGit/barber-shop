import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#EEEEEE",
        gray: "#686D76",
        "dark-gray": "#373A40",
        orange: "#DC5F00",
      },
    },
  },
  plugins: [],
};
export default config;
