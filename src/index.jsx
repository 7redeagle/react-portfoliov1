import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Navbar from './components/Navbar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
