import { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';

const awsconfig = {
  "aws_project_region": "us-west-2",
  "aws_cognito_identity_pool_id": process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  "aws_cognito_region": "us-west-2",
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  "oauth": {}
};


Amplify.configure(awsconfig);

function useUserAuth() {

  const [userState, setUserState] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user.attributes.email === userState) return;
      setUserState(`${user.attributes.email}`);
    });
  });
  return [userState]
};

export default useUserAuth;