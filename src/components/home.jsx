import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "./../assets/images/habib.jpg";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/fontawesome-free-brands";

// import SEO from "components/Seo";

library.add(faGithub, faTwitter, faLinkedin);

const Home = () => (
  <>
    {/* <SEO
      lang="en"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    /> */}
    <div className="container center">
      <div className="columns is-mobile">
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
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">
          Hello, I am Habib Ur Rehman!
          <span className="emoji" role="img" aria-label="wave">
            👋
          </span>
        </h4>
        <p className="has-text-justified">
          I am a passionate software engineer and a thinker who builds creative
          and original digital products. I possess an exceptional work ethic and
          excellent problem-solving skills. I have a deep knowledge of
          accessible and responsive digital products.
        </p>
        {/* <p>I develop projects mostly with JavaScript using React and Node.</p> */}
        <p>
          check out my
          <Link to={"/projects"}> personal projects</Link>
          {"."}
        </p>
      </div>
    </section>
  </>
);

export default Home;
