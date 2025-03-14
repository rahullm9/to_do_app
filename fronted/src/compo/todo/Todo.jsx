import React, { useState } from "react";
import "./Todo.css";
import "../home/Home.css";

const Todo = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const show = () => {
    setShowTextarea(true);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    console.log(Inputs);
  };

  return (
    <div className="todo container">
      <div className="todo-main d-flex flex-column justify-content-center align-items-center my-4">
        <div className="d-flex flex-column w-50 todo-input-div p-3">
          <input
            className="todo-inputs my-2 p-2"
            type="text"
            placeholder="Title"
            onClick={show}
            onChange={change}
            name="title"
            value={Inputs.title}
          />
          {showTextarea && (
            <textarea
              name="body"
              className="p-2 todo-inputs"
              id="textarea"
              placeholder="Body"
              onChange={change}
              value={Inputs.body}
            />
          )}
        </div>

        <div className="w-50 d-flex justify-content-end my-2">
          <button className="home-btn p-2" onClick={submit}>
            add
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Task</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
