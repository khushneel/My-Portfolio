import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/utils/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(`#${id}`);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerDefault}`}
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className={styles.logoBtn}
            aria-label="Go to top"
          >
            <div className={styles.logoIcon}>
              <span className="font-mono font-bold text-sm text-white">K</span>
            </div>
            <span className={styles.logoText}>Khushneel</span>
          </button>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeHash === link.href ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className={styles.navActions}>
            {/* View Resume */}
            {/* <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="OPEN"
              className={styles.resumeViewBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View
            </a> */}
            {/* Download Resume */}
            {/* <a
              href={SITE_CONFIG.resumeUrl}
              download="Khushneel_Resume.pdf"
              data-cursor-label="DOWNLOAD"
              className={styles.resumeDownloadBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a> */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={styles.mobileToggle}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.mobileMenu}
            >
              <nav className={`container ${styles.mobileMenuInner}`}>
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`${styles.mobileNavBtn} ${activeHash === link.href ? styles.mobileNavBtnActive : ""}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a
                  href={SITE_CONFIG.resumeUrl}
                  download
                  className={styles.mobileResumeBtn}
                >
                  Download Resume
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
