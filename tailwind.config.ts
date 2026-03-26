import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Seasteel Brand Colors
        navy: {
          DEFAULT: "#0D1B5E",
          light: "#1A2B8F",
          dark: "#081240",
          deep: "#0D1B5E",
        },
        cyan: {
          DEFAULT: "#00C9A7",
          light: "#33D4B8",
          dark: "#009E85",
          bright: "#00AEEF",
        },
        steel: {
          DEFAULT: "#2E4057",
          light: "#3D5470",
          dark: "#1C2E40",
        },
        surface: {
          DEFAULT: "#0F2037",
          light: "#1A2E4A",
          dark: "#081525",
          card: "#142238",
          muted: "#F4F6F9",
        },
        accent: {
          gold: "#F5A623",
          red: "#E84545",
          white: "#F0F4F8",
        },
        // Semantic aliases
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0A1628 0%, #0F2037 50%, #0A1628 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 201, 167, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 201, 167, 0.2)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
