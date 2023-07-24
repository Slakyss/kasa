import React from 'react'
import Navbar from "../layout/Navbar"
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
