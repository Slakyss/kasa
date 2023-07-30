import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/ErrorPageNotFound.css"

function ErrorPageNotFound() {
  return (
    <>
        <main>
          <div className='error__page'>
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retournez sur la page d'accueil</Link>
          </div>
        </main>
    </>
  )
}

export default ErrorPageNotFound
