"use client";

import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

const SocialLinks = () => (
  <nav className="footer-social" aria-label="Social media links">
    {socialLinks.map(({ href, icon: Icon, label }) => (
      <Link
        key={label}
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        aria-label={label}
        className="footer-social-link"
      >
        <Icon className="w-[1.15rem] h-[1.15rem]" />
      </Link>
    ))}
  </nav>
);

export default SocialLinks;
