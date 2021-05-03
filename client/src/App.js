import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding';
import SavedShows from './pages/SavedShows';
import ChatRoomHome from './pages/ChatRoomHome/Home';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import NotFound from './pages/404NotFound';
import Amplify from 'aws-amplify';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

const awsconfig = {
  "aws_project_region": "us-west-2",
  "aws_cognito_identity_pool_id": process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": "us-west-2",
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  "oauth": {}
};

console.log(awsconfig);
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeLanding} />
          <Route exact path="/saved" component={SavedShows} />
          <Route exact path="/chat" component={ChatRoomHome} />
          <Route
            path="/chat/:roomId"
            render={(props) => <ChatRoom {...props} />}
          />
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

