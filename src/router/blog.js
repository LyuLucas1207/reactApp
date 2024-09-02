import Login from "../pages/Login/index.js";
import Article from "../pages/Article/index.js";
import Layout from "../pages/Layout/index.js";
import About from "../pages/Layout/About/index.js";
import Contact from "../pages/Layout/Contact/index.js";
import NotFound from "../pages/NotFound/index.js"; // 假设你有一个 NotFound 组件
import { createHashRouter } from "react-router-dom";
// createBrowserRouter 区别于 createHashRouter， createBrowserRouter 使用的是 HTML5 history API，而 createHashRouter 使用的是 hash history API
import App from "../pages/BlogApp.js";

const BrowserRouter = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/article',
        element: <Article />,
    },
    {
        path: '/article/:id', // 支持路径参数的路由
        element: <Article />,
    },
    {
        path: '/article/:id/:name', // 支持多个路径参数的路由
        element: <Article />,
    },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            {
                index: true,  // 默认显示的子路由
                element: <About />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default BrowserRouter;
