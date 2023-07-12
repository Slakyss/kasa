import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPageNotFound.css"
import Navbar from "../components/Navbar"
import Main from "../layout/Main"

function ErrorPageNotFound() {
  return (
    <>
        <Navbar />
        <Main>
            <div className='error__page'>
                <h1>404</h1>
                <h2>Oops ! La page que vous demandez n'existe pas</h2>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
        </Main>
    </>
  )
}

export default ErrorPageNotFound
