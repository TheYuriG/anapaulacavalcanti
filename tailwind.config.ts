import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    colors: {
    extend: {
      fontFamily: {
        "bonita": ["Tangerine", "serif"],
        "formal": ["Commissioner", "serif"],
      },
    },
  },
} satisfies Config;
