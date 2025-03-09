import React, { useState } from "react";
import "./Todo.css";
import "../home/Home.css"

const Todo = () => {
  const [showTextarea, setShowTextarea] = useState(false);

  const show = () => {
    setShowTextarea(true);
  };

  const change = () => {

  }

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
          />
          {showTextarea && (
            <textarea
              name="body"
              className="p-2 todo-inputs"
              id="textarea"
              placeholder="Body"
              onChange={change}
            />
          )}
        </div>

        <div className="w-50 d-flex justify-content-end my-2">
          <button className="home-btn p-2">add</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
