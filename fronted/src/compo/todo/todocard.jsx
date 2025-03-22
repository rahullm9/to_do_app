import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const todocard = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
        <div className=" d-flex justify-content-around">
          <div
            className="d-flex align-item-center card-icon-head px-2 py-1"
            onClick={() => {
              display("block");
              toBeUpdate(updateId);
            }}
          >
            <MdEditSquare className="todo-card-icon" /> Update
          </div>
          <div
            className="d-flex align-item-center card-icon-head px-2 py-1 text-danger"
            onClick={() => {
              delid(id);
            }}
          >
            <MdDelete className="todo-card-icon del" />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default todocard;
