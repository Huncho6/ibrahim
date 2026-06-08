"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";

const stats = [
  { value: "2+", label: "Experiences" },
  { value: "4+", label: "Clients" },
  { value: "10+", label: "Projects" },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-[90vh] flex flex-col justify-center"
    >
      <div className="section-container hero-section relative z-10 w-full lg:pt-24 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 sm:gap-7 lg:gap-0"
        >

          <h1 className="font-display text-[1.75rem] sm:text-4xl lg:text-7xl leading-none lg:mb-6">
            <span className="block" style={{ color: "var(--text)" }}>
              Hello, I&apos;m{" "}
              <span className="text-gradient">Ibrahim</span>
            </span>
          </h1>

          <h2
            className="font-display text-lg sm:text-2xl lg:text-4xl leading-snug lg:leading-none lg:mb-6 max-w-4xl"
            style={{ color: "var(--text-muted)" }}
          >
            Full-stack developer turning ideas into{" "}
            <span style={{ color: "var(--text)" }}>reliable, scalable products</span>.
          </h2>

          <div
            className="text-sm sm:text-base lg:text-lg leading-[1.65] max-w-2xl lg:mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              I build clean, intuitive digital products with a focus on structure, performance,
              and clarity. From early ideas to working systems, I turn concepts into usable
              experiences that feel intentional and are built to grow over time.
            </p>
          </div>

          {/* Mobile: underlined text links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:hidden">
            <Link
              href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-text-link"
            >
              VIEW MY RÉSUMÉ
            </Link>
            <a href="#projects" className="hero-text-link">
              View selected work
            </a>
          </div>

          {/* Desktop: buttons */}
          <div className="hidden lg:flex flex-row gap-4">
            <Link
              href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <HiOutlineDocumentDownload className="w-5 h-5" />
              VIEW MY RÉSUMÉ
            </Link>
            <a href="#projects" className="btn-secondary">
              View selected work
            </a>
          </div>

          <div className="hero-stats lg:mt-14">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="#about"
            className="flex flex-col items-center gap-1.5 mx-auto w-fit mt-10 mb-2 opacity-50 hover:opacity-100 transition-opacity lg:mt-16 lg:mb-0 lg:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
            aria-label="Scroll to about"
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
              Explore
            </span>
            <HiArrowDown className="w-4 h-4 lg:w-5 lg:h-5 animate-bounce" style={{ color: "var(--accent)" }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
