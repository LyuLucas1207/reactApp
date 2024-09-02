import React from 'react';
import { Link, Outlet } from "react-router-dom";
import '../../css/Layout/style.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <div className="logo">
                    <Link to="/" className="logo-link">MyWebsite</Link>
                </div>
                <nav className="navigation">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/layout/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/layout/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item"> {/* 确保为 Article 添加了 nav-item 类 */}
                            <Link to="/article" className="nav-link">Article</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="layout-main">
                <Outlet /> {/* 二级路由的内容会在这里渲染 */}
            </main>
            <footer className="layout-footer">
                <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
