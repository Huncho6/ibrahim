export function getSystemDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}
