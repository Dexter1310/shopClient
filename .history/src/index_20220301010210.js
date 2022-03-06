import React from 'react';
import ReactDOM from 'react-dom';
import { RouteMatch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={client_id} redirectUri >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


