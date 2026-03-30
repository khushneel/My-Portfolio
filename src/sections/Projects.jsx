import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects, projectCategories } from "@/data/projects";
import styles from "./Projects.module.css";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={styles.projectCard}
      style={{ "--project-color": project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top glow line (appears on hover via CSS) */}
      <div className={styles.topGlow} />

      {/* === Horizontal body: logo panel + content === */}
      <div className={styles.cardBody}>
        {/* ── Visual / Logo Panel ── */}
        <div className={styles.logoPanel}>
          <div className={styles.dotGrid} />
          <div className={styles.panelGlow} />
          <span className={styles.panelNumber} aria-hidden="true">
            {num}
          </span>

          {/* Glass logo frame */}
          <div className={styles.logoFrame}>
            <div className={styles.logoRing} />
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className={styles.logoImg}
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          <div className={styles.panelMeta}>
            <span className={styles.yearBadge}>{project.year}</span>
            {project.featured && (
              <span className={styles.featuredBadge}>✦ Featured</span>
            )}
          </div>
        </div>

        {/* ── Content ── */}
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTopRow}>
              <span className={styles.cardCategory}>{project.category}</span>
              <span className={styles.cardIndexLabel}>{num}</span>
            </div>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
            <h3
              className={styles.cardTitle}
              style={hovered ? { color: project.color } : {}}
            >
              {project.title}
            </h3>
            <p className={styles.cardDesc}>{project.description}</p>
          </div>

          <div className={styles.divider} />

          {project.highlights && (
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => (
                <li key={i} className={styles.highlightItem}>
                  <span className={styles.highlightNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.highlightText}>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* === Full-width footer: tech tags === */}
      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container relative">
        <div
          className="orb orb-pink"
          style={{
            width: 350,
            height: 350,
            top: 0,
            right: "-5%",
            opacity: 0.07,
          }}
        />

        <SectionHeading
          tag="Projects"
          title={
            <>
              Featured
              <br />
              <span className="gradient-text">Works</span>
            </>
          }
          subtitle="Production-grade projects built with a focus on performance, real-time interactivity, and exceptional user experience."
          center
        />

        {/* Filter */}
        <div className={styles.filterRow}>
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : "glass"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <motion.div layout className={styles.projectsList}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
