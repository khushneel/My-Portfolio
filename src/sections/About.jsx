import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBriefcase, FiCode, FiGithub, FiAward } from "react-icons/fi";
import { useInView } from "@/hooks/useScrollProgress";
import { useParallax, useStaggerReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/data/experience";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const CODING_LOTTIE =
  "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json";

const statIcons = [
  { icon: FiBriefcase, color: "#6C63FF" },
  { icon: FiCode, color: "#00D4FF" },
  { icon: FiGithub, color: "#F97316" },
  { icon: FiAward, color: "#FF6584" },
];

function StatCard({ label, value, suffix, delay, index }) {
  const [ref, inView] = useInView({ threshold: 0.5, once: true });
  const { icon: Icon, color } = statIcons[index % statIcons.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={styles.statCard}
      style={{ "--stat-color": color }}
    >
      {/* Glow blob behind the card */}
      <div className={styles.statGlow} />

      {/* Icon badge */}
      <div className={styles.statIconWrap}>
        <Icon size={20} style={{ color }} />
      </div>

      <div className={styles.statValue}>
        {inView && <CountUp end={value} duration={2.2} />}
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <p className={styles.statLabel}>{label}</p>
    </motion.div>
  );
}

export default function About() {
  const lottieRef = useRef();
  const lottieCardRef = useRef();
  const orbRef = useParallax(0.4);
  const statsRef = useStaggerReveal({ y: 30, stagger: 0.12, duration: 0.6 });

  // Play Lottie only when it enters the viewport
  useEffect(() => {
    const card = lottieCardRef.current;
    if (!card) return;
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => lottieRef.current?.play(),
      onLeaveBack: () => lottieRef.current?.pause(),
    });
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Orbs */}
        <div
          ref={orbRef}
          className="orb orb-cyan"
          style={{
            width: 400,
            height: 400,
            top: 0,
            right: "-10%",
            opacity: 0.07,
          }}
        />

        <div className={styles.grid}>
          {/* Left — Lottie + Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div className={styles.lottieOuter}>
              <div className={styles.lottieBg} />
              <div ref={lottieCardRef} className={`${styles.lottieCard} glass`}>
                <Lottie
                  lottieRef={lottieRef}
                  path={CODING_LOTTIE}
                  loop
                  autoplay={false}
                  style={{ height: 360 }}
                  aria-label="Coding animation"
                />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className={`${styles.floatBadge2} glass`}
              >
                <span className={styles.expText}>3+ years exp.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <SectionHeading
              tag="About Me"
              title={
                <>
                  Crafting the web,
                  <br />
                  <span className="gradient-text">one pixel at a time</span>
                </>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.bio}
            >
              <p>
                I&apos;m a{" "}
                <span className={styles.bioHighlight}>
                  Full-Stack Web Developer
                </span>{" "}
                based in India, available for remote collaborations worldwide.
                With 3+ years of experience, I build immersive, high-performance
                web applications that captivate users and drive results.
              </p>
              <p>
                My work spans from crafting{" "}
                <span className={styles.bioPrimary}>pixel-perfect UIs</span>{" "}
                with buttery animations, to architecting{" "}
                <span className={styles.bioAccent}>
                  scalable backend systems
                </span>{" "}
                that handle millions of requests. I care deeply about
                performance, accessibility, and developer experience.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m contributing to open source,
                writing technical articles, or experimenting with Three.js and
                creative coding.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.facts}
            >
              {[
                { label: "Location", value: "India (Remote Worldwide)" },
                { label: "Focus", value: "React & Node.js" },
                { label: "Education", value: "B.S. Computer Science" },
              ].map(({ label, value }) => (
                <div key={label} className={styles.factItem}>
                  <span className={styles.factLabel}>{label}</span>
                  <span className={styles.factValue}>{value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            ></motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
