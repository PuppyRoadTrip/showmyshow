import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from '../src/pages/Login';
import HomeLanding from './pages/HomeLanding';
import SavedShows from './pages/SavedShows';
import ChatRoomHome from './pages/ChatRoomHome/Home';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import NotFound from './pages/404NotFound';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLanding} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/saved" component={SavedShows} />
          <Route exact path="/chat" component={ChatRoomHome} />
          <Route path="/chat/:roomId" render={(props) => <ChatRoom {...props} />}  />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <div className="row" id="sign-out-row">
        <h5>
          <AmplifySignOut />
        </h5>
      </div>
    </>
  );

}
export default withAuthenticator(App);
