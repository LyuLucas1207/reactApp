import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './pages/reportWebVitals.js';
import { RouterProvider } from 'react-router-dom';

import BrowserRouter from './router/blog.js';


// 通用渲染函数
function renderToRoots(rootClassName) {
  const roots = document.getElementsByClassName(rootClassName);
  
  Array.from(roots).forEach((rootElement) => {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <RouterProvider router={BrowserRouter}></RouterProvider>
      </React.StrictMode>
    );
  });
}

// 使用通用函数渲染所有带有 'root' 类名的元素
renderToRoots('root');
reportWebVitals();