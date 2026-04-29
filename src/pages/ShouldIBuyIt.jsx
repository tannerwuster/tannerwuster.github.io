import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function ShouldIBuyIt() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ShouldIBuyIt · Just Fun · Tanner Wuster";

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
          <nav className="justforfun-page__toolbar" aria-label="Just Fun">
            <Link to="/justforfun" className="justforfun-page__back-link">
              ← Back to Just Fun
            </Link>
          </nav>

          <header className="justforfun-page__masthead">
            <h1 className="justforfun-page__title">
              <span className="justforfun-page__title-mark">ShouldIBuyIt</span>
            </h1>
            <p className="justforfun-page__tagline">
              A small web toy for quick gut-checks before a purchase.
            </p>
          </header>

          <section className="justforfun-page__content" aria-label="Project details">
            <p className="justforfun-page__note">
              Coming soon.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

