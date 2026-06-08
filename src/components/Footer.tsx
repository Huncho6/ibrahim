"use client";

const Footer = () => {
  return (
    <footer className="divider">
      <div className="section-container py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-semibold text-sm sm:text-base">
            &copy; Ibrahim {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs tracking-wider" style={{ color: "var(--text-subtle)" }}>
            Full-stack engineer · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
