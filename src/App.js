import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Top from "./components/Top";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
