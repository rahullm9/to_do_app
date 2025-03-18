import React from "react";

const update = () => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update ">
      <h3>Update your task</h3>
      <input type="text" className="todo-inputs my-4 w-100 p-3" />
      <textarea name="" id="" className="todo-inputs w-100 p-3" />
      <button className="btn btn-dark my-4">Update</button>
      <button className="btn btn-danger my-4">Close</button>
    </div>
  );
};

export default update;
