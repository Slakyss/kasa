import React from 'react'
import Main from "../components/Main"
import { Link } from 'react-router-dom';
import "../Styles/ErrorPageNotFound.css"

function ErrorPageNotFound() {
  return (
    <>
        <Main>
          <div className='error__page'>
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retournez sur la page d'accueil</Link>
          </div>
        </Main>
    </>
  )
}

export default ErrorPageNotFound
