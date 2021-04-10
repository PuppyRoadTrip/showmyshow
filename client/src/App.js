import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";

function App() {
  return (
    <Router>
      <Link to="./"> Home</Link>
      <Link to="./login"> Login</Link>
      <Home/>
      <Login/>
    </Router>
  );
}

export default App;
