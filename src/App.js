import React, { useState, useEffect, useContext } from "react";
import { getAllPokemon, getPokemon } from "./Services/pokemon";
import Card from "./Components/Card/Card";
import Home from "./Routes/Home";
import "./App.css";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
