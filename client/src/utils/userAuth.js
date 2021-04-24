import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify';


Amplify.configure(awsconfig);

function UserAuth() {

  const [userState, setUserState] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user.attributes.email === userState) return;
      setUserState(`Signed in as: ${user.attributes.email}`);
      console.log('Current user is: ', user.attributes.email);
    });
  });
  return [userState]
};

export default UserAuth;