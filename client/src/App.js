import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import AccountLanding from '../src/pages/AccountLanding';
import SavedShows from './pages/SavedShows';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/landing' component={AccountLanding} />
          <Route exact path='/saved' component={SavedShows} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
