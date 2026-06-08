"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { HiCodeBracket, HiServerStack, HiSquare3Stack3D } from "react-icons/hi2";

const services = [
  {
    icon: HiCodeBracket,
    title: "Interactive Frontend Development",
    mobileTitle: "Frontend Development",
    description:
      "I'm proficient in frontend technologies like React.js, styled-components, and Tailwind CSS. I focus on creating responsive UIs, leveraging animations and transitions for smooth user experiences. My projects are structured with reusable components, ensuring clean, scalable code.",
  },
  {
    icon: HiServerStack,
    title: "Interactive Backend Development",
    mobileTitle: "Backend Development",
    description:
      "In backend development, I specialize in Node.js and Express.js, focusing on building robust APIs. With strong expertise in MongoDB, I ensure efficient and scalable database management. My backend work includes seamless data flow and secure authentication systems.",
  },
  {
    icon: HiSquare3Stack3D,
    title: "MERN Stack Specialization",
    mobileTitle: "MERN Stack Specialization",
    description:
      "As a full-stack developer, I excel at integrating React and Express to deliver dynamic, secure web applications. I handle both client-side and server-side development, ensuring solutions are user-friendly and technically sound.",
  },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="about" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Expertise"
          title="About Me"
          description="Full-stack capabilities across frontend, backend, and integrated product delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 card-interactive group"
              >
                <div
                  className="inline-flex p-3 rounded-xl mb-5 transition-all duration-300 group-hover:shadow-glow"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 tracking-tight">
                  <span className="md:hidden">{service.mobileTitle}</span>
                  <span className="hidden md:inline">{service.title}</span>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
