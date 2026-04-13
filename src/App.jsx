import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import AOS from "aos";
import Header from "./components/Header.jsx";
import ThemeWipe, { THEME_WIPE_DURATION_MS } from "./components/ThemeWipe.jsx";
import {
  cssCubicBezierY,
  THEME_WIPE_CUBIC_BEZIER,
} from "./themeWipeSplit.js";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const [themeWipe, setThemeWipe] = useState(null);
  const pendingLightModeRef = useRef(null);

  const displayLightMode = themeWipe ? themeWipe === "light" : lightMode;

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  useLayoutEffect(() => {
    if (!themeWipe) {
      document.documentElement.style.removeProperty("--theme-wipe-split");
      return;
    }
    document.documentElement.style.setProperty("--theme-wipe-split", "0%");
  }, [themeWipe]);

  useEffect(() => {
    if (!themeWipe) return undefined;

    let cancelled = false;
    let rafOuter = 0;
    let rafInner = 0;
    const [x1, y1, x2, y2] = THEME_WIPE_CUBIC_BEZIER;

    rafOuter = requestAnimationFrame(() => {
      const t0 = performance.now();
      const tick = () => {
        if (cancelled) return;
        const elapsed = performance.now() - t0;
        const linear = Math.min(1, elapsed / THEME_WIPE_DURATION_MS);
        const eased = cssCubicBezierY(linear, x1, y1, x2, y2);
        document.documentElement.style.setProperty(
          "--theme-wipe-split",
          `${(eased * 100).toFixed(3)}%`,
        );
        if (linear < 1) {
          rafInner = requestAnimationFrame(tick);
        } else {
          document.documentElement.style.setProperty("--theme-wipe-split", "100%");
        }
      };
      rafInner = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
    };
  }, [themeWipe]);

  useEffect(() => {
    if (!themeWipe) {
      document.body.classList.remove(
        "theme-wiping",
        "theme-wiping--to-light",
        "theme-wiping--to-dark",
      );
      return undefined;
    }
    let cancelled = false;
    const id = requestAnimationFrame(() => {
      if (cancelled) return;
      document.body.classList.add("theme-wiping");
      document.body.classList.toggle("theme-wiping--to-light", themeWipe === "light");
      document.body.classList.toggle("theme-wiping--to-dark", themeWipe === "dark");
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
      document.body.classList.remove(
        "theme-wiping",
        "theme-wiping--to-light",
        "theme-wiping--to-dark",
      );
    };
  }, [themeWipe]);

  /**
   * Apply the new palette while the wipe sheet hides the swap. Early light→dark flips left most of the
   * viewport on dark bg + light text before the black overlay arrived (flashy). Mirror the dark→light delay.
   */
  useEffect(() => {
    if (!themeWipe) return undefined;
    const fraction = themeWipe === "light" ? 0.48 : 0.88;
    const applyAtMs = Math.round(THEME_WIPE_DURATION_MS * fraction);
    const id = window.setTimeout(() => {
      const next = pendingLightModeRef.current;
      if (typeof next === "boolean") {
        setLightMode(next);
      }
    }, applyAtMs);
    return () => window.clearTimeout(id);
  }, [themeWipe]);

  const completeThemeWipe = useCallback(() => {
    pendingLightModeRef.current = null;
    setThemeWipe(null);
  }, []);

  const handleThemeToggle = useCallback(
    (nextChecked) => {
      if (themeWipe) return;
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setLightMode(nextChecked);
        return;
      }
      pendingLightModeRef.current = nextChecked;
      setThemeWipe(nextChecked ? "light" : "dark");
    },
    [themeWipe],
  );

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
      <ThemeWipe direction={themeWipe} onComplete={completeThemeWipe} />
      <Header
        lightMode={displayLightMode}
        onThemeToggle={handleThemeToggle}
        themeLocked={Boolean(themeWipe)}
      />
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
