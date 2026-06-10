"use client";
import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    label: "Email",
    value: "teebliqs4@gmail.com",
    href: "mailto:teebliqs4@gmail.com",
  },
  {
    label: "Phone",
    value: "+2348149602710",
    href: "tel:+2348149602710",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Get in touch."
          description="Open to collaborations, freelance work, and new opportunities."
        />

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="contact-list"
          aria-label="Contact details"
        >
          {contactLinks.map(({ label, value, href }, index) => (
            <li key={label} className="contact-item">
              <span className="contact-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="contact-main">
                <p className="contact-label">{label}</p>
                <a href={href} className="contact-value">
                  {value}
                </a>
              </div>
            </li>
          ))}
        </motion.ul>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="contact-form"
        >
          <p className="contact-form-intro">
            Prefer a message? Send a note and I&apos;ll get back to you.
          </p>

          <div className="contact-form-grid">
            <div className="contact-field">
              <label htmlFor="name" className="contact-field-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="phone" className="contact-field-label">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="user_phone"
                placeholder="Your phone number"
                className="contact-input"
              />
            </div>

            <div className="contact-field contact-field--full">
              <label htmlFor="subject" className="contact-field-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                placeholder="What is this about?"
                className="contact-input"
              />
            </div>

            <div className="contact-field contact-field--full">
              <label htmlFor="message" className="contact-field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message"
                className="contact-input contact-textarea"
              />
            </div>
          </div>

          <div className="contact-form-actions">
            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="contact-status contact-status--success" role="status">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="contact-status contact-status--error" role="status">
                Failed to send. Please try again or email me directly.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
