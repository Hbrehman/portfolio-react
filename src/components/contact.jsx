import React from "react";
import { IconContext } from "react-icons";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <>
    <section id="contact" className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered has-text-light">Get In Touch</h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          I'm constantly looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="columns">
          <div className="column is-full-mobile is-full-touch">
            <>
              <div className="has-text-centered is-mobile email-icon">
                <IconContext.Provider value={{ color: "", className: "fa-2x" }}>
                  <span className="icon is-large">
                    <FaEnvelope />
                  </span>
                </IconContext.Provider>
              </div>
              <h2 className="subtitle has-text-centered has-text-warning">
                hbrehman98@gmail.com
              </h2>
            </>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
