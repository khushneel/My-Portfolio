import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
  className,
}) {
  const wrapperClass = [
    styles.wrapper,
    center && styles.wrapperCenter,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, x: center ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={["section-tag", center && styles.tagCenter]
            .filter(Boolean)
            .join(" ")}
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-title"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={[styles.subtitle, center && styles.subtitleCenter]
            .filter(Boolean)
            .join(" ")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
