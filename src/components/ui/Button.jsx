import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    children,
    className,
    icon,
    iconRight,
    loading = false,
    ...props
  },
  ref,
) {
  const classes = [
    styles.btn,
    styles[variant] || styles.primary,
    styles[size] || styles.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      className={classes}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <svg className={styles.spinner} viewBox="0 0 24 24">
          <circle
            className={styles.spinnerCircle}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className={styles.spinnerPath}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        icon
      )}
      {children}
      {iconRight && !loading && iconRight}
    </button>
  );
});

export default Button;
