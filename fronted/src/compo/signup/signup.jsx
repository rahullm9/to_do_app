import React from "react";
import "./signup.css";
import Headcomp from "./headcomp";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      .then((response) => {
        if(response.data.message === "User already exists"){
          alert(response.data.message);
        }else{
          alert(response.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
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
                onChange={change}
                name="password"
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
