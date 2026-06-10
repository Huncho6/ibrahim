import type { IconType } from "react-icons";
import {
  FaCss3,
  FaGitAlt,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export interface Technology {
  name: string;
  icon?: IconType;
  logo?: string;
  color?: string;
}

export const technologies: Technology[] = [
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: RiNextjsFill, color: "var(--text)" },
  {
    name: "AI",
    logo: "https://res.cloudinary.com/dh60kpxg5/image/upload/v1781103219/Claude_AI_symbol.svg_dvojwo.png",
  },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: FaNode, color: "#68a063" },
  { name: "Express", icon: SiExpress, color: "var(--text)" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "CSS", icon: FaCss3, color: "#1572b6" },
  { name: "GitHub", icon: FaGitAlt, color: "#f05032" },
];
