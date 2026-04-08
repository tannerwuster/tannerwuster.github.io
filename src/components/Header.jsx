import { useRef } from "react";
import { scrollToId } from "../scroll.js";

const NAV_IDS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "current", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header({ lightMode, setLightMode }) {
  const menuCheckboxRef = useRef(null);

  const closeMenu = () => {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false;
    }
  };

  const handleNav = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
    closeMenu();
  };

  const handleArrow = (e) => {
    e.preventDefault();
    scrollToId("about");
  };

  const handleArrowKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToId("about");
    }
  };

  return (
    <header>
      <div className="wrapper">
        <nav>
          <ul className="top-nav">
            {NAV_IDS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={handleNav(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hamburger">
            <label className="visually-hidden" htmlFor="ham-check">
              Open menu
            </label>
            <input
              ref={menuCheckboxRef}
              type="checkbox"
              name="hamburger"
              id="ham-check"
              className="ham-input"
            />
            <span />
            <span />
            <span />
            <ul className="hamburger-menu" id="ham">
              {NAV_IDS.map(({ id, label }) => (
                <li className="ham-link" key={id}>
                  <a href={`#${id}`} onClick={handleNav(id)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <section className="welcome" id="home">
        <div className="wrapper">
          <h1>
            <span style={{ textTransform: "uppercase", fontSize: "2rem" }}>Hello,</span>
            <br />
            <span style={{ textTransform: "uppercase", fontSize: "2rem" }}>my name is</span>
            <br />
            <span className="stack" style={{ "--stacks": 3 }}>
              <span style={{ "--index": 0 }}>Tanner A. Wuster</span>
              <span style={{ "--index": 1 }}>Tanner A. Wuster</span>
              <span style={{ "--index": 2 }}>Tanner A. Wuster</span>
            </span>
            <span style={{ textTransform: "uppercase", fontSize: "2rem" }}>Front-end</span>
            <br />
            <span style={{ textTransform: "uppercase", fontSize: "2rem" }}>
              Software Engineer
            </span>
          </h1>
        </div>
      </section>
      <a
        href="#about"
        className="material-icons arrow"
        aria-label="Scroll to About section"
        onClick={handleArrow}
        onKeyDown={handleArrowKeyDown}
        tabIndex={0}
      >
        expand_more
      </a>
      <div className="switch-light">
        <input
          type="checkbox"
          className="light-check"
          id="light-dark"
          aria-label="Toggle between light and dark theme"
          checked={lightMode}
          onChange={(e) => setLightMode(e.target.checked)}
        />
        <label htmlFor="light-dark" className="toggle-light">
          <span aria-hidden="true" className="fas fa-moon" />
          <span aria-hidden="true" className="fas fa-sun" />
          <span aria-hidden="true" className="switch" />
        </label>
      </div>
    </header>
  );
}
