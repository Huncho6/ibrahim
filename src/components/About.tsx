"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { technologies } from "@/data/technologies";
import { fadeUp, inViewOptions, staggerFast } from "@/lib/motion";

const stats = [
  { value: "2+", label: "Experiences" },
  { value: "4+", label: "Clients" },
  { value: "10+", label: "Projects" },
];

const About = () => {
  const [ref, inView] = useInView(inViewOptions);

  return (
    <section id="about" className="section-anchor" ref={ref}>
      <div className="section-container">
        <SectionHeader
          title="About Me"
          description="With 2+ years of experience, I enjoy turning ideas into real products that are practical, maintainable, and built to grow. I've worked with companies like Novunt Finance and others, building across user-focused interfaces, backend systems, and the processes that connect them—with a consistent emphasis on clarity, performance, and long-term value."
        />

        <motion.ul
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerFast}
          className="tech-stack"
          aria-label="Technologies I work with"
        >
          {technologies.map(({ name, icon: Icon, color, logo }) => (
            <motion.li key={name} variants={fadeUp} className="tech-capsule">
              {logo ? (
                <img
                  src={logo}
                  alt=""
                  className="tech-capsule-icon tech-capsule-logo"
                  width={16}
                  height={16}
                />
              ) : (
                Icon && (
                  <Icon className="tech-capsule-icon" style={{ color }} aria-hidden="true" />
                )
              )}
              <span>{name}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerFast}
          className="hero-stats about-stats"
        >
          {stats.map(({ value, label }) => (
            <motion.div key={label} variants={fadeUp} className="hero-stat">
              <span className="hero-stat-value">{value}</span>
              <span className="hero-stat-label">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
