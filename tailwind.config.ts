import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium food-brand palette
        ink: {
          DEFAULT: "#1A1714",
          soft: "#2B2620",
          muted: "#6B6358",
        },
        cream: {
          DEFAULT: "#FBF6EF",
          deep: "#F3EADC",
        },
        saffron: {
          DEFAULT: "#E8552D",
          dark: "#C8431F",
          light: "#FF7A4D",
        },
        gold: {
          DEFAULT: "#E0A82E",
          light: "#F4C95D",
        },
        forest: {
          DEFAULT: "#0B6E4F",
          light: "#13986F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(26, 23, 20, 0.35)",
        soft: "0 10px 30px -12px rgba(26, 23, 20, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
