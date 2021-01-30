import React, { useState } from "react";

// import { Link } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerClass = isMenuOpen ? "is-active" : "";

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to="/">
            {"Habib Ur Rehman"}
          </Link>
          <button
            className={`navbar-burger has-text-light ${burgerClass}`}
            type="button"
            aria-label="menu"
            onClick={() => setIsMenuOpen((state) => !state)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            <Link
              className="navbar-item is-size-5"
              activeClass="is-active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="navbar-item is-size-5"
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="navbar-item is-size-5"
              activeClass="active"
              to="stack"
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setIsMenuOpen(false)}
            >
              Stack
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
