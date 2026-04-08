import { useEffect, useState } from "react";
import AOS from "aos";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  useEffect(() => {
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
      <footer>
        <p>Designed by Tanner Wuster 2026</p>
      </footer>
    </>
  );
}
