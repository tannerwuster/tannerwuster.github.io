import { SocialList } from "../socialLinks.jsx";
import { scrollToId } from "../scroll.js";

export default function Contact() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    scrollToId("home");
  };

  const handleBackToTopKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToId("home");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <h2>
          <span>Contact Me</span>
        </h2>
        <div className="form-container">
          <form
            action="https://formspree.io/f/xrgvpney"
            method="POST"
            encType="multipart/form-data"
            name="contact-form"
          >
            <label className="visually-hidden" htmlFor="name">
              Enter name
            </label>
            <input type="text" name="name" id="name" placeholder="Your name" required />
            <label className="visually-hidden" htmlFor="email">
              Enter email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
            <label className="visually-hidden" htmlFor="message">
              Write a message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write a Message"
              rows={6}
              cols={50}
              wrap="hard"
              required
            />
            <button type="submit" name="submit">
              Get in touch
            </button>
          </form>
          <div className="form-text">
            <p>
              If you have any questions for me, the projects I&apos;m working on or would
              like to chat, please reach out!
            </p>
            <br />
            <p>
              Drop a question, comment, concern or Spotify Playlist. Thanks for looking!
            </p>
            <br />
            <p>
              Straight to my inbox:{" "}
              <a
                href="mailto:tannerwustertech@gmail.com?subject=Getting in Touch with Tanner Wuster"
                aria-label="Email Tanner Wuster at tannerwustertech@gmail.com"
              >
                tannerwustertech@gmail.com
              </a>
            </p>
          </div>
        </div>
        <SocialList />
        <a
          href="#home"
          className="back-to-top"
          id="top"
          aria-label="Scroll back to top of page"
          onClick={handleBackToTop}
          onKeyDown={handleBackToTopKeyDown}
          tabIndex={0}
        >
          Back to Top
        </a>
      </div>
    </section>
  );
}
