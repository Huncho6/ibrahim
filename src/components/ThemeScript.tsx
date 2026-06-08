export default function ThemeScript() {
  const script = `
    (function () {
      try {
        var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.setAttribute(
          "data-theme",
          isDark ? "dark" : "light"
        );
        document.documentElement.style.colorScheme = isDark ? "dark" : "light";
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
