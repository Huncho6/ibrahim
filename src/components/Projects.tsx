"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "@/data/projects";
import { fadeUp, inViewOptions, staggerFast } from "@/lib/motion";

const Projects = () => {
  const [ref, inView] = useInView(inViewOptions);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="divider project-section section-anchor" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Selected works."
          description="A few builds that reflect how I approach product, clarity, and execution."
        />

        <motion.ol
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerFast}
          className="project-list"
          aria-label="Selected projects"
        >
          {projects.map((project, index) => {
            const { id, title, description, href, date, tags } = project;

            return (
              <motion.li
                key={id}
                variants={fadeUp}
                className={`project-item${activeProject?.id === id ? " project-item--active" : ""}`}
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
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
                    onFocus={() => setActiveProject(project)}
                    onBlur={() => setActiveProject(null)}
                  >
                    View live
                    <HiOutlineExternalLink className="project-link-icon" aria-hidden="true" />
                  </Link>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      <AnimatePresence>
        {activeProject && !reducedMotion && (
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
