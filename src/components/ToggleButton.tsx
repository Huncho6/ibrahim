"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggleTheme, setTheme } from "@/features/theme/themeSlice";
import { HiSun, HiMoon } from "react-icons/hi";

const ToggleButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      dispatch(setTheme(true));
    } else {
      dispatch(setTheme(false));
    }
  }, [dispatch, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-5 z-[250] p-3 rounded-xl glass-panel card-interactive transition-all duration-300"
      style={{ color: "var(--text)" }}
    >
      {isDarkMode ? (
        <HiSun className="w-5 h-5 text-amber-400" />
      ) : (
        <HiMoon className="w-5 h-5" style={{ color: "var(--accent)" }} />
      )}
    </button>
  );
};

export default ToggleButton;
