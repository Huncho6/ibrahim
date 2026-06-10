"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, fadeUpReduced, inViewOptions } from "@/lib/motion";

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
}: SectionHeaderProps) => {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView(inViewOptions);
  const itemVariant = reducedMotion ? fadeUpReduced : fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.02 },
        },
      }}
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
    >
      {label && (
        <motion.p variants={itemVariant} className="section-label">
          {label}
        </motion.p>
      )}
      <motion.h2 variants={itemVariant} className="section-title">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariant}
          className="mt-4 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
