import React from "react";
import Headcomp from "./headcomp";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store"

const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        Inputs
      );
      sessionStorage.setItem("id", response.data.data._id);
      dispatch(authActions.login());
      history("/todo");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-left column col-lg-4 d-flex justify-content-center align-items-center">
            <Headcomp first="Sign" second="In" />
          </div>

          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="signup-form d-flex flex-column w-100 p-5 ">
              <input
                type="email"
                className="email"
                placeholder="Enter Email"
                name="email"
                value={Inputs.email}
                onChange={change}
              />

              <input
                type="password"
                className="password"
                placeholder="Enter password"
                name="password"
                value={Inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2 " onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
