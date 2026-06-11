"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/experience";
import { fadeUp, inViewOptions, staggerFast } from "@/lib/motion";

const Experience = () => {
  const [ref, inView] = useInView(inViewOptions);

  return (
    <section id="experience" className="section-anchor" ref={ref}>
      <div className="section-container">
        <SectionHeader label="Experience" title="Career Highlights" />

        <motion.ol
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerFast}
          className="experience-list"
          aria-label="Career highlights"
        >
          {experiences.map(({ role, company, period }, index) => (
            <motion.li
              key={`${role}-${company}`}
              variants={fadeUp}
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
        </motion.ol>
      </div>
    </section>
  );
};

export default Experience;
