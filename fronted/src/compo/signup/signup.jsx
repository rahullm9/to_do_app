import React from "react";
import "./signup.css";
import Headcomp from "./headcomp";
import {useState} from "react";

const Signup = () => {
  const [ Inputs, setInputs ] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();

    console.log(Inputs);
    setInputs({
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="signup-form d-flex flex-column w-100 p-5 ">
              <input
                type="text"
                className="username"
                placeholder="Enter username"
                name="username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                type="email"
                className="email"
                placeholder="Enter Email"
                name="email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                type="password"
                className="password"
                placeholder="Enter password"
                name="password"
                onChange={change}
                value={Inputs.password}
              />
              <button className="btn-signup p-2 " onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>

          <div className="col-left column col-lg-4 d-flex justify-content-center align-items-center">
            <Headcomp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
