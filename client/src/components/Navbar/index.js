import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
        Daily Plate
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/portion"
            className={
              window.location.pathname === "/portion" ||
              window.location.pathname === "/portion"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portion
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/form"
            className={
              window.location.pathname === "/form"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Form
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/grid"
            className={
              window.location.pathname === "/grid"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Grid
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
