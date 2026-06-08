"use client";
import { useAppSelector } from "@/app/hooks";

const AtmosphericBackground = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
    >
      <div className="absolute inset-0 atmospheric-grid" />
      <div
        className={`absolute inset-0 ${isDarkMode ? "bg-hero-glow-dark" : "bg-hero-glow"}`}
      />
      <div
        className="orb w-[420px] h-[420px] -top-32 -right-32 opacity-30"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[300px] h-[300px] bottom-1/4 left-1/4 opacity-20 animate-delay-300"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default AtmosphericBackground;
