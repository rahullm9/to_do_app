import React, { useState, useEffect } from "react";
import "./Todo.css";
import "../home/Home.css";
import TodoCard from "./todocard";
import { ToastContainer, toast } from "react-toastify";
import Update from "./update";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../store";
import axios from "axios";
let id = sessionStorage.getItem("id");
let toUpdateArray = [];

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

  const submit = async () => {
    if (Inputs.title === "" && Inputs.body === "") {
      toast.error("Title and body should not empty !");
    } else {
      if (id) {
        await axios.post("http://localhost:3000/api/v2/addtask", {
          title: Inputs.title,
          body: Inputs.body,
          id: id,
        });
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
        toast.error("Your task is not saved ! Please SignUP");
      }
    }
  };

  const del = async (Cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:3000/api/v2/deletetask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Deleted successfully");
        });
    } else {
      toast.error("First you have to SignUp");
    }
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  };
  const update = (value) => {
    toUpdateArray = Array[value];
  };
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        await axios
          .get(`http://localhost:3000/api/v2/gettask/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetchData();
    } 
  }, [submit]);

  return (
    <div>
      <div className="todo container-fluid">
        <ToastContainer />
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
          <div className="container-fluid">
            <div className=" row">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 col-8 mx-5 my-2" key={index}>
                    <TodoCard
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      delid={del}
                      display={dis}
                      updateId={index}
                      toBeUpdate={update}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update bg-success" id="todo-update">
        <div className="update container">
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
