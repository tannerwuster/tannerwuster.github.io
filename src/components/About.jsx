import { SocialList } from "../socialLinks.jsx";

export default function About() {
  return (
    <section className="about-me" id="about">
      <div className="wrapper">
        <div className="about-name">
          <h2>About Me</h2>
          <p>/tanər woo-ster/</p>
        </div>
        <div className="about-me-container" style={{ overflowX: "hidden" }}>
          <div className="about-pic" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="/assets/tanner-wuster.jpeg"
              alt="young man (Tanner) standing on a hiking trail"
            />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-duration="1000">
            <p>
              Hello! My name is Tanner Wuster, a Front-End Software Engineer based out of
              Colorado. I love using logic and design to create interactive yet useful
              applications and websites.
            </p>
            <p>
              <span>Technology evolves, and society follows.</span> Using it to our ethical
              advantage is of high importance to me.
            </p>
            <p>
              I&apos;m excited to continue growing and learning as technology shapes the
              world around us. Reach out to me through the contact form below or check me
              out at:
            </p>
            <SocialList />
          </div>
        </div>
      </div>
    </section>
  );
}
