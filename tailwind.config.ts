import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    colors: {
      "primary": "#F5A7B8",
      "dusty-rose": "#D6A5A1",
      "blush-pink": "#F8D1D1",
      "soft-mauve": "#D2A5D8",
      "peachy-pink": "#FAD0C9",
      "warm-ivory": "#F4E1D2",
    },
  },
} satisfies Config;
