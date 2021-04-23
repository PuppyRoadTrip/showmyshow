import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/Login';
import HomeLanding from './pages/HomeLanding';
import SavedShows from './pages/SavedShows';
import ChatRoomHome from './pages/ChatRoomHome/Home';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  const [userState, setUserState] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user.attributes.email === userState) return;
      setUserState(user.attributes.email);
      console.log('Current user is: ', user.attributes.email);
    });
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLanding} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/saved" component={SavedShows} />
          <Route exact path="/chat" component={ChatRoomHome} />
          <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
      </Router>
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
