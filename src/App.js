import React from "react";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar/Index";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
