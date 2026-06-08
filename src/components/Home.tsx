"use client";
import { useAppSelector } from "@/app/hooks";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";

const Home = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 grid-bg opacity-80" aria-hidden />
      <div
        className={`absolute inset-0 ${isDarkMode ? "bg-hero-glow-dark" : "bg-hero-glow"}`}
        aria-hidden
      />
      <div
        className="orb w-[420px] h-[420px] -top-32 -right-32 opacity-60"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="orb w-[300px] h-[300px] bottom-0 left-1/4 opacity-40 animate-delay-300"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Subtle orbital ring */}
      <div
        className="absolute top-1/4 right-[10%] w-48 h-48 rounded-full border opacity-20 pointer-events-none hidden lg:block"
        style={{ borderColor: "var(--border-strong)" }}
        aria-hidden
      />
      <div
        className="absolute top-[28%] right-[11%] w-32 h-32 rounded-full border opacity-10 pointer-events-none hidden lg:block animate-pulse-soft"
        style={{ borderColor: "var(--accent)" }}
        aria-hidden
      />

      <div className="section-container relative z-10 w-full pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-4">Portfolio · Ibrahim Abodunrin</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="block" style={{ color: "var(--text)" }}>
              Hello, I&apos;m{" "}
              <span className="text-gradient">Ibrahim</span>
            </span>
          </h1>

          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 max-w-4xl"
            style={{ color: "var(--text-muted)" }}
          >
            Full-stack software engineer building{" "}
            <span style={{ color: "var(--text)" }}>scalable digital products</span>{" "}
            and modern web applications.
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            I&apos;m a passionate and eager-to-learn full-stack developer focused on building
            dynamic web applications. With a foundational understanding of both frontend and
            backend development, I aim to create efficient, scalable solutions. As a fast
            learner, I&apos;m excited to grow my skills and gain hands-on experience through
            internships or entry-level opportunities. My love for problem-solving and delivering
            seamless user experiences drives my work, and I look forward to learning and
            contributing throughout the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <HiOutlineDocumentDownload className="w-5 h-5" />
              Download Resume
            </Link>
            <a href="#projects" className="btn-secondary">
              View selected work
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "TypeScript-ready stack", "MongoDB"].map(
              (item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-12 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to about"
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
            Explore
          </span>
          <HiArrowDown className="w-5 h-5 animate-bounce" style={{ color: "var(--accent)" }} />
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
