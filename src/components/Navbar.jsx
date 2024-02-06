import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold text-white" to={""}>
          START FRAMEWORK
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink
                className="nav-link  text-white fs-5 fw-bold"
                aria-current="page"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link text-white fs-5 fw-bold"
                to={"portfolio"}
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link text-white fs-5 fw-bold"
                to={"contact"}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
