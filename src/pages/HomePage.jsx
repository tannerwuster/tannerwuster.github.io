import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage({ lightMode, setLightMode }) {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash === "#current") {
      const el = document.getElementById("current");
      if (el) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    document.title = "Tanner Wuster";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReducedMotion) {
      AOS.init();
    }
  }, []);

  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <main>
        <div className="spacer" />
        <About />
        <div className="spacer" />
        <Skills />
        <div className="spacer" />
        <Projects />
        <div className="spacer" />
        <Contact />
        <div className="spacer" />
      </main>
      <Footer />
    </>
  );
}
