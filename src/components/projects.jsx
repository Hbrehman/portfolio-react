import React from "react";
import { Link } from "react-router-dom";
// import SEO from "components/Seo";
import Card from "./common/card";
import projectOnePic from "./../assets/images/gatsby-course.jpg";

const Projects = () => (
  <>
    {/* <SEO
      lang="en"
      title={"Projects"}
      description={"Front-end developer, developing apps and web pages"}
      keywords="React, Node, Gatsby, Front-end, developer, API"
    /> */}
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered has-text-light">Projects</h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          Some of my featured projects, see more on my{" "}
          <a href={"facebook.com"} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {"."}
        </p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <>
              <Card
                title={"Project One"}
                subtitle={"subtitle"}
                link={"facebook.com"}
                tags={["Tech 1", "Tech 2"]}
                image={
                  <figure class="image is-300x300">
                    <img src={projectOnePic} alt={"project one"} />
                  </figure>
                }
              />
            </>
          </div>
        </div>
        <p className="has-text-centered">
          Check out my
          <Link to="/stack"> Stack</Link>
          {"."}
        </p>
      </div>
    </section>
  </>
);

export default Projects;
