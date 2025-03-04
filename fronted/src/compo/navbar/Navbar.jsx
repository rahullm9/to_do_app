import React from "react";
import "./Navbar.css";
import {GiWhiteBook} from "react-icons/gi"

const Navbar = () => {
  return (
    <div>   
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
          <GiWhiteBook />
            <b>todo</b>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img className="user-icon" src="https://img.icons8.com/android/48/user.png" alt="" />
                </a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
