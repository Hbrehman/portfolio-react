import React from "react";
import Helmet from "react-helmet";
import Layout from "components/Layout";
import SEO from "components/Seo";

const Stack = () => (
  <Layout>
    <SEO
      lang="eng"
      title="Stack"
      description={"Front-end developer, developing apps and web pages"}
      keywords={"React, Node, Gatsby, Front-end, developer, API"}
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Helmet
        script={[
          {
            async: true,
            src: "https://cdn1.stackshare.io/javascripts/client-code.js",
            charSet: "utf-8",
          },
        ]}
      />
      <h1 className="title has-text-centered has-text-light">Stack</h1>
      <div className="container has-text-centered">
        <hr />
        <p className="content">
          I have experience with many modern tools, I select them for my
          projects depending on the usage.
        </p>
        <p className="content">Here is my stack on StackShare:</p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter stackshare">
            <a
              frameborder="0"
              data-theme="dark"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/e729b6381e73b5973e60413e581876"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;
