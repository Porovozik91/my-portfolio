import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "header-bg": "var(--header-bg)",
        "header-text": "var(--header-text)",
        primary: "var(--primary)",
        "button-bg": "var(--button-bg)",
        "button-text": "var(--button-text)",
      },
    },
  },
  plugins: [],
};

export default config;
