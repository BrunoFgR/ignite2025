import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow_dark: "#c47f17",
        yellow: "#dbac2c",
        yellow_light: "#f1e9c9",
        purple_dark: "#4b2995",
        purple: "#8047f8",
        purple_light: "#ebe5f9",
        base_title: "#272221",
        base_subtitle: "#403937",
        base_text: "#574F4D",
        base_label: "#8D8686",
        base_hover: "#D7D5D5",
        base_button: "#E6E5E5",
        base_input: "#EDEDED",
        base_card: "#F3F2F2",
        base_background: "#FAFAFA",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Baloo 2", "serif"],
      },
      fontSize: {
        text_xs: ["0.75rem", { lineHeight: "130%" }],
        text_sm: ["0.875rem", { lineHeight: "130%" }],
        text_md: ["1rem", { lineHeight: "130%" }],
        text_lg: ["1.125rem", { lineHeight: "130%" }],
        tag: ["0.625rem", { lineHeight: "160%" }],
        button_lg: ["0.875rem", { lineHeight: "160%" }],
        button_md: ["0.75rem", { lineHeight: "160%" }],
        title_xs: ["1.125rem", { lineHeight: "130%" }],
        title_sm: ["1.25rem", { lineHeight: "130%" }],
        title_md: ["1.375rem", { lineHeight: "130%" }],
        title_lg: ["2rem", { lineHeight: "130%" }],
        title_xl: ["3rem", { lineHeight: "130%" }],
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
    },
  },
  plugins: [],
} satisfies Config;
