import styles from "./Badge.module.css";

export default function Badge({ children, color, className }) {
  const colors = ["purple", "cyan", "pink", "green"];
  const autoColor =
    color || colors[Math.abs(children?.charCodeAt?.(0) ?? 0) % colors.length];

  const colorClass = styles[autoColor] || styles.default;

  return (
    <span
      className={[styles.badge, colorClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
