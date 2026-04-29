const PROJECTS = [
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
    timeframe: "January 2023 – present",
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
  },
  {
    id: "kaartcom",
    theme: "kaart",
    title: "Kaart.com",
    href: "https://kaart.com",
    logo: {
      src: "/assets/projects/Kaart%20Logo%20Light.svg",
      className: "project-card__logo project-card__logo--kaart-wordmark",
    },
    description:
      "Website for Kaart, a geospatial mapping company — created and maintained in-house.",
    timeframe: "January 2022 – April 2023",
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
              <a
                className={`project-card project-card--reveal project-card--${project.theme}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
                aria-describedby={`${project.id}-sr-desc`}
              >
                <span id={`${project.id}-sr-desc`} className="project-card-sr-only">
                  {`${project.description} · ${project.timeframe}`}
                </span>
                <div className="project-card__reveal-brand">
                  <img
                    src={project.logo.src}
                    alt=""
                    className={project.logo.className}
                    decoding="async"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className="project-card__reveal-panel" aria-hidden="true">
                  <p className="project-card__description">{project.description}</p>
                  <p className="project-card__meta">{project.timeframe}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
