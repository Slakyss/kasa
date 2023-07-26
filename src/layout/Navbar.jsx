import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.svg"
import "../Styles/Navbar.css"

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='navbar__logo'>
            <img src = {logo} alt= "Logo"/>
        </div>
      </NavLink>
      <div className='navbar__link'>        
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>    
      </div>
    </nav>
  )
}

export default NavBar