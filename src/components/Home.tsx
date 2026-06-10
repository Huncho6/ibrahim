"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentDownload, HiOutlineMail } from "react-icons/hi";

const resumeHref =
  "https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing";
const emailHref = "mailto:teebliqs4@gmail.com";

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
          className="hero-content"
        >
          <p className="hero-role">Full-stack developer</p>

          <h1 className="hero-heading">Hello, I&apos;m Ibrahim.</h1>

          <p className="hero-lead">
            I build intuitive, scalable digital products—clear, reliable, and built to grow.
          </p>

          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to work and opportunities
          </p>

          <div className="hero-cta">
            <Link
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-resume"
            >
              <HiOutlineDocumentDownload className="hero-cta-resume-icon" aria-hidden="true" />
              View my résumé
            </Link>
            <span className="hero-cta-sep" aria-hidden="true">
              /
            </span>
            <a href={emailHref} className="hero-cta-say-hi">
              <HiOutlineMail className="hero-cta-say-hi-icon" aria-hidden="true" />
              Say hi
            </a>
          </div>

          <motion.a
            href="#about"
            className="hero-explore flex flex-col items-center gap-1.5 mx-auto w-fit opacity-50 hover:opacity-100 transition-opacity lg:gap-2"
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
