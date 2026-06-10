"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { socialLinks, resumeHref } from "@/data/socialLinks";
import { navItemVariant, staggerFast } from "@/lib/motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Works" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();

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

  const navTransition = reducedMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, damping: 34, stiffness: 420 };

  return (
    <>
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
          aria-controls="site-navigation"
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
              transition={{ duration: 0.2 }}
              className="site-nav-backdrop"
              onClick={closeMenu}
              aria-label="Close menu"
            />
            <motion.nav
              id="site-navigation"
              initial={{ opacity: 0, y: reducedMotion ? 0 : -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -12 }}
              transition={navTransition}
              className="site-nav-panel"
              aria-label="Main navigation"
            >
              <motion.div
                className="site-nav-links"
                initial="hidden"
                animate="visible"
                variants={staggerFast}
              >
                {navItems.map(({ href, label }, index) => (
                  <motion.span key={href} variants={navItemVariant} className="site-nav-item">
                    {index > 0 && (
                      <span className="site-nav-sep" aria-hidden>
                        /
                      </span>
                    )}
                    <Link href={href} onClick={closeMenu} className="site-nav-link">
                      {label}
                    </Link>
                  </motion.span>
                ))}
                <motion.span variants={navItemVariant} className="site-nav-item">
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
                </motion.span>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
