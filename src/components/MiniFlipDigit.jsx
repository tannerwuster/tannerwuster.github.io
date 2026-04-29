import { memo, useEffect, useRef, useState } from "react";
import "./MiniFlipDigit.css";

function FlipDigitInner({ char, size = "large", animate = true }) {
  const display =
    char === " " ? "\u00a0" : char === "_" ? "\u00a0" : char.slice(0, 1);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const settledRef = useRef(display);
  const cardRef = useRef(/** @type {HTMLDivElement | null} */ (null));
  const [settledChar, setSettledChar] = useState(display);
  const [flipping, setFlipping] = useState(false);
  const [leafChar, setLeafChar] = useState(display);

  useEffect(() => {
    if (display === settledRef.current) return;

    if (!animate || reducedMotion) {
      settledRef.current = display;
      queueMicrotask(() => {
        setSettledChar(display);
        setFlipping(false);
        setLeafChar(display);
      });
      return;
    }

    const from = settledRef.current;

    let outerRaf = 0;
    let flipRestartTid = 0;
    outerRaf = requestAnimationFrame(() => {
      setLeafChar(from);
      setFlipping(false);
      flipRestartTid = window.setTimeout(() => {
        void cardRef.current?.offsetWidth;
        setFlipping(true);
      }, 0);
    });

    const parseFlipMs = () => {
      const el =
        cardRef.current?.closest?.("[data-mini-flip-clock]") ??
        document.documentElement;
      const raw = getComputedStyle(el).getPropertyValue("--flip-bottom-dur").trim();
      const s = Number.parseFloat(raw.replace(/s\s*$/i, ""));
      return Number.isFinite(s) && s > 0 ? Math.round(s * 1000) : 600;
    };

    const ms = parseFlipMs();
    const tol = Math.max(ms + 100, ms * 1.2);
    const watchdog = window.setTimeout(() => {
      settledRef.current = display;
      setSettledChar(display);
      setFlipping(false);
      setLeafChar(display);
    }, tol);

    return () => {
      cancelAnimationFrame(outerRaf);
      window.clearTimeout(flipRestartTid);
      window.clearTimeout(watchdog);
    };
  }, [animate, display, reducedMotion]);

  const finishFlip = () => {
    if (!flipping || reducedMotion) return;
    settledRef.current = display;
    setSettledChar(display);
    setFlipping(false);
    setLeafChar(display);
  };

  const staticTopChar = flipping ? display : settledChar;

  return (
    <div className={`mini-flip-digit mini-flip-digit--${size}`} aria-hidden role="presentation">
      <div ref={cardRef} className={`mini-flip-digit-card${flipping ? " is-flipping" : ""}`}>
        <div className="mini-flip-digit-card__top">
          <span className="mini-flip-digit-card__inner mini-flip-digit-card__inner--top">{staticTopChar}</span>
        </div>
        <div className="mini-flip-digit-card__bottom mini-flip-digit-card__bottom--static">
          <span className="mini-flip-digit-card__inner mini-flip-digit-card__inner--bottom">{settledChar}</span>
        </div>
        <div className="mini-flip-digit-card__back" aria-hidden>
          <div className="mini-flip-digit-card__flip-top">
            <span className="mini-flip-digit-card__inner mini-flip-digit-card__inner--top">{leafChar}</span>
          </div>
          <div
            className="mini-flip-digit-card__bottom mini-flip-digit-card__bottom--anim"
            onAnimationEnd={(e) => {
              if (e.target !== e.currentTarget) return;
              finishFlip();
            }}
          >
            <span className="mini-flip-digit-card__inner mini-flip-digit-card__inner--bottom">{display}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function propsEqual(prev, next) {
  return prev.char === next.char && prev.size === next.size && prev.animate === next.animate;
}

export const MiniFlipDigit = memo(FlipDigitInner, propsEqual);
