// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header">
      <div className="title">TP-GraphQL</div>
      <nav className="navigation">
        <Link to="/articles">Articles</Link> 
      </nav>
      <div className="actions">
        <Link to="/login">Connexion</Link> 
        <button>Inscription</button>
      </div>
    </header>
  );
}

export default Header;
