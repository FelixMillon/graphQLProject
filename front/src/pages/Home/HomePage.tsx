import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue dans notre application !</h1>
      <p>Cette application permet aux utilisateurs de :</p>
      <ul>
        <li>Créer un nouveau compte</li>
        <li>Se connecter à un compte existant</li>
        <li>Créer de nouveaux articles</li>
        <li>Voir une liste de tous les articles</li>
        <li>Voir les détails d'un article</li>
        <li>Ajouter des commentaires aux articles</li>
        <li>Modifier ou supprimer vos propres commentaires</li>
        <li>Modifier ou supprimer vos propres articles</li>
        <li>Se déconnecter de votre compte</li>
      </ul>
      <p>Pour commencer, veuillez vous inscrire ou vous connecter.</p>
    </div>
  );
};

export default HomePage;
