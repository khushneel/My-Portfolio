import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "@/context/ThemeContext";
import { useLenis } from "@/hooks/useLenis";

import SEO from "@/components/common/SEO";
import Loader from "@/components/common/Loader";
import CustomCursor from "@/components/common/Cursor";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
// import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

function Portfolio() {
  useLenis();

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <HelmetProvider>
      <SEO />
      <ThemeProvider>
        <CustomCursor />

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A26",
              color: "#F8F9FF",
              border: "1px solid rgba(108,99,255,0.3)",
              borderRadius: "14px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#00FF9C", secondary: "#0A0A0F" },
            },
            error: { iconTheme: { primary: "#FF6584", secondary: "#0A0A0F" } },
          }}
        />

        <AnimatePresence>
          {!loaded && (
            <Loader key="loader" onComplete={() => setLoaded(true)} />
          )}
        </AnimatePresence>

        {loaded && (
          <>
            <Navbar />
            <Portfolio />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}
