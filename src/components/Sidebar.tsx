"use client";
import { useAppSelector } from "@/app/hooks";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
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
  { href: "https://www.instagram.com/tuneshii/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/ibrahim-abodunrin-8b93872b0/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/Huncho6", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/ibroabodunrin", icon: FaXTwitter, label: "X" },
];

const Sidebar = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["FullStack Dev", "ExpressJs", "ReactJs"];

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(textInterval);
  }, [texts.length]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const sidebarContent = (
    <aside
      className={`flex flex-col h-full w-[280px] p-5 glass-panel border-r ${
        isDarkMode ? "shadow-glass-dark" : "shadow-glass"
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex flex-col items-center pt-2">
        <div className="relative group">
          <div
            className="absolute -inset-1 rounded-2xl opacity-60 blur-md transition-opacity group-hover:opacity-100"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            }}
          />
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1726102296/ibrahim_fjvuq7.jpg"
            alt="Abodunrin Ibrahim"
            className="relative rounded-2xl w-28 h-28 object-cover ring-2 ring-[var(--border)]"
          />
        </div>

        <h1 className="mt-5 font-display text-xl font-bold text-center tracking-tight">
          Abodunrin Ibrahim
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-sm mt-1 text-gradient"
          >
            {texts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              color: "var(--text-muted)",
              background: "var(--glass-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <Icon className="text-lg" />
          </Link>
        ))}
      </div>

      <nav className="flex flex-col gap-1 mt-8 flex-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="p-2 rounded-lg transition-colors duration-300 group-hover:text-white"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <Icon className="text-base group-hover:opacity-90" />
            </span>
            <span className="font-medium text-sm group-hover:translate-x-0.5 transition-transform duration-300 group-hover:text-[var(--text)]">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      <Link
        href="https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center mt-4"
        onClick={() => setIsOpen(false)}
      >
        Download CV
      </Link>
    </aside>
  );

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-5 left-5 z-[250] lg:hidden p-3 rounded-xl glass-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen z-[200]">
        {sidebarContent}
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[210] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 left-0 h-screen z-[220] lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
