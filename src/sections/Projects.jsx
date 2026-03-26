import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";
import { Tilt } from "react-tilt";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects, projectCategories } from "@/data/projects";
import styles from "./Projects.module.css";

const defaultTiltOptions = {
  reverse: false,
  max: 8,
  perspective: 1000,
  scale: 1.02,
  speed: 400,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Tilt
        options={defaultTiltOptions}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="project-card"
          style={{ height: "100%" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Image */}
          <div className={styles.imgWrap}>
            {!imgError ? (
              <img
                src={project.image}
                alt={project.title}
                className={styles.cardImg}
                style={hovered ? { transform: "scale(1.1)" } : {}}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={styles.imgPlaceholder}
                style={{
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                }}
              >
                🚀
              </div>
            )}
            <div className="project-card-overlay" />

            {/* Year badge */}
            <span className={styles.yearBadge}>{project.year}</span>

            {/* Featured badge */}
            {project.featured && (
              <span className={styles.featuredBadge}>
                <FiStar size={11} /> Featured
              </span>
            )}
          </div>

          {/* Content */}
          <div className={styles.cardBody}>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
            <h3
              className={styles.cardTitle}
              style={
                hovered
                  ? {
                      background:
                        "linear-gradient(135deg, #6c63ff 0%, #00d4ff 50%, #ff6584 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {}
              }
            >
              {project.title}
            </h3>
            <p className={styles.cardDesc}>{project.description}</p>

            {/* Tags */}
            <div className={styles.cardTags}>
              {project.tags.slice(0, 4).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              {project.tags.length > 4 && (
                <Badge color="default">+{project.tags.length - 4}</Badge>
              )}
            </div>

            {/* Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.cardStats}>
                <span className={styles.statItem}>
                  <FiStar size={12} /> {project.stats.stars}
                </span>
                <span className={styles.statItem}>
                  <FiGitBranch size={12} /> {project.stats.forks}
                </span>
              </div>
              <div className={styles.cardActions}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className={styles.githubBtn}
                >
                  <FiGithub size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
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
          subtitle="A selection of projects I've built — from SaaS products to open-source libraries."
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

        {/* Grid */}
        <motion.div layout className={styles.projectsGrid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.githubCta}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubCtaLink}
          >
            <FiGithub size={20} />
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
