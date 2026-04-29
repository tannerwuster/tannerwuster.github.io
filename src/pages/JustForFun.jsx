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

          <div className="projects-cards-grid" role="list">
            {JUST_FOR_FUN_ITEMS.map((item) => (
              <div key={item.id} className="projects-cards-grid__cell" role="listitem">
                <article
                  className={`project-card project-card--reveal project-card--${item.theme}`}
                  aria-describedby={`${item.id}-sr-desc`}
                >
                  <span id={`${item.id}-sr-desc`} className="project-card-sr-only">
                    {`${item.title}. ${item.subtitle} · ${item.meta}`}
                  </span>

                  <div className="project-card__reveal-brand" aria-hidden="true">
                    {item.hero?.mode === "sibi-money-card" ? (
                      <div className="project-card__sibi-hero">
                        <div className="sibi-title-card">
                          <span
                            className="sibi-title-card__corner sibi-title-card__corner--tl"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__cap sibi-title-card__cap--top"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__corner sibi-title-card__corner--tr"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__side sibi-title-card__side--left"
                            aria-hidden="true"
                          />
                          <span className="sibi-title-card__inner">
                            <span className="sibi-title-card__inner-text">Should I buy it?</span>
                          </span>
                          <span
                            className="sibi-title-card__side sibi-title-card__side--right"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__corner sibi-title-card__corner--bl"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__cap sibi-title-card__cap--bottom"
                            aria-hidden="true"
                          />
                          <span
                            className="sibi-title-card__corner sibi-title-card__corner--br"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ) : item.hero?.mode === "image" ? (
                      <img
                        src={item.hero.src}
                        alt=""
                        className={item.hero.className}
                        decoding="async"
                        aria-hidden="true"
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  <div className="project-card__reveal-panel">
                    <p className="project-card__description">{item.subtitle}</p>
                    <a className="project-card__link" href={item.href}>
                      {item.externalCta}
                    </a>
                    <p className="project-card__meta">{item.meta}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
