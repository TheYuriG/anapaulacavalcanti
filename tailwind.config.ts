import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    colors: {
      "corPrimaria": "#F5A7B8",
      "corSecundaria": "#D2A5D8",
      "corContrastante": "#FAD0C9",
      "corDeFundo": "#F4E1D2",
      "corParaBotoes": "#D6A5A1",
      "corDeDestaque": "#F8D1D1",
      "corClaraParaTexto": "#F7F7F7",
      "corEscuraParaTexto": "#333333",
    },
    extend: {
      fontFamily: {
        "bonita": ["Tangerine", "serif"],
        "formal": ["Commissioner", "serif"],
      },
    },
  },
} satisfies Config;
