import React from "react";
import "./App.css";
import Navbar from "./compo/navbar/Navbar";
import Home from "./compo/home/Home";
import Footer from "./compo/footer/Footer";
import About from "./compo/about/About";
import Todo from "./compo/todo/Todo";
import Signin from "./compo/signup/signin";
import Signup from "./compo/signup/signup";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
