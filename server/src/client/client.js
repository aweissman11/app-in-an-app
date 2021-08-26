// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Home from './components/Home';

ReactDOM.hydrate(
  <BrowserRouter>
    {/* <Routes /> */}
    <Home />
  </BrowserRouter>,
  document.querySelector('#react-server-dest'),
);
