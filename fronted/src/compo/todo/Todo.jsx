import React, { useState } from "react";
import "./Todo.css";
import "../home/Home.css";
import TodoCard from './todocard'

const Todo = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const show = () => {
    setShowTextarea(true);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    setArray([...Array, Inputs]);
    setInputs({title: "", body: ""});
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
      <div className="todo-body">
        <div className="container">
        {Array && Array.map ((item, index) => <>
          <TodoCard />
        </>
        )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
