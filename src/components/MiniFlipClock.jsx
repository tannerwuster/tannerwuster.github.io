import { useEffect, useState } from "react";
import { MiniFlipDigit } from "./MiniFlipDigit.jsx";
import "./MiniFlipClock.css";

export default function MiniFlipClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  return (
    <div className="mini-flip-clock" data-mini-flip-clock role="presentation" aria-hidden="true">
      <div className="mini-flip-clock__row">
        <MiniFlipDigit char={h[0]} size="large" />
        <MiniFlipDigit char={h[1]} size="large" />
        <span className="mini-flip-clock__sep" aria-hidden>
          <span className="mini-flip-clock__sep-stack">
            <span className="mini-flip-clock__sep-dot" />
            <span className="mini-flip-clock__sep-dot" />
          </span>
        </span>
        <MiniFlipDigit char={m[0]} size="large" />
        <MiniFlipDigit char={m[1]} size="large" />
        <span className="mini-flip-clock__sep mini-flip-clock__sep--sec" aria-hidden>
          <span className="mini-flip-clock__sep-stack">
            <span className="mini-flip-clock__sep-dot" />
            <span className="mini-flip-clock__sep-dot" />
          </span>
        </span>
        <div className="mini-flip-clock__seconds">
          <MiniFlipDigit char={s[0]} size="small" />
          <MiniFlipDigit char={s[1]} size="small" />
        </div>
      </div>
    </div>
  );
}
