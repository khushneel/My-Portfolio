import { useRef } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiAngular,
  SiMaterialdesign,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiFirebase,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMysql,
  SiCloudflare,
} from "react-icons/si";
import {
  FiCode,
  FiLayers,
  FiTool,
  FiLayout,
  FiMonitor,
  FiSmartphone,
  FiCloud,
  FiBox,
} from "react-icons/fi";
import { useParallax } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.css";

const iconMap = {
  html5: SiHtml5,
  css3: SiCss,
  js: SiJavascript,
  typescript: SiTypescript,
  sass: SiSass,
  angular: SiAngular,
  material: SiMaterialdesign,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  ngrx: SiAngular,
  postman: SiPostman,
  git: SiGit,
  firebase: SiFirebase,
  figma: SiFigma,
  mediaqueries: FiMonitor,
  responsive: FiSmartphone,
  react: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  redux: SiRedux,
  zustand: FiBox,
  mysql: SiMysql,
  awss3: FiCloud,
  cloudflare: SiCloudflare,
};

const catIconMap = {
  languages: FiCode,
  frameworks: FiLayers,
  tools: FiTool,
  uiux: FiLayout,
};

const marqueeItems = [
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss, name: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiReact, name: "React.js", color: "#61DAFB" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiExpress, name: "Express.js", color: "#ffffff" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiAngular, name: "Angular", color: "#DD0031" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiCloudflare, name: "Cloudflare", color: "#F6821F" },
  { Icon: SiSass, name: "SCSS", color: "#CC6699" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.045,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

const statsVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const orbRef = useParallax(0.4);
  const totalSkills = skillCategories.reduce(
    (acc, c) => acc + c.skills.length,
    0,
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--color-bg-100)" }}
    >
      <div className="container relative">
        <div
          ref={orbRef}
          className="orb orb-purple"
          style={{
            width: 500,
            height: 500,
            bottom: "-5%",
            left: "-15%",
            opacity: 0.07,
          }}
        />
        <div
          className="orb orb-pink"
          style={{
            width: 350,
            height: 350,
            top: "10%",
            right: "-10%",
            opacity: 0.05,
          }}
        />

        <SectionHeading
          tag="Skills & Tech"
          title={
            <>
              My Technical
              <br />
              <span className="gradient-text">Arsenal</span>
            </>
          }
          subtitle="Technologies and tools I use to craft modern, scalable front-end experiences."
          center
        />

        {/* Stats Strip */}
        <motion.div
          className={styles.statsStrip}
          variants={statsVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className={styles.statItem}
              style={{ "--cat-color": cat.color }}
            >
              <span className={styles.statNum}>{cat.skills.length}</span>
              <span className={styles.statLabel}>{cat.label}</span>
            </div>
          ))}
          <div
            className={styles.statItem}
            style={{ "--cat-color": "var(--color-accent)" }}
          >
            <span className={styles.statNum}>{totalSkills}+</span>
            <span className={styles.statLabel}>Total Skills</span>
          </div>
        </motion.div>

        {/* Category Cards Grid */}
        <motion.div
          className={styles.categoriesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {skillCategories.map((cat) => {
            const CatIcon = catIconMap[cat.id] || FiCode;
            return (
              <motion.div
                key={cat.id}
                className={styles.catCard}
                style={{ "--cat-color": cat.color, "--cat-bg": cat.bgGradient }}
                variants={cardVariants}
              >
                <div className={styles.catAccent} />

                <div className={styles.catHeader}>
                  <div
                    className={styles.catIconWrap}
                    style={{
                      background: `${cat.color}18`,
                      borderColor: `${cat.color}35`,
                    }}
                  >
                    <CatIcon size={22} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className={styles.catLabel}>{cat.label}</h3>
                    <span
                      className={styles.catCountBadge}
                      style={{
                        background: `${cat.color}18`,
                        borderColor: `${cat.color}35`,
                        color: cat.color,
                      }}
                    >
                      {cat.skills.length} skills
                    </span>
                  </div>
                </div>

                <div className={styles.skillPills}>
                  {cat.skills.map((skill, i) => {
                    const PillIcon = iconMap[skill.icon] || FiCode;
                    return (
                      <motion.div
                        key={skill.name}
                        className={styles.pill}
                        style={{ "--pill-color": skill.color }}
                        custom={i}
                        variants={pillVariants}
                        whileHover={{ scale: 1.07, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <span className={styles.pillIcon}>
                          <PillIcon size={16} style={{ color: skill.color }} />
                        </span>
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Marquee */}
        <div className={styles.marqueeSection}>
          <p className={styles.marqueeLabel}>Technologies I work with</p>
          <div className={styles.marqueeOuter}>
            <div className={styles.marqueeTrack}>
              {[...marqueeItems, ...marqueeItems].map(
                ({ Icon, name, color }, i) => (
                  <div key={`${name}-${i}`} className={styles.techItem}>
                    <div
                      className={styles.techIcon}
                      style={{ "--icon-color": color }}
                    >
                      <Icon size={26} style={{ color }} />
                    </div>
                    <span className={styles.techName}>{name}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
