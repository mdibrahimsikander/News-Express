import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              width="40"
              height="32"
              className="d-inline-block align-text-top"
            />
            News Express
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                 About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.category}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/General">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/liveNews">
                  Watch Live News
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
