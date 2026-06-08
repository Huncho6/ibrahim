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
          blue: "#3b82f6",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgb(59 130 246 / 0.35)",
        "glow-violet": "0 0 80px -20px rgb(139 92 246 / 0.4)",
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
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(59 130 246 / 0.15), transparent)",
        "hero-glow-dark":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(139 92 246 / 0.2), transparent)",
      },
    },
  },
  plugins: [],
};
