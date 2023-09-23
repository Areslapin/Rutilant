import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the default export without curly braces

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);