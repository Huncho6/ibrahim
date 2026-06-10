"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentDownload, HiOutlineMail } from "react-icons/hi";
import { resumeHref } from "@/data/socialLinks";
import { getFadeUp, staggerContainer } from "@/lib/motion";

const emailHref = "mailto:teebliqs4@gmail.com";

const Home = () => {
  const reducedMotion = useReducedMotion();
  const itemVariant = getFadeUp(reducedMotion);

  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-[90vh] flex flex-col justify-center section-anchor"
    >
      <div className="section-container hero-section relative z-10 w-full lg:pt-24 lg:pb-16">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariant} className="hero-role">
            Full-stack developer
          </motion.p>

          <motion.h1 variants={itemVariant} className="hero-heading">
            Hello, I&apos;m Ibrahim.
          </motion.h1>

          <motion.p variants={itemVariant} className="hero-lead">
            I build intuitive, scalable digital products that combine thoughtful design,
            reliable systems, and lasting impact.
          </motion.p>

          <motion.p variants={itemVariant} className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to work and opportunities
          </motion.p>

          <motion.div variants={itemVariant} className="hero-cta">
            <Link
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-resume"
            >
              <HiOutlineDocumentDownload className="hero-cta-resume-icon" aria-hidden="true" />
              View my résumé
            </Link>
           
            <a href={emailHref} className="hero-cta-say-hi">
              <HiOutlineMail className="hero-cta-say-hi-icon" aria-hidden="true" />
              <span className="hero-cta-say-hi-text">Say hi</span>
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="hero-explore flex flex-col items-center gap-1.5 mx-auto w-fit opacity-50 hover:opacity-100 transition-opacity lg:gap-2"
            variants={itemVariant}
            aria-label="Scroll to about"
          >
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--text-subtle)" }}
            >
              Explore
            </span>
            <HiArrowDown
              className={`w-4 h-4 lg:w-5 lg:h-5 ${reducedMotion ? "" : "animate-bounce"}`}
              style={{ color: "var(--accent)" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
