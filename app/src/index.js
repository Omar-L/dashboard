import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router"

import reportWebVitals from './reportWebVitals';

// project
import './index.css';

import Home from './views/home'
import Dashboard from './views/dashboard';


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
