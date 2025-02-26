import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        S_bg:{
          DEFAULT: "#OC969C",
          foreground: "#FFFFFF",
        },
        bg: {
          DEFAULT: "#eef4ed",
          foreground: "#FFFFFF",

        },
        servicesPrimary:
        {
          DEFAULT: "#0C969C",
        },
        servicesSecondary:
        {
          DEFAULT: "#6BA3BE",
        },
        primary: {
          DEFAULT: "#21333e",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#69b97a",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#475569",
        },
        accent: {
          DEFAULT: "#F1F5F9",
          foreground: "#475569",
        },
        fontFamily: {
          poppins: "Poppins", // Add Poppins
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
