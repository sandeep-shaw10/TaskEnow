import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './assets/styles/plugins.css';
import './assets/styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(
  document.getElementById('root')
);


root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${process.env.REACT_APP_NAME}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);