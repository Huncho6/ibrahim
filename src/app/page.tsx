"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setLoading(false), prefersReduced ? 150 : 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="flex flex-col items-center justify-center min-h-screen gap-6"
          style={{ background: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: "easeOut" }}
          aria-live="polite"
          aria-busy="true"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 accent-gradient" />
            <motion.div
              className="relative font-display text-6xl sm:text-7xl text-gradient"
              animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              IB
            </motion.div>
          </div>
          <div
            className="w-32 h-0.5 rounded-full overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent), var(--accent-secondary), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={reducedMotion ? {} : { x: ["-100%", "200%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--text-subtle)" }}
          >
            Loading portfolio
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: "easeOut" }}
        >
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
