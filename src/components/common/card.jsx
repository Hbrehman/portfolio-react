import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ title, description, githubLink, liveLink, tags, image }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        {/* <div className="project-image">{image}</div> */}
        <div className="project-content">
          <h4 className="title has-text-centered is-size-5-desktop is-size-6-touch has-text-light">
            {title}
          </h4>
          <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
            {description}
          </p>
          <div className="project-card-footer">
            <div className="tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={githubLink} target="_blank" className="project-link">
                <IconContext.Provider value={{ color: "", className: "" }}>
                  <span className="icon">
                    <FaGithub />
                  </span>
                </IconContext.Provider>
              </a>
              <a href={liveLink} target="_blank" className="project-link">
                <IconContext.Provider value={{ color: "", className: "" }}>
                  <span className="icon">
                    <FaExternalLinkAlt />
                  </span>
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node,
};

Card.defaultProps = {
  liveLink: null,
  tags: [],
};

export default Card;
