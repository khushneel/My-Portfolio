import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/utils/constants";
import styles from "./Hero.module.css";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section id="home" className={`${styles.hero} grid-bg`}>
      {/* Background Orbs */}
      <div
        className="orb orb-purple"
        style={{
          width: 600,
          height: 600,
          top: "-20%",
          left: "-15%",
          opacity: 0.08,
        }}
      />
      <div
        className="orb orb-cyan"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-10%",
          opacity: 0.07,
        }}
      />
      <div
        className="orb orb-pink"
        style={{
          width: 300,
          height: 300,
          top: "40%",
          right: "30%",
          opacity: 0.04,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className={styles.inner}>
          {/* Left — Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className={styles.left}
          >
            {/* Code Tag */}
            <motion.div variants={fadeUp} className={styles.codeTag}>
              <span className={styles.codeTagText}>
                <span className={styles.muted}>&lt;</span>
                Hello World, I&apos;m {SITE_CONFIG.name}
                <span className={styles.muted}> /&gt;</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={fadeUp} className={styles.heading}>
              I Build <span className="gradient-text">Digital</span>
              <br />
              Experiences
              <br />
              <span className={styles.headingMuted}>That Matter</span>
            </motion.h1>

            {/* Type Animation */}
            <motion.div variants={fadeUp} className={styles.typeRow}>
              &gt;{" "}
              <TypeAnimation
                sequence={[
                  "Full-Stack Engineer",
                  2000,
                  "React Specialist",
                  2000,
                  "UI/UX Craftsman",
                  2000,
                  "Performance Obsessive",
                  2000,
                  "Open Source Contributor",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={styles.typeHighlight}
              />
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeUp} className={styles.desc}>
              Building blazing-fast, pixel-perfect web applications with{" "}
              <span className={styles.descHighlight}>React</span>,{" "}
              <span className={styles.descHighlight}>Node.js</span> &amp;{" "}
              <span className={styles.descHighlight}>modern tooling</span>.
              Turning complex problems into elegant, intuitive solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className={styles.ctaRow}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className={styles.socialRow}>
              <span className={styles.socialLabel}>Connect</span>
              <div className={styles.socialLinks}>
                {[
                  {
                    href: "https://github.com",
                    Icon: FiGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://linkedin.com",
                    Icon: FiLinkedin,
                    label: "LinkedIn",
                  },
                ].map(({ href, Icon, label }) => (
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
            </motion.div>
          </motion.div>

          {/* Right — Profile Photo */}
          <div className={styles.right}>
            <div className={styles.photoWrap}>
              <div className={styles.photoRing} />
              <div className={styles.photoGlow} />
              <img
                src="/CB8B652F-A19B-454F-B8FB-869472D7AB96-removebg-preview.png"
                alt="Khushneel"
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
