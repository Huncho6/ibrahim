"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Works" },
  { href: "#contact", label: "Contact" },
];

const resumeHref =
  "https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing";

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
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    document.body.style.overflow = isMobile ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
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

      <div className="top-controls">
        <button
          onClick={toggleMenu}
          className={`top-control-btn ${isOpen ? "top-control-btn--active" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="site-nav-backdrop"
              onClick={closeMenu}
              aria-label="Close menu"
            />
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", damping: 34, stiffness: 420 }}
              className="site-nav-panel"
              aria-label="Main navigation"
            >
              <div className="site-nav-links">
                {navItems.map(({ href, label }, index) => (
                  <span key={href} className="site-nav-item">
                    {index > 0 && (
                      <span className="site-nav-sep" aria-hidden>
                        /
                      </span>
                    )}
                    <Link href={href} onClick={closeMenu} className="site-nav-link">
                      {label}
                    </Link>
                  </span>
                ))}
                <span className="site-nav-sep site-nav-sep--resume" aria-hidden>
                  /
                </span>
                <Link
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="site-nav-link site-nav-link--resume"
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
