import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

//process of node js is not installed
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-k42ih3l7.us.auth0.com"
    clientId="z0pXn2hnxQDYSBRATDOgpnhUbJudqYOw"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
