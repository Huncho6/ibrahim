"use client";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        )
        .then(
          () => alert("Message sent successfully!"),
          () => alert("Failed to send message. Please try again later.")
        );
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/40";

  return (
    <section id="contact" className="divider" ref={ref}>
      <div className="section-container">
        <SectionHeader label="Contact" title="Get In Touch" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[
            {
              icon: MdEmail,
              label: "Email",
              value: "teebliqs4@gmail.com",
            },
            {
              icon: FaPhone,
              label: "Phone",
              value: "+2348149602710",
            },
          ].map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex items-center gap-5 card-interactive"
            >
              <div
                className="p-4 rounded-xl shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-subtle)" }}>
                  {label}
                </p>
                <p className="font-semibold text-base sm:text-lg">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-panel rounded-2xl p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: "name", name: "user_name", label: "Name", type: "text", required: true, placeholder: "Your name" },
              { id: "phone", name: "user_phone", label: "Phone No", type: "tel", required: false, placeholder: "Your phone number" },
              { id: "subject", name: "subject", label: "Subject", type: "text", required: true, placeholder: "Subject", fullWidth: false },
            ].map((field) => (
              <div key={field.id} className={field.fullWidth === false ? "" : ""}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={inputClass}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Write your message"
                className={`${inputClass} resize-none`}
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-8 w-full sm:w-auto min-w-[160px]">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
