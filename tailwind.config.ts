import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        muted: "#5f6368",
        line: "#dadce0",
        surface: "#f8fafd",
        brand: "#1a73e8",
        "brand-dark": "#1558b0",
        success: "#188038"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(60,64,67,.15), 0 1px 3px 1px rgba(60,64,67,.08)"
      }
    }
  },
  plugins: []
};

export default config;
