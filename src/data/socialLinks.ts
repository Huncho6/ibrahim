import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const resumeHref =
  "https://drive.google.com/file/d/19oflW7YQoY38l192CVuF6EmbSMeTBCSp/view?usp=sharing";

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/Huncho6", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/ibroabodunrin", icon: FaXTwitter, label: "X" },
  {
    href: "https://www.linkedin.com/in/ibrahim-abodunrin-8b93872b0/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:teebliqs4@gmail.com", icon: MdAlternateEmail, label: "Email" },
];
