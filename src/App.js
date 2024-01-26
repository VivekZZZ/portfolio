import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Top from './components/Top';

function App() {
  return (
    <div id="app">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Top />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
