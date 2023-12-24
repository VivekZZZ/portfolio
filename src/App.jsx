import React from "react";
import "./app.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Top from "./components/Top";
import About from "./components/About";

const App = () => {
  return (
    <div id="app">
      <HashRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
