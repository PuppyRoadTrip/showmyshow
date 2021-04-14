import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import NavTabs from "../src/components/NavTabs/NavTabs";
import ShowsAPI from "./utils/ShowsAPI";

function App() {
  
  useEffect(() => ShowsAPI.getShows().then(console.log), []);

  return (
    <>
      <Router>
        <NavTabs/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
