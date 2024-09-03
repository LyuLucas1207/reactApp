import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Phone.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="Phone">
      <div className="card">
        <h2>Welcome to Our Application</h2>
        <p>Explore the different sections of our app. You can navigate to the phone layout page or read our latest blog posts.</p>
      </div>

      <div className="card">
        <h2>Navigation</h2>
        <p>Use the buttons below to navigate through the app.</p>
        <button className="login-button" onClick={() => navigate('/phonelayout')}>Go to Layout</button>
        <button className="login-button" onClick={() => window.location.href = '/blog.html'}>Go to Blog</button>
        <button className="login-button" onClick={() => window.location.href = '/index.html'}>Go to Home</button>
      </div>
    </div>
  );
}

export default App;
