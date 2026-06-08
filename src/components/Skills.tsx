"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces, components, and responsive experiences.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3, color: "#1572b6" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: RiNextjsFill, color: "var(--text)" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, services, and persistence layers.",
    skills: [
      { name: "Node.js", icon: FaNode, color: "#68a063" },
      { name: "Express.js", icon: SiExpress, color: "var(--text)" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    title: "Workflow",
    description: "Version control and delivery practices.",
    skills: [{ name: "GitHub", icon: FaGitAlt, color: "#f05032" }],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="skills" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Technologies"
          title="Skills & Stack"
          description="Tools and frameworks I use to ship scalable, maintainable web applications."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 card-interactive"
            >
              <h3 className="font-display text-lg mb-1">{group.title}</h3>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                {group.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color }} />
                    <span className="text-sm font-medium font-mono">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
