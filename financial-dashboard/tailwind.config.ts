import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9500",
          light: "#FFB84D",
          dark: "#E6850E",
        },
        secondary: {
          pink: "#FF69B4",
          orange: "#FF8C00",
          blue: "#87CEEB",
        },
        neutral: {
          background: "#F5F7FA",
          card_background: "#FFFFFF",
          text_primary: "#2D3748",
          text_secondary: "#718096",
          border: "#E2E8F0",
        },
        status: {
          success: "#48BB78",
          warning: "#ED8936",
          info: "#4299E1",
        },
        // Match the actual design colors
        "hero-bg": "#E8E7F3",
        "card-pink": "#FFE5F1",
        "card-orange": "#FFE5CC",
        "card-blue": "#E5F4FF",
        "text-dark": "#2D3748",
        "text-gray": "#64748B",
        "orange-btn": "#FF8A00",
        "recommended-bg": "#FF8A00",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Arial Hebrew",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #E8E7F3 0%, #F0F0F7 100%)",
        "card-pink-gradient":
          "radial-gradient(ellipse at bottom, #FFB6C1 0%, transparent 70%)",
        "card-orange-gradient":
          "radial-gradient(ellipse at bottom, #FFB366 0%, transparent 70%)",
        "card-blue-gradient":
          "radial-gradient(ellipse at bottom, #87CEEB 0%, transparent 70%)",
      },
      borderRadius: {
        card: "12px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
