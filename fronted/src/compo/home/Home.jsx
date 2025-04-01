import React from "react";
import "./Home.css";
import "../navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          <b>
            Welcome <br />
            to your todo app
          </b>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Perspiciatis ducimus, cupiditate quisquam cum enim <br /> illum soluta
          tenetur eos nostrum quos blanditiis,
        </p>
        <Link
          style={{ color: "white" }}
          className="nav-link active btn-nav p-2"
          aria-current="page"
          to="todo"
        >
          Make todo list
        </Link>
      </div>
    </div>
  );
};

export default Home;
