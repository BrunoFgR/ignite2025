import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#dbac2c",
        purple: "#8047f8",
        white: "#FFFFFF",
        "yellow-dark": "#c47f17",
        "yellow-light": "#f1e9c9",
        "purple-dark": "#4b2995",
        "purple-light": "#ebe5f9",
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        "base-background": "#FAFAFA",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        baloo: ["Baloo 2"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        tag: ["0.625rem", { lineHeight: "160%" }],
        "text-xs": ["0.75rem", { lineHeight: "130%" }],
        "text-sm": ["0.875rem", { lineHeight: "130%" }],
        "text-md": ["1rem", { lineHeight: "130%" }],
        "text-lg": ["1.125rem", { lineHeight: "130%" }],
        "button-lg": ["0.875rem", { lineHeight: "160%" }],
        "button-md": ["0.75rem", { lineHeight: "160%" }],
        "title-xs": ["1.125rem", { lineHeight: "130%" }],
        "title-sm": ["1.25rem", { lineHeight: "130%" }],
        "title-md": ["1.375rem", { lineHeight: "130%" }],
        "title-lg": ["2rem", { lineHeight: "130%" }],
        "title-xl": ["3rem", { lineHeight: "130%" }],
      },
      gap: {
        15: "3.75rem",
      },
      width: {
        57: "14.4375rem",
        73: "18.375rem",
        99: "29.75rem",
        120: "36.75rem",
      },
      height: {
        90: "22.5rem",
      },
      borderRadius: {
        special: "36px 6px 36px 6px",
      },
    },
  },
  plugins: [],
} satisfies Config;
