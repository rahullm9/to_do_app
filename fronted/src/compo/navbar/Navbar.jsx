import React from "react";
import "./Navbar.css";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <GiWhiteBook />
            <b>todo</b>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="todo">
                  Todo
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active btn-nav"
                  aria-current="page"
                  to="signup"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active btn-nav"
                  aria-current="page"
                  to="signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active btn-nav"
                  aria-current="page"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
