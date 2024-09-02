import React from 'react';
import '../../css/NotFound/style.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-title">404</h1>
                <p className="notfound-subtitle">Oops! Page Not Found</p>
                <p className="notfound-message">
                    We're sorry, but the page you were looking for doesn't exist, has been removed, or is temporarily unavailable.
                </p>
                <Link to="/" className="notfound-link">Go Back to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
