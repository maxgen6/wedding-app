import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/scss/global.scss';
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

