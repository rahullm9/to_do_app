import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast } from "react-toastify";

const Update = ({ display, update }) => {
  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    })
  },[update])
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async () => {  
    await axios
      .put(`${window.location.origin}/api/v2/updatetask/${update._id}`,Inputs)
      .then((response) => {
        toast.success("Update done");
      });
   
    display("none");
  };
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update ">
      <h3>Update your task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        name="body"
        id=""
        className="todo-inputs w-100 p-3"
        value={Inputs.body}
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          Update
        </button>
        <button
          className="btn btn-danger my-4 mx-4"
          onClick={() => display("none")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
