import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SITE_CONFIG, NAV_LINKS } from "@/utils/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
      style={{ background: "var(--color-bg-100)" }}
    >
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={`${styles.brandName} gradient-text`}>Khushneel</div>
            <p className={styles.brandSub}>{SITE_CONFIG.title}</p>
          </div>

          {/* Nav */}
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  document
                    .getElementById(link.href.replace("#", ""))
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={styles.navBtn}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className={styles.socials}>
            {[
              { label: "GitHub", href: "https://github.com", Icon: FiGithub },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                Icon: FiLinkedin,
              },
              {
                label: "Twitter",
                href: "https://twitter.com",
                Icon: FiTwitter,
              },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.copyright}>
          © {year} Khushneel · Designed &amp; Built with React, GSAP &amp; Lenis
        </div>
      </div>
    </footer>
  );
}
