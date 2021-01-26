import React, { useState } from "react";

import { Link } from "react-router-dom";

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
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="navbar-item is-size-5"
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="navbar-item is-size-5"
              to="/stack"
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
