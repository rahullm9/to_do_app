import React from "react";
import "./signup.css";

const headcomp = ({first, second}) => {
  return (
    <div>
      <h1 className="text-center sign-up-heading">
        {first} <br /> {second}
      </h1>
    </div>
  );
};

export default headcomp;
