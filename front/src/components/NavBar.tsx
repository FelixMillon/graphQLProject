import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './NavBar.css';  // Importez votre fichier CSS

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item home"><Link to="/">Home</Link></li>
        {!isAuthenticated && (
          <>
            <li className="navbar-item right"><Link to="/login">Login</Link></li>
            <li className="navbar-item right"><Link to="/signup">Signup</Link></li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li className="navbar-item right"><Link to="/articles">Articles</Link></li>
            <li className="navbar-item right">
              <button onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
