/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#ffffff" },
        secondary: { DEFAULT: "#141414" },
        tertiary: { DEFAULT: "#69686D" },
        accent: {
          blue: "#047857",
          violet: "#065f46",
          cyan: "#0f766e",
        },
      },
      fontFamily: {
        sans: ["var(--font-fira)", "ui-monospace", "monospace"],
        display: ["var(--font-pixel)", "sans-serif"],
        mono: ["var(--font-fira)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgb(4 120 87 / 0.35)",
        "glow-violet": "0 0 80px -20px rgb(6 95 70 / 0.4)",
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "0.4" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(4 120 87 / 0.06), transparent)",
        "hero-glow-dark":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(16 185 129 / 0.08), transparent)",
      },
    },
  },
  plugins: [],
};
