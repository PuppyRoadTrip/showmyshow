import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Sorry, no shows here. Click below to head back home.</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
