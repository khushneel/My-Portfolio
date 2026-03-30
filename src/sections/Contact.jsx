import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useParallax } from "@/hooks/useScrollReveal";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCheckCircle,
} from "react-icons/fi";
import toast from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/utils/constants";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    Icon: FiMail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    Icon: FiMapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: null,
  },
];

const socials = [
  { Icon: FiGithub, label: "GitHub", href: "https://github.com" },
  { Icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: FiTwitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const orbRef = useParallax(0.3);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const formattedMessage =
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📬 NEW PORTFOLIO CONTACT\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 Name    : ${form.name}\n` +
      `📧 Email   : ${form.email}\n` +
      `📌 Subject : ${form.subject || "Portfolio Contact"}\n\n` +
      `💬 Message :\n` +
      `──────────────────────────────\n` +
      `${form.message}\n` +
      `──────────────────────────────`;

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject || "Portfolio Contact",
          message: formattedMessage,
          to_email: "khushneel21@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      toast.success("Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error("EmailJS error:", err?.status, err?.text);
      toast.error("Failed to send. Please try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--color-bg-100)" }}
    >
      <div className="container relative">
        <div
          ref={orbRef}
          className="orb orb-cyan"
          style={{
            width: 400,
            height: 400,
            top: "-10%",
            right: "-5%",
            opacity: 0.08,
          }}
        />

        <SectionHeading
          tag="Contact"
          title={
            <>
              Let&apos;s Build
              <br />
              <span className="gradient-text">Together</span>
            </>
          }
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
          center
        />

        <div className={styles.grid}>
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.leftPanel}
          >
            <div>
              <h3 className={styles.intro}>Get in Touch</h3>
              <p className={styles.introText}>
                I&apos;m currently working at{" "}
                <span className={styles.introHighlight}>
                  Manzeera Solutions
                </span>
                . Whether you have a question, a project proposal, or just want
                to say hello — my inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className={styles.contactItems}>
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{label}</p>
                    {href ? (
                      <a href={href} className={styles.contactLink}>
                        {value}
                      </a>
                    ) : (
                      <p className={styles.contactText}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className={styles.socialsLabel}>Find me on</p>
              <div className={styles.socialsList}>
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.socialLink}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <FiCheckCircle size={48} />
                </div>
                <h4 className={styles.successTitle}>Message Sent!</h4>
                <p className={styles.successSubtitle}>
                  Thanks, {form.name}! I&apos;ll get back to you as soon as
                  possible.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`${styles.formCard} glass`}
                noValidate
              >
                <div className={styles.formBody}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input-field"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="input-field"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, freelance, etc."
                      className="input-field"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project…"
                      rows={5}
                      className="input-field"
                      style={{ resize: "none" }}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    loading={loading}
                    icon={<FiSend size={16} />}
                    className={styles.fullWidthBtn}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
