import React from "react";
import "./signup.css";
import Headcomp from "./headcomp";

const signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="signup-form d-flex flex-column w-100 p-5 ">
              <input type="text" className="username" placeholder='Enter username'/>
              <input type="email" className="email" placeholder='Enter Email' />
              <input type="password" className="password" placeholder='Enter Enter password' />
              <button className="btn-signup p-2 ">Sign Up</button>
            </div>
          </div>

          <div className="col-left column col-lg-4 d-flex justify-content-center align-items-center">
            <Headcomp first="Sign" second="Up"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
