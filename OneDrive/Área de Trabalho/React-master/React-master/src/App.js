import Portfolio from "./components/Portfolio.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
