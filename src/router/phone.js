

import Phone from "../pages/PhoneApp.js"; 
import PhoneLayout from "../pages/PhoneLayout/index.js";
import Month from "../pages/PhoneLayout/Month/index.js";
import Year from "../pages/PhoneLayout/Year/index.js";
import NotFound from "../pages/NotFound/index.js"; 
import New from "../pages/New/index.js";
import { createHashRouter } from "react-router-dom";
// createBrowserRouter 区别于 createHashRouter， createBrowserRouter 使用的是 HTML5 history API，而 createHashRouter 使用的是 hash history API


const PhoneRouter = createHashRouter([
    {
        path: '/',
        element: <Phone />,
    }, 
    {
        path: '/new',
        element: <New />,

    },
    {
        path: '/phonelayout',
        element: <PhoneLayout />,
        children: [
            {
                index: true,
                element: <Month />
            },
            {
                path: 'month',  // 移除 `/` 前缀
                element: <Month />
            }, 
            {
                path: 'year',  // 移除 `/` 前缀
                element: <Year />
            }
        ]
    }, 
    {
        path: '*',
        element: <NotFound />,
    }
]);


export default PhoneRouter; // 确保导出正确的 router

