import React from "react";
import { Link } from "react-router-dom";
// import SEO from "components/Seo";
import Card from "./common/card";
import tntImg from "./../assets/images/tnt.png";
import eliteMatchImg from "./../assets/images/eliteMatch.png";
import reactGramImg from "./../assets/images/reactGram.png";

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
          {/* <div className="column is-half is-offset-one-quarter"> */}
          <div className="column is-full-mobile is-full-touch">
            <>
              <Card
                title={"TileNTaps"}
                description={
                  "Developed an e-commerce web application in Node.js for my cousin’s business. The main functionality includes Authentication and Authorization using JSON Web Token, Error Handling with express.js, CRUD operations, Building RESTful API, implemented shopping cart, File Uploading using Mutler package, Sending Emails to customers using Nodemailer."
                }
                link={"https://tnt-hb.herokuapp.com"}
                tags={[
                  "Node.js",
                  "Webpack",
                  "Express.js",
                  "SCSS",
                  "Bootstrap",
                  "Amazon S3",
                ]}
                image={
                  <figure className="image">
                    <img src={tntImg} alt={"project one"} />
                  </figure>
                }
              />
              <Card
                title={"Elite Match"}
                description={
                  "Developed a Matrimonial web application for my final year project. Progress of app is stored on a backend created using Node.js and MongoDB. The backend built using Node.js, Express.js, and MongoDB takes advantage of well-developed RESTful API. While the Frontend of the application is created using vanilla JavaScript, Webpack, Bootstrap, and SCSS"
                }
                link={"https://elitematch.herokuapp.com"}
                tags={[
                  "Node.js",
                  "Webpack",
                  "Express.js",
                  "SCSS",
                  "Bootstrap",
                  "Amazon S3",
                ]}
                image={
                  <figure className="image">
                    <img src={eliteMatchImg} alt={"project one"} />
                  </figure>
                }
              />

              <Card
                title={"MERN Loop"}
                description={
                  "Developed a Matrimonial web application for my final year project. Progress of app is stored on a backend created using Node.js and MongoDB. The backend built using Node.js, Express.js, and MongoDB takes advantage of well-developed RESTful API. While the Frontend of the application is created using vanilla JavaScript, Webpack, Bootstrap, and SCSS"
                }
                link={"https://elitematch.herokuapp.com"}
                tags={[
                  "Node.js",
                  "Webpack",
                  "Express.js",
                  "SCSS",
                  "Bootstrap",
                  "Amazon S3",
                ]}
                image={
                  <figure className="image">
                    <img src={eliteMatchImg} alt={"project one"} />
                  </figure>
                }
              />
              <Card
                title={"React Gram"}
                description={
                  "Developed a Matrimonial web application for my final year project. Progress of app is stored on a backend created using Node.js and MongoDB. The backend built using Node.js, Express.js, and MongoDB takes advantage of well-developed RESTful API. While the Frontend of the application is created using vanilla JavaScript, Webpack, Bootstrap, and SCSS"
                }
                link={"https://elitematch.herokuapp.com"}
                tags={[
                  "Node.js",
                  "Webpack",
                  "Express.js",
                  "SCSS",
                  "Bootstrap",
                  "Amazon S3",
                ]}
                image={
                  <figure className="image">
                    <img src={reactGramImg} alt={"project one"} />
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
