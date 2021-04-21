import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/Login';
import HomeLanding from './pages/HomeLanding';
import SavedShows from './pages/SavedShows';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/landing" component={HomeLanding} />
          <Route exact path="/saved" component={SavedShows} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
