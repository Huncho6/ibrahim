"use client";
import { useState, useEffect } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen gap-6"
        style={{ background: "var(--bg)" }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-50"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
          />
          <div
            className="relative font-display text-6xl sm:text-7xl font-bold text-gradient animate-pulse-soft"
          >
            IB
          </div>
        </div>
        <div className="w-32 h-0.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
          <div
            className="h-full rounded-full animate-shimmer"
            style={{
              width: "40%",
              background: "linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
        <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
          Loading portfolio
        </p>
      </div>
    );
  }

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
