"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "@/data/projects";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="divider project-section" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Selected works."
          description="A few builds that reflect how I approach product, clarity, and execution."
        />

        <ol className="project-list" aria-label="Selected projects">
          {projects.map(({ id, title, description, href, date, tags, preview }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`project-item${activeProject?.id === id ? " project-item--active" : ""}`}
              onMouseEnter={() => setActiveProject({ id, title, description, href, date, tags, preview })}
              onMouseLeave={() => setActiveProject(null)}
              onFocus={() => setActiveProject({ id, title, description, href, date, tags, preview })}
              onBlur={() => setActiveProject(null)}
            >
              <div className="project-item-header">
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="project-main">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-description">{description}</p>
                </div>
                <time className="project-date" dateTime={date}>
                  {date}
                </time>
              </div>

              <div className="project-item-footer">
                <ul className="project-tags" aria-label={`Technologies used in ${title}`}>
                  {tags.map((tag) => (
                    <li key={tag} className="project-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View live
                  <HiOutlineExternalLink className="project-link-icon" aria-hidden="true" />
                </Link>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="project-preview"
            aria-hidden="true"
          >
            <div className="project-preview-frame">
              <img
                src={activeProject.preview}
                alt=""
                className="project-preview-image"
                loading="lazy"
              />
            </div>
            <p className="project-preview-caption">{activeProject.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
