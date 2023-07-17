import React from 'react'
import "./ErrorPageNotFound.css"
import Navbar from "../components/Navbar"
import Main from "../layout/Main"
import NotFoundPage from '../components/NotFoundPage'

function ErrorPageNotFound() {
  return (
    <>
        <Navbar />
        <Main>
        <NotFoundPage/>
        </Main>
    </>
  )
}

export default ErrorPageNotFound
