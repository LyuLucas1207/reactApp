import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Phone.css';
import reportWebVitals from './pages/reportWebVitals.js';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootStore from './store/index.js';

import PhoneRouter from './router/phone.js'; // 确保正确导入 PhoneRouter

const root = ReactDOM.createRoot(document.getElementById('root-phone'));
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <RouterProvider router={PhoneRouter}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();