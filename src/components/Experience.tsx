"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/experience";

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="experience" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Career Highlights"
        />

        <ol className="experience-list" aria-label="Career highlights">
          {experiences.map(({ role, company, period }, index) => (
            <motion.li
              key={`${role}-${company}`}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="experience-item"
            >
              <span className="experience-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="experience-main">
                <h3 className="experience-role">{role}</h3>
                <p className="experience-company">{company}</p>
              </div>
              <time className="experience-date" dateTime={period}>
                {period}
              </time>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
