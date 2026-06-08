"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setResolvedTheme } from "@/features/theme/themeSlice";
import { applyTheme, getSystemDark } from "@/features/theme/themeUtils";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    localStorage.removeItem("theme-mode");
    localStorage.removeItem("theme");

    const resolvedDark = getSystemDark();
    dispatch(setResolvedTheme({ isDarkMode: resolvedDark }));
    applyTheme(resolvedDark);
  }, [dispatch]);

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      dispatch(setResolvedTheme({ isDarkMode: event.matches }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  return <>{children}</>;
};

export default ThemeProvider;
