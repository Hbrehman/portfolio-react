import React from "react";
import Helmet from "react-helmet";

const Stack = () => (
  <>
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
        <div className="columns">
          <div className="column stackshare">
            <div className="stack-item">
              <img src="./../assets/images/stack/javascript.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Stack;

/* 

<>
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
          <div className="column stackshare">
            {/* <a
              frameborder="0"
              data-theme="dark"
              data-layers="1,2,4,3"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/d1f14b870d83350281fffabf0d9f06"
            ></a> }
            <a
              // frameBorder="1100"
              data-theme="dark"
              data-layers="1"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/e729b6381e73b5973e60413e581876"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
*/
