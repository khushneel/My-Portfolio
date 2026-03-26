import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.css";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    let current = 0;
    intervalRef.current = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
      setProgress(Math.min(current, 100));
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="loader-overlay"
          style={{ background: "#0A0A0F", zIndex: 99997 }}
        >
          {/* Orbs */}
          <div
            className="orb orb-purple"
            style={{
              width: 400,
              height: 400,
              top: "10%",
              left: "-10%",
              opacity: 0.12,
            }}
          />
          <div
            className="orb orb-cyan"
            style={{
              width: 300,
              height: 300,
              bottom: "10%",
              right: "-5%",
              opacity: 0.1,
            }}
          />

          <div className={styles.inner}>
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={styles.labelArea}
            >
              <div className={styles.mono}>Loading</div>
              <h1
                className={`${styles.heading} gradient-text`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Portfolio
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={styles.barWrap}
            >
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{
                    transform: `scaleX(${progress / 100})`,
                    transition: "transform 0.15s ease",
                  }}
                />
              </div>
              <div className={styles.barMeta}>
                <span>Initializing…</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
