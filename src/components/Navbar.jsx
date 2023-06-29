import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import "./Navbar.css"

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='navbar__logo'>
            <img src = {logo} alt= "Logo"/>
        </div>
      </NavLink>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>    
    </nav>
  )
}

export default NavBar