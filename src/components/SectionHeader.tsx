"use client";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) => (
  <div
    className={`mb-12 sm:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
  >
    {label && <p className="section-label">{label}</p>}
    <h2 className="section-title">{title}</h2>
    {description && (
      <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
