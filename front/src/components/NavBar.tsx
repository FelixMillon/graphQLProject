import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {!isAuthenticated && <li><Link to="/signup">Signup</Link></li>}
        {isAuthenticated && <li><Link to="/articles">Articles</Link></li>}
        {isAuthenticated && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default NavBar;
