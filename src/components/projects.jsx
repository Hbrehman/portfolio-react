import React from "react";
import Card from "./common/card";

const Projects = () => (
  <>
    <section
      id="projects"
      className="section is-size-4-desktop is-size-5-touch"
    >
      <h1 className="title has-text-centered has-text-light">Projects</h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          Some of my featured projects, see more on my{" "}
          <a
            href="https://github.com/hbrehman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {"."}
        </p>
        <div className="columns">
          <div className="column is-full-mobile is-full-touch">
            <>
              <Card
                title={"TileNTaps"}
                description={
                  "TileNTaps is an e-commerce application that I built for my cousin’s business. The main functionality includes Authentication and Authorization using JSON Web Token, Error Handling with express.js, RESTful API's, implementation of the shopping cart, File Uploading, Sending Emails to customers, the app uses Amazon S3 to store static assets of the application. Stripe is used as a payment gateway. Application admin uses a user-friendly admin panel to check for new orders and to create new sanitary products."
                }
                liveLink={"https://tnt-hb.herokuapp.com"}
                githubLink={"https://github.com/Hbrehman/tnt"}
                tags={[
                  "Node.js",
                  "Webpack",
                  "Express.js",
                  "SCSS",
                  "Bootstrap",
                  "Amazon S3",
                  "Stripe",
                  "MongoDB",
                ]}
              />

              <Card
                title={"Gadgeties"}
                description={
                  "Gadgeties is an application built with robust technologies like Node.js and React.js. I built this project for fun and to enhance my programming skills. Some major functionalities include, sorting based on different gadgets attributes, filtering based on categories, pagination, authentication, and authorization. The frontend of the application consumes RESTful API’s built with Express.js and MongoDB."
                }
                liveLink={"https://gadgeties.herokuapp.com"}
                githubLink={"https://github.com/Hbrehman/gadgeties"}
                tags={[
                  "React.js",
                  "Node.js",
                  "Bootstrap",
                  "MongoDB",
                  "Express.js",
                  "MongoDB",
                ]}
              />
              {/* <Card
                title={"React Gram"}
                description={
                  "Developed a Matrimonial web application for my final year project. Progress of app is stored on a backend created using Node.js and MongoDB. The backend built using Node.js, Express.js, and MongoDB takes advantage of well-developed RESTful API. While the Frontend of the application is created using vanilla JavaScript, Webpack, Bootstrap, and SCSS"
                }
                liveLink={"https://tnt-hb.herokuapp.com"}
                githubLink={"https://tnt-hb.herokuapp.com"}
                tags={["React.js", "Firebase", "Material UI"]}
              /> */}

              <Card
                title={"Elite Match"}
                description={
                  "Elite Match is a Matrimonial application that I built for my final year project. Progress of app is stored on a backend created using Node.js and MongoDB. The backend takes advantage of well-developed RESTful API. While the Frontend of the application is created using vanilla JavaScript, Webpack, Bootstrap, and SCSS."
                }
                liveLink={"https://elitematch.herokuapp.com"}
                githubLink={"https://github.com/Hbrehman/EliteMatch"}
                tags={[
                  "ES6",
                  "Express.js",
                  "Webpack",
                  "Bootstrap",
                  "SCSS",
                  "Node.js",
                ]}
              />
            </>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
