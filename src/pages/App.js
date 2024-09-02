import logo from '../logo.svg';
import '../css/App.css';
import { useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="login-button" onClick={() => navigate('/layout')}>go to Layout</button>
        <button className="login-button" onClick={() => window.location.href = '/blog.html'}>Go to Blog</button>
        <button className="login-button" onClick={() => window.location.href = '/phone.html'}>Go to Phone</button>
      </header>
    </div>
  );
}

export default App;
