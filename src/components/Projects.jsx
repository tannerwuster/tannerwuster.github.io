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
        <div className="project-container" style={{ overflowX: "hidden" }}>
          <div className="project current-one">
            <div className="macbook">
              <div className="macbook-lid">
                <div className="macbook-screen">
                  <div
                    className="macbook-content"
                    style={{ backgroundImage: "url('/assets/devices/rapid.png')" }}
                  />
                </div>
              </div>
              <div className="macbook-base" />
            </div>
            <div className="project-text" data-aos="zoom-in-left" data-aos-duration="800">
              <h3>Rapid</h3>
              <p>
                Working with Meta as a front-end engineer on Rapid Editor, a platform that
                seamlessly integrates advanced mapping tools, authoritative geospatial open
                data, and cutting-edge technology. Our aim is to empower mappers of all skill
                levels to easily start making precise, timely map edits.
              </p>
              <p style={{ fontSize: "12px" }}>Worked on from January 2023 - present day</p>
              <div className="made-with">
                <h4>Made With</h4>
                <ul className="project-icons-container">
                  <li>
                    <span aria-hidden="true" className="devicons devicons-css3" title="Css" />
                  </li>
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons-javascript_badge"
                      title="Javascipt & ES6"
                    />
                  </li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://rapideditor.org/edit#background=Bing&datasets=fbRoads,msBuildings&disable_features=boundaries&map=2.00/0.0/0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapid Editor — live site
                </a>
                <span aria-hidden="true"> | </span>
                <a
                  href="https://github.com/facebook/Rapid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapid on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="spacer" />
          <div className="project project-two">
            <div className="project-text" data-aos="zoom-in-left" data-aos-duration="800">
              <h3>GoKaart!</h3>
              <p>
                Forked from Go Map!!, an iPhone/iPad editor for adding cartographic
                information to OpenStreetMap. Added and maintained new features for
                Kaart&apos;s traveling team, such as the HighwayMagicEditor and KaartCamera.
              </p>
              <p style={{ fontSize: "12px" }}>Worked on from September 2019 - May of 2022</p>
              <div className="made-with">
                <h4>Made With</h4>
                <ul className="project-icons-container">
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons devicons-swift"
                      title="Swift"
                    />
                  </li>
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicon-objectivec-plain"
                      title="Objectivec"
                    />
                  </li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://apps.apple.com/us/app/go-map/id592990211"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Go Map!! on the App Store
                </a>
              </div>
            </div>
            <figure className="ipad" />
          </div>
          <div className="spacer" />
          <div className="project current-three">
            <div className="macbook">
              <div className="macbook-lid">
                <div className="macbook-screen">
                  <div
                    className="macbook-content"
                    style={{ backgroundImage: "url('/assets/devices/viewer.png')" }}
                  />
                </div>
              </div>
              <div className="macbook-base" />
            </div>
            <div className="project-text" data-aos="zoom-in-right" data-aos-duration="800">
              <h3>Viewer</h3>
              <p>
                An image viewing platform that I, along with four other engineers, created to
                help our users easily view geo-tagged imagery.
              </p>
              <p style={{ fontSize: "12px" }}>Worked on from August 2020 - January 2023</p>
              <div className="made-with">
                <h4>Made With</h4>
                <ul className="project-icons-container">
                  <li>
                    <span aria-hidden="true" className="devicons devicons-css3" title="CSS" />
                  </li>
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons devicons-react"
                      title="React"
                    />
                  </li>
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons devicons-python"
                      title="Python"
                    />
                  </li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://viewer.kaart.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaart Viewer — live site
                </a>
              </div>
            </div>
          </div>
          <div className="spacer" />
          <div className="project project-one">
            <div className="macbook">
              <div className="macbook-lid">
                <div className="macbook-screen">
                  <div
                    className="macbook-content"
                    style={{ backgroundImage: "url('/assets/devices/kaartcom.png')" }}
                  />
                </div>
              </div>
              <div className="macbook-base" />
            </div>
            <div className="project-text" data-aos="zoom-in-left" data-aos-duration="800">
              <h3>Kaart.com</h3>
              <p>
                Created and maintained a website for Kaart, a geospatial mapping company.
              </p>
              <p style={{ fontSize: "12px" }}>Worked on from January 2022 - April 2023.</p>
              <div className="made-with">
                <h4>Made With</h4>
                <ul className="project-icons-container">
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons devicons-html5"
                      title="HTML5"
                    />
                  </li>
                  <li>
                    <span aria-hidden="true" className="devicons devicons-css3" title="CSS" />
                  </li>
                  <li>
                    <span
                      aria-hidden="true"
                      className="devicons devicons-javascript_badge"
                      title="Javascipt & ES6"
                    />
                  </li>
                  <li>
                    <span aria-hidden="true" className="devicons devicons-sass" title="Sass" />
                  </li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://kaart.com" target="_blank" rel="noopener noreferrer">
                  Kaart.com — live site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
