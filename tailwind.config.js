/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C63FF",
          50: "#F0EFFE",
          100: "#E2DFFE",
          200: "#C5BFFC",
          300: "#A89FFB",
          400: "#8B7FF9",
          500: "#6C63FF",
          600: "#4D42FF",
          700: "#2D20FF",
          800: "#1008F5",
          900: "#0D07C4",
        },
        accent: {
          DEFAULT: "#00D4FF",
          dark: "#00A8CC",
        },
        neon: {
          purple: "#6C63FF",
          cyan: "#00D4FF",
          pink: "#FF6584",
          green: "#00FF9C",
        },
        dark: {
          DEFAULT: "#0A0A0F",
          100: "#12121A",
          200: "#1A1A26",
          300: "#222232",
          400: "#2A2A3E",
          500: "#32324A",
        },
        light: {
          DEFAULT: "#F8F9FF",
          100: "#ECEEFF",
          200: "#DDDEFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.8rem, 1.5vw, 1rem)",
        "fluid-base": "clamp(1rem, 2vw, 1.25rem)",
        "fluid-lg": "clamp(1.25rem, 3vw, 1.75rem)",
        "fluid-xl": "clamp(1.5rem, 4vw, 2.5rem)",
        "fluid-2xl": "clamp(2rem, 5vw, 3.5rem)",
        "fluid-3xl": "clamp(2.5rem, 7vw, 5rem)",
        "fluid-4xl": "clamp(3rem, 10vw, 7rem)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 6s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: {
            boxShadow: "0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 30px #6C63FF",
          },
          to: {
            boxShadow: "0 0 20px #00D4FF, 0 0 40px #00D4FF, 0 0 60px #00D4FF",
          },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #1A1A26 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(108,99,255,0.4), transparent)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-purple": "0 0 20px rgba(108, 99, 255, 0.5)",
        "neon-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-pink": "0 0 20px rgba(255, 101, 132, 0.5)",
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 35px 60px -12px rgba(108, 99, 255, 0.3)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
