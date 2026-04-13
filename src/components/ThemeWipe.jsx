import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** Keep in sync with `_theme-wipe.scss` animation duration. */
export const THEME_WIPE_DURATION_MS = 560;

const WIPE_MS = THEME_WIPE_DURATION_MS;

/**
 * Full-screen scale wipe when switching themes.
 * @param {'light' | 'dark' | null} direction — target theme while animating
 * @param {() => void} onComplete — apply theme + clear direction
 */
export default function ThemeWipe({ direction, onComplete }) {
  const [play, setPlay] = useState(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    completedRef.current = false;
    if (!direction) {
      setPlay(false);
      return undefined;
    }
    const id = requestAnimationFrame(() => setPlay(true));
    const fallback = window.setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current();
      }
    }, WIPE_MS + 120);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(fallback);
    };
  }, [direction]);

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current();
  };

  if (!direction) return null;

  const className = [
    "theme-wipe",
    direction === "light" ? "theme-wipe--to-light" : "theme-wipe--to-dark",
    play ? "theme-wipe--play" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return createPortal(
    <div
      className={className}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden="true"
    />,
    document.body,
  );
}
