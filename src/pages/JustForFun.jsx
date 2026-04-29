import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { JUST_FOR_FUN_ITEMS } from "../justForFunItems.js";

export default function JustForFun() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Just Fun · Tanner Wuster";

    document.body.classList.add("body--justforfun-route");

    return () => {
      document.title = prevTitle;
      document.body.classList.remove("body--justforfun-route");
    };
  }, []);

  return (
    <div className="justforfun-shell">
      <main className="justforfun-page" id="main">
        <div className="wrapper justforfun-page__wrap">
          <nav className="justforfun-page__toolbar" aria-label="Portfolio">
            <Link to="/#current" className="justforfun-page__back-link">
              ← Back to Projects
            </Link>
          </nav>

          <header className="justforfun-page__masthead">
            <h1 className="justforfun-page__title">
              <span className="justforfun-page__title-mark">Just Fun!</span>
            </h1>
            <p className="justforfun-page__tagline">
              Small apps, experiments, and side projects — shipped for the joy of it.
            </p>
          </header>

          <ul className="justforfun-grid" role="list">
            {JUST_FOR_FUN_ITEMS.map((item) => (
              <li key={item.id} className="justforfun-grid__cell">
                {item.to ? (
                  item.to.startsWith("http") ? (
                    <a
                      className={`justforfun-card justforfun-card--${item.accent}`}
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="justforfun-card__title">{item.title}</span>
                      <span className="justforfun-card__subtitle">{item.subtitle}</span>
                    </a>
                  ) : (
                    <Link
                      className={`justforfun-card justforfun-card--${item.accent}`}
                      to={item.to}
                    >
                      <span className="justforfun-card__title">{item.title}</span>
                      <span className="justforfun-card__subtitle">{item.subtitle}</span>
                    </Link>
                  )
                ) : (
                  <div
                    className={`justforfun-card justforfun-card--${item.accent} justforfun-card--soon`}
                    aria-label={`${item.title} — coming soon`}
                  >
                    <span className="justforfun-card__title">{item.title}</span>
                    <span className="justforfun-card__subtitle">{item.subtitle}</span>
                    <span className="justforfun-card__badge">Coming soon</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
