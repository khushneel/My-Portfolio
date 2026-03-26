# 🚀 Professional Portfolio — React + Vite

A high-end, fully animated personal portfolio built with modern web technologies.

## ✨ Tech Stack

| Category      | Libraries                                           |
| ------------- | --------------------------------------------------- |
| Framework     | React 18 + Vite 5                                   |
| Smooth Scroll | **Lenis** (smooth scroll + GSAP ScrollTrigger sync) |
| Animations    | **GSAP** + ScrollTrigger, **Framer Motion**         |
| 3D / WebGL    | **Three.js**, React Three Fiber, Drei               |
| Lottie        | **lottie-react** (coding & success animations)      |
| Icons         | **React Icons**, **Lucide React**                   |
| Styling       | **Tailwind CSS** v3 + Custom CSS Variables          |
| Particles     | **@tsparticles/react**                              |
| 3D Tilt       | **react-tilt**                                      |
| Type Effect   | **react-type-animation**                            |
| Counters      | **react-countup**                                   |
| Toasts        | **react-hot-toast**                                 |
| Email         | **@emailjs/browser**                                |
| SEO           | **react-helmet-async**                              |
| Routing       | **react-router-dom**                                |

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Cursor, Loader, Navbar, Footer
│   └── ui/              # Button, Badge, SectionHeading
├── sections/            # Hero, About, Skills, Projects, Experience, Testimonials, Contact
├── context/             # ThemeContext
├── hooks/               # useLenis, useCursor, useScrollReveal, useScrollProgress
├── data/                # projects, skills, experience, testimonials
└── utils/               # constants, helpers (cn, lerp, clamp…)
```

## 🏁 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens on port 3000)
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

1. Copy `.env.example` → `.env`
2. Fill in your **EmailJS** credentials (service ID, template ID, public key)
3. Update `src/utils/constants.js` with your personal info
4. Replace images/Lottie URLs in sections

## 🎨 Sections

- **Hero** — 3D distorted sphere (Three.js), type animation, GSAP floating orbs
- **About** — Lottie coding animation, animated stat counters
- **Skills** — Tabbed skill bars with animations, infinite tech marquee
- **Projects** — Filterable cards with 3D tilt effect (react-tilt)
- **Experience** — Animated timeline with GSAP scroll triggers
- **Testimonials** — Glass card grid with star ratings
- **Contact** — Validated form with Lottie success animation

## 📦 Performance

- Code splitting: Three.js, GSAP, Framer Motion in separate chunks
- Lazy loading images
- Lenis + GSAP ScrollTrigger for buttery-smooth 60fps scroll
- Reduced motion support (`prefers-reduced-motion`)

---

Built with ❤️ and lots of ☕

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
