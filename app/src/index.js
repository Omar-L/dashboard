import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"

// project
import './assets/index.css';

import Home from './views/home'
import Dashboard from './views/dashboard';
import Navigation from './components/navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />

    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);