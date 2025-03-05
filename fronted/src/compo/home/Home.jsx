import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          <b>Welcome <br />to your todo app</b>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Perspiciatis
          ducimus, cupiditate quisquam cum enim <br /> illum soluta tenetur eos nostrum
          quos blanditiis,
        </p>
        <button className="home-btn p-2 btn-nav">Make todo list</button>
      </div>
    </div>
  );
};

export default Home;
