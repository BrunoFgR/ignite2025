module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-background": "var(--base-background)",
        "base-button": "var(--base-button)",
        "base-card": "var(--base-card)",
        "base-label": "var(--base-label)",
        "base-subtitle": "var(--base-subtitle)",
        "base-text": "var(--base-text)",
        "base-title": "var(--base-title)",
        "brand-yellow": "var(--brand-yellow)",
        "brand-yellow-dark": "var(--brand-yellow-dark)",
        "brand-purple": "var(--brand-purple)",
        "brand-purple-dark": "var(--brand-purple-dark)",
        "brand-purple-light": "var(--brand-purple-light)",
        "brand-yellow-light": "var(--brand-yellow-light)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "components-tag": "var(--components-tag-font-family)",
        "text-regular-l": "var(--text-regular-l-font-family)",
        "text-regular-m": "var(--text-regular-m-font-family)",
        "text-regular-s": "var(--text-regular-s-font-family)",
        "title-title-l": "var(--title-title-l-font-family)",
        "title-title-s": "var(--title-title-s-font-family)",
        "title-title-XL": "var(--title-title-XL-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
