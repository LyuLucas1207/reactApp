import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './pages/reportWebVitals.js';
import { RouterProvider } from 'react-router-dom';

import BrowserRouter from './router/blog.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();