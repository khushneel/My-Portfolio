import { useRef } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { useParallax } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${styles.card} glass`}
    >
      {/* Stars */}
      <div className={styles.stars}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <FiStar
            key={i}
            size={14}
            style={{ fill: "#fbbf24", color: "#fbbf24" }}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className={styles.quote}>
        &ldquo;{t.content}&rdquo;
      </blockquote>

      {/* Tags */}
      <div className={styles.tags}>
        {t.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Author */}
      <div className={styles.author}>
        <img src={t.avatar} alt={t.name} className={styles.avatar} />
        <div>
          <p className={styles.authorName}>{t.name}</p>
          <p className={styles.authorRole}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const orbRef = useParallax(0.35);

  return (
    <section id="testimonials" className="section">
      <div className="container" style={{ position: "relative" }}>
        <div
          ref={orbRef}
          className="orb orb-purple"
          style={{
            width: 400,
            height: 400,
            bottom: 0,
            left: "-10%",
            opacity: 0.08,
          }}
        />

        <SectionHeading
          tag="Testimonials"
          title={
            <>
              What Clients
              <br />
              <span className="gradient-text">Say</span>
            </>
          }
          subtitle="Don't just take my word for it — here's what people I've worked with have to say."
          center
        />

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
