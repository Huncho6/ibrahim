"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { technologies } from "@/data/technologies";

const stats = [
  { value: "2+", label: "Experiences" },
  { value: "4+", label: "Clients" },
  { value: "10+", label: "Projects" },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="about" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader
          title="About Me"
          description="With 2+ years of experience, I enjoy turning ideas into real products that are practical, maintainable, and built to grow. I've worked with companies like Novunt Finance and others, building across user-focused interfaces, backend systems, and the processes that connect them—with a consistent emphasis on clarity, performance, and long-term value."
        />

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="tech-stack"
          aria-label="Technologies I work with"
        >
          {technologies.map((tech, index) => {
            const { name, icon: Icon, color, logo } = tech;

            return (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.04 }}
              className="tech-capsule"
            >
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
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hero-stats about-stats"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="hero-stat">
              <span className="hero-stat-value">{value}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
