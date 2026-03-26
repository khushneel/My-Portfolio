import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import styles from "./Experience.module.css";

function ExperienceCard({ exp, index }) {
  const isEven = index % 2 === 0;
  const hasPositions = exp.positions && exp.positions.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`${styles.cardRow} ${isEven ? styles.rowEven : styles.rowOdd}`}
    >
      {/* Node on the timeline */}
      <div className={styles.timelineNode}>
        <div
          className={styles.nodeInner}
          style={{
            background: exp.color,
            boxShadow: `0 0 20px ${exp.color}66`,
          }}
        />
        <div className={styles.nodePulse} style={{ borderColor: exp.color }} />
      </div>

      {/* Card Content */}
      <div className={styles.cardWrapper}>
        <motion.div
          className={`${styles.card} glass`}
          whileHover={{
            y: -5,
            boxShadow: `0 10px 40px -10px ${exp.color}40`,
            borderColor: `${exp.color}80`,
          }}
          style={{ borderTop: `4px solid ${exp.color}` }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.logoBox}>
              <img src={exp.logo} alt={exp.company} className={styles.logo} />
            </div>

            <div className={styles.headerInfo}>
              <div className={styles.roleDuration}>
                <h3 className={styles.role}>
                  {hasPositions ? exp.company : exp.role}
                </h3>
                <span className={styles.duration}>{exp.duration}</span>
              </div>

              <div className={styles.companyLoc}>
                {!hasPositions && (
                  <span className={styles.companyName}>{exp.company}</span>
                )}
                <span className={styles.location}>{exp.location}</span>
              </div>
            </div>
          </div>

          {hasPositions ? (
            <div className={styles.positions}>
              {exp.positions.map((pos, i) => (
                <div
                  key={i}
                  className={styles.subPosition}
                  style={{ borderColor: `${exp.color}60` }}
                >
                  <div
                    className={styles.subDot}
                    style={{ background: exp.color }}
                  />
                  <h4 className={styles.subRole}>{pos.role}</h4>
                  <span className={styles.subDuration}>{pos.duration}</span>
                  {pos.skills && (
                    <div className={styles.skillTags}>
                      {pos.skills.map((s) => (
                        <span key={s} className={styles.miniTag}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.description}>{exp.description}</p>
          )}

          {exp.tech && exp.tech.length > 0 && (
            <div className={styles.tags}>
              {exp.tech.map((t) => (
                <Badge
                  key={t}
                  style={{
                    borderColor: `${exp.color}33`,
                    color: styles.tagText,
                  }}
                >
                  #{t}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Empty side for layout balance */}
      <div className={styles.emptySpace} />
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section" ref={containerRef}>
      <div className="container relative">
        <SectionHeading
          tag="Career Path"
          title={
            <>
              My Journey of <span className="gradient-text">Growth</span>
            </>
          }
          subtitle="Building scalable solutions and achieving milestones along the way."
          center
        />

        <div className={styles.timelineContainer}>
          {/* Animated Central Line */}
          <div className={styles.centralLine}>
            <motion.div
              className={styles.lineFill}
              style={{ scaleY, transformOrigin: "top" }}
            />
          </div>

          <div className={styles.list}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
