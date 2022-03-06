import React from 'react';
import ReactDOM from 'react-dom';
import { RouteMatch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

conprocess.env.REACT_APP_AUTH0_CLIENT_ID,process.env.REACT_APP_AUTH0_DOMAIN)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


