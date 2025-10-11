import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#059669", dark: "#047857", light: "#D1FAE5" },
      },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
