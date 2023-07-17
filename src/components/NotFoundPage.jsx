import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <div className='error__page'>
      <h1>404</h1>
      <h2>Oops ! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}

export default NotFoundPage;