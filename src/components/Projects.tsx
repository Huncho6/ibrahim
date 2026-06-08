"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    problem: "Modern retail needs fast, responsive shopping experiences.",
    solution:
      "Developed a modern, React-based e-commerce platform with a sleek, minimalist design. The platform includes dynamic product listings and responsive navigation.",
    impact: "Full product discovery flow with responsive UI across devices.",
    tags: ["React", "Vite", "Responsive UI", "E-commerce"],
    image:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/kickaaa_dehiat.png",
    href: "https://ec-react-one.vercel.app/",
    date: "Aug 2024",
    featured: true,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe",
    problem: "Interactive games need instant feedback and clean UX.",
    solution:
      "Built an interactive Tic-Tac-Toe game using React, featuring a clean and straightforward design.",
    impact: "Playable, accessible game with minimal friction.",
    tags: ["React", "Game Logic", "UI/UX"],
    image:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726848934/tictac_ub60t6.png",
    href: "https://tic-tac-toe-lime-phi.vercel.app/",
    date: "Jun 2024",
    featured: false,
    span: "md:col-span-1",
  },
  {
    id: "movies",
    title: "Movie Browser Application",
    problem: "Users need a fast way to discover films and watch trailers.",
    solution:
      "Developed a dynamic movie browsing application using React and Vite. Users can search for movies, view details, and watch trailers.",
    impact: "Search-driven discovery with rich media previews.",
    tags: ["React", "Vite", "API Integration"],
    image:
      "https://res.cloudinary.com/dh60kpxg5/image/upload/v1726590694/movie_pck1ms.png",
    href: "https://movies-client-blond.vercel.app/",
    date: "Sep 2024",
    featured: false,
    span: "md:col-span-1",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="projects" className="divider relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />
      <div className="section-container relative">
        <SectionHeader
          label="Case Studies"
          title="Selected Works"
          description="Product-focused builds emphasizing problem, solution, and technical implementation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass-panel card-interactive flex flex-col ${project.span} ${
                project.featured ? "min-h-[480px]" : "min-h-[360px]"
              }`}
            >
              <div className="relative flex-1 min-h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg-elevated) 0%, transparent 55%, transparent 100%)",
                  }}
                />
                <span className="absolute top-4 right-4 tag font-mono">{project.date}</span>
              </div>

              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl sm:text-2xl mb-3">
                  {project.title}
                </h3>

                <div className="space-y-3 text-sm sm:text-base flex-1" style={{ color: "var(--text-muted)" }}>
                  <p>
                    <span className="font-mono text-xs uppercase tracking-wider mr-2" style={{ color: "var(--accent)" }}>
                      Problem
                    </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-mono text-xs uppercase tracking-wider mr-2" style={{ color: "var(--accent)" }}>
                      Solution
                    </span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="font-mono text-xs uppercase tracking-wider mr-2" style={{ color: "var(--accent-secondary)" }}>
                      Impact
                    </span>
                    {project.impact}
                  </p>
                </div>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-medium text-sm group/link transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  View live project
                  <HiOutlineExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
