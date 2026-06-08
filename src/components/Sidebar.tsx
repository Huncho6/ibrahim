"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaCode,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", icon: FaHome, label: "Home" },
  { href: "#about", icon: IoPersonOutline, label: "About" },
  { href: "#projects", icon: FaBriefcase, label: "Works" },
  { href: "#skills", icon: FaCode, label: "Skills" },
  { href: "#contact", icon: MdAlternateEmail, label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Huncho6", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/ibroabodunrin", icon: FaXTwitter, label: "X" },
  {
    href: "https://www.linkedin.com/in/ibrahim-abodunrin-8b93872b0/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:teebliqs4@gmail.com", icon: MdAlternateEmail, label: "Email" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop: fixed social rail */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 z-[200] h-screen w-16 flex-col items-center justify-end pb-10 pointer-events-none"
        aria-label="Social links"
      >
        <div className="flex flex-col items-center pointer-events-auto">
          <div className="flex flex-col items-center gap-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="social-rail-link"
              >
                <Icon className="w-[1.35rem] h-[1.35rem]" />
              </Link>
            ))}
          </div>
          <div className="social-rail-line" aria-hidden />
        </div>
      </aside>

      {/* Top-right menu control */}
      <div className="top-controls">
        <button
          onClick={toggleMenu}
          className="top-control-btn"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Swipe-down navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[210]"
              onClick={closeMenu}
            />
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed top-0 left-0 right-0 z-[220] glass-panel border-b overflow-hidden lg:left-16"
              style={{ borderColor: "var(--border)" }}
              aria-label="Main navigation"
            >
              <div className="mobile-nav-panel">
                <ul className="mobile-nav-list">
                  {navItems.map(({ href, icon: Icon, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className="mobile-nav-link group"
                      >
                        <span className="mobile-nav-icon">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="hero-text-link mobile-nav-resume"
                >
                  Resume
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
