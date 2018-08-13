import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
const Index = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

render(<Index />, document.getElementById('root'));
