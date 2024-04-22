import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="title">TP-GraphQL</div>
      <nav className="navigation">
        <a href="/articles">Article</a>
      </nav>
      <div className="actions">
        <button className="connexion">Connexion</button>
        <button className="inscription">Inscription</button>
      </div>
    </header>
  );
}

export default Header;
