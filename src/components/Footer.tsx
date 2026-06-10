"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialLinks from "./SocialLinks";
import { fadeUp, inViewOptions } from "@/lib/motion";

const Footer = () => {
  const [ref, inView] = useInView(inViewOptions);

  return (
    <footer className="divider" ref={ref}>
      <div className="section-container py-10 sm:py-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="footer-inner"
        >
          <motion.div variants={fadeUp} className="footer-social-wrap lg:hidden">
            <p className="footer-social-label">Connect</p>
            <SocialLinks />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="footer-copy pt-6 lg:pt-0 border-t border-[var(--border)] lg:border-t-0"
          >
            <p className="footer-copy-line">
              Built and designed <span aria-hidden="true">with ❤️</span> by Ibrahim Abodunrin.
            </p>
            <p className="footer-copy-line footer-copy-line--muted">
              All rights reserved. ©
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
