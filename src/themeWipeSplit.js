/**
 * Output progress y in [0, 1] for linear time t in [0, 1] using the same curve as
 * CSS `animation-timing-function: cubic-bezier(x1, y1, x2, y2)` between (0,0) and (1,1).
 * Keeps the text gradient edge aligned with the scaleY wipe.
 */
export function cssCubicBezierY(t, x1, y1, x2, y2) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;

  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleCurveX = (u) => ((ax * u + bx) * u + cx) * u;
  const sampleCurveY = (u) => ((ay * u + by) * u + cy) * u;
  const sampleCurveDerivativeX = (u) => (3 * ax * u + 2 * bx) * u + cx;

  const solveCurveX = (x) => {
    let t2 = x;
    for (let i = 0; i < 8; i++) {
      const xErr = sampleCurveX(t2) - x;
      if (Math.abs(xErr) < 1e-6) return t2;
      const d2 = sampleCurveDerivativeX(t2);
      if (Math.abs(d2) < 1e-6) break;
      t2 -= xErr / d2;
    }
    let t0 = 0;
    let t1 = 1;
    t2 = x;
    for (let i = 0; i < 8; i++) {
      const x2 = sampleCurveX(t2);
      if (Math.abs(x2 - x) < 1e-6) return t2;
      if (x > x2) t0 = t2;
      else t1 = t2;
      t2 = (t1 + t0) * 0.5;
    }
    return t2;
  };

  return sampleCurveY(solveCurveX(t));
}

/** Matches `_theme-wipe.scss` / ThemeWipe transform easing. */
export const THEME_WIPE_CUBIC_BEZIER = [0.45, 0, 0.2, 1];
