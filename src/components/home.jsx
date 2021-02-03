import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "./common/seo";
import profilePic from "./../assets/images/habib.jpg";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/fontawesome-free-brands";

library.add(faGithub, faTwitter, faLinkedin);

const Home = () => (
  <>
    <SEO
      lang="en"
      description="Habib Ur Rehman, Software Engineer."
      keywords="Reactjs, Nodejs, mern stack, software engineer, backend, frontend, developer, API"
    />
    <div id="home" className="container center">
      <div className="columns is-mobile mb-0">
        <div className="column">
          <figure className="photo image is-128x128">
            <img
              src={profilePic}
              style={{ borderRadius: "100%" }}
              alt="Habib Ur Rehman"
            />
          </figure>
          <h1 className="title has-text-centered has-text-light">
            Habib Ur Rehman
          </h1>
          <h2 className="subtitle has-text-centered has-text-warning">
            Software Engineer
          </h2>
        </div>
      </div>
      <div className="has-text-centered is-mobile">
        <a href="https://github.com/hbrehman" aria-label="github">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "github"]} />
          </span>
        </a>
        <a href="https://twitter.com/hbrehman_js" aria-label="twitter">
          <span className="icon is-large">
            <FontAwesomeIcon className="fas fa-2x" icon={["fab", "twitter"]} />
          </span>
        </a>

        <a href="https://linkedin.com/in/hbrehman" aria-label="linkedin">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "linkedin"]} />
          </span>
        </a>
      </div>
    </div>
    <section className="section main-section is-size-4-desktop is-size-5-touch">
      <div id="greetingNabout" className="container content">
        <h4 id="greetings-msg" className="title  has-text-light">
          Hi there!
          <span className="emoji" role="img" aria-label="wave">
            👋
          </span>
        </h4>
        <p className="has-text-justified">
          &nbsp;&nbsp;&nbsp;&nbsp; I am a passionate software engineer and a
          thinker who builds creative and original digital products. I possess
          an exceptional work ethic and excellent problem-solving skills. I have
          a deep knowledge of accessible and responsive digital products.
        </p>
      </div>
    </section>
  </>
);

export default Home;
