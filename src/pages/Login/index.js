import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/Login/style.css';

const Login = () => {
    const navigate = useNavigate();
    const id = 1001;
    const name = 'article1';
    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <button className="login-button" onClick={() => navigate('/')}>go to Home</button>
            <button className="login-button" onClick={() => navigate('/layout')}>go to Layout</button>
            <button className="login-button" onClick={() => navigate('/article')}>Go to Article Page</button>
            <button className="login-button" onClick={() => navigate(`/article?id=${id}&name=${name}`)}> {'${}'} style go to Article</button>
            <button className="login-button" onClick={() => navigate(`/article?id=${encodeURIComponent('1001')}&name=${encodeURIComponent('article1')}`)}>encodeURIComponent go to Article</button>
            <button className="login-button" onClick={() => navigate('/article/1001')}>/ params go to Article</button>
            <button className="login-button" onClick={() => navigate('/article/10001/article1')}>second // params go to Article</button>
        </div>
    );
};

export default Login;
