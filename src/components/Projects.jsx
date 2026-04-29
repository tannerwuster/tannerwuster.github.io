import { Link } from "react-router-dom";
import {
  JITTERJUICE_ASSET_BASE,
  JJ_ORBIT_ICONS,
  JITTERJUICE_FILL_SPRITES,
  JJ_PIXEL_STARS,
} from "./jitterjuiceSprites.js";

const PROJECTS = [
  {
    id: "ebtedfe",
    theme: "ebtedfe",
    title: "ebtEdge",
    href: "https://uw-web.staging.wallet.speakbenefits.com/signin",
    logo: {
      src: "/assets/projects/logo-ebt-square.svg",
      className: "project-card__logo project-card__logo--ebtedfe-logo",
    },
    description:
      "Mobile and web companion for SNAP shoppers — balance checks, store tools, and benefits workflows in a focused, friendly app.",
    timeframe: "2025 – present",
    externalCta: "Open ebtEdge web app →",
  },
  {
    id: "justfun",
    theme: "justfun",
    title: "Just Fun!",
    href: "/justforfun",
    logo: {
      src: "/assets/projects/justfunlogo.png",
      className: "project-card__logo project-card__logo--justfun-logo",
    },
    description:
      "A corner of the portfolio for quirky side projects and small apps — experiments, toys, and ideas worth shipping for the joy of it.",
    timeframe: "Ongoing",
    externalCta: "Open Just Fun! →",
  },
  {
    id: "jitterjuice",
    theme: "jitterjuice",
    title: "JitterJuice",
    href: "https://github.com/tannerwuster/JitterJuice",
    logo: {
      mode: "jitter-grid",
    },
    description:
      "macOS menu-bar app with a whole lot of attitude — meet Jerry the can, mascot and hype man for quick utilities, shortcuts, and menu-bar fun that keeps your Mac bubbling.",
    timeframe: "2025 – present",
    externalCta: "Download JitterJuice →",
  },
  {
    id: "rapid",
    theme: "rapid",
    title: "Rapid Editor",
    href: "https://rapideditor.org/edit#background=Bing&datasets=fbRoads,msBuildings&disable_features=boundaries&map=2.00/0.0/0.0",
    logo: {
      src: "/assets/projects/rapid-logo.svg",
      className: "project-card__logo project-card__logo--rapid-wordmark",
    },
    description:
      "Working with Meta as a front-end engineer on Rapid Editor, a platform that seamlessly integrates advanced mapping tools, authoritative geospatial open data, and cutting-edge technology.",
    timeframe: "January 2023 – March 2025",
    externalCta: "Go to rapideditor.org →",
  },
  {
    id: "gokaart",
    theme: "gomap",
    title: "Go Map!!",
    href: "https://apps.apple.com/us/app/go-map/id592990211",
    logo: {
      src: "/assets/projects/gomap-icon.png",
      className: "project-card__logo project-card__logo--gomap-icon",
    },
    description:
      "Forked from Go Map!!, an editor for adding cartographic information to OpenStreetMap. Added features for Kaart's traveling team, including HighwayMagicEditor and KaartCamera.",
    timeframe: "September 2019 – May 2022",
    externalCta: "Go to Go Map!! on the App Store →",
  },
  {
    id: "viewer",
    theme: "viewer",
    title: "Viewer",
    href: "https://viewer.kaart.com/login",
    logo: {
      src: "/assets/projects/viewercom-logo.png",
      className: "project-card__logo project-card__logo--viewer-wordmark",
    },
    description:
      "An image viewing platform built with four other engineers to help users browse geo-tagged imagery.",
    timeframe: "August 2020 – January 2023",
    externalCta: "Go to viewer.kaart.com →",
  },
  {
    id: "kaartcom",
    theme: "kaart",
    title: "Kaart.com",
    href: "https://kaart.com",
    logo: {
      src: "/assets/projects/kaartcom-logo.png",
      className: "project-card__logo project-card__logo--kaart-wordmark",
    },
    description:
      "Public website for Kaart, a mobile mapping editor company bridging OpenStreetMap and geospatial field teams.",
    timeframe: "January 2022 – April 2023",
    externalCta: "Go to kaart.com →",
  },
];

