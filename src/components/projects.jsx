import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Card from "components/Card";

import { externalLink } from "constants/paths";

const queryImage = graphql`
  query {
    propject1: file(relativePath: { eq: "gatsby-course.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "kassel-labs.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "tic-tac-porg.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project4: file(relativePath: { eq: "slack-parrot.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = () => (
  <Layout>
    <SEO
      lang="en"
      title={"Projects"}
      description={"Front-end developer, developing apps and web pages"}
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered has-text-light">Projects</h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          Some of my featured projects, see more on my{" "}
          <a
            href={externalLink.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {"."}
        </p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <StaticQuery
              query={queryImage}
              render={(data) => (
                <>
                  <Card
                    title={"Project One"}
                    subtitle={"subtitle"}
                    link={externalLink.reactGram}
                    tags={["Tech 1", "Tech 2"]}
                    image={
                      <Img
                        fixed={data.propject1.childImageSharp.fixed}
                        alt={"project one"}
                      />
                    }
                  />
                </>
              )}
            />
          </div>
        </div>
        <p className="has-text-centered">
          Check out my
          <Link to="/stack"> Stack</Link>
          {"."}
        </p>
      </div>
    </section>
  </Layout>
);

export default Projects;