export default function Projects() {
  return (
    <section className="current" id="current">
      <div className="wrapper">
        <div className="current-title">
          <h2>
            <span>Projects</span>
          </h2>
          <p>Skills grow. So will this portfolio.</p>
        </div>

        <div className="projects-cards-grid">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="projects-cards-grid__cell"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={String(index * 60)}
            >
              <article
                className={`project-card project-card--reveal project-card--${project.theme}`}
                aria-describedby={`${project.id}-sr-desc`}
              >
                <span id={`${project.id}-sr-desc`} className="project-card-sr-only">
                  {`${project.title}. ${project.description} · ${project.timeframe}`}
                </span>
                <div className="project-card__reveal-brand" aria-hidden="true">
                  {project.logo?.mode === "jitter-grid" ? (
                    <div className="project-card__jitterjuice-matrix project-card__logo project-card__logo--jitterjuice-matrix">
                      {JJ_PIXEL_STARS.map((star) => (
                        <span
                          key={star.id}
                          className={`project-card__jj-star project-card__jj-star--${star.variant}`}
                          aria-hidden="true"
                          style={{
                            left: `${star.leftPct}%`,
                            top: `${star.topPct}%`,
                            ["--jj-star-phase"]: String(star.phase),
                          }}
                        />
                      ))}
                      {JITTERJUICE_FILL_SPRITES.map((sprite) => (
                        <span
                          key={sprite.id}
                          className="project-card__jerry-fill-wrap"
                          style={{ left: `${sprite.leftPct}%`, top: `${sprite.topPct}%` }}
                        >
                          <img
                            src={`${JITTERJUICE_ASSET_BASE}/${sprite.filename}`}
                            alt=""
                            decoding="async"
                            loading="lazy"
                            aria-hidden="true"
                            className="project-card__jerry project-card__jerry--fill"
                            style={{
                              ["--jj-rot"]: `${sprite.rotationDeg}deg`,
                              ["--jj-fill-delay"]: `${-(sprite.microPhase * 9)}s`,
                            }}
                          />
                        </span>
                      ))}
                      {JJ_ORBIT_ICONS.map((filename, orbitSlot) => (
                        <img
                          key={`jj-orbit-${orbitSlot}-${filename}`}
                          data-jj-orbit-slot={String(orbitSlot + 1)}
                          src={`${JITTERJUICE_ASSET_BASE}/${filename}`}
                          alt=""
                          decoding="async"
                          loading="lazy"
                          aria-hidden="true"
                          className="project-card__jerry project-card__jerry--spoke"
                        />
                      ))}
                      <img
                        src={`${JITTERJUICE_ASSET_BASE}/jitterjuicemenuicon.png`}
                        alt=""
                        decoding="async"
                        loading="lazy"
                        aria-hidden="true"
                        className="project-card__jerry project-card__jerry--hero"
                      />
                      <span
                        className="project-card__jitterjuice-pixel-title project-card__jitterjuice-pixel-title--jit"
                        aria-hidden="true"
                      >
                        JITTER
                      </span>
                      <span
                        className="project-card__jitterjuice-pixel-title project-card__jitterjuice-pixel-title--juice"
                        aria-hidden="true"
                      >
                        JUICE
                      </span>
                    </div>
                  ) : (
                    <img
                      src={project.logo.src}
                      alt=""
                      className={project.logo.className}
                      decoding="async"
                      aria-hidden="true"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="project-card__reveal-panel">
                  <p className="project-card__description">{project.description}</p>
                  {/^https?:\/\//i.test(project.href) ? (
                    <a
                      className="project-card__link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.externalCta}
                    </a>
                  ) : (
                    <Link className="project-card__link" to={project.href}>
                      {project.externalCta}
                    </Link>
                  )}
                  <p className="project-card__meta">{project.timeframe}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
