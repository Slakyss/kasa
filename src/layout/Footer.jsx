import React from 'react'
import "./Footer.css"
import logoFooter from "../images/logo-black.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src = {logoFooter} alt= "Logo"/>
        </div>
        <div className='footer__cpr'>
            &copy; 2020 Kasa, All rights reserved
        </div>
    </div>
  )
}

export default Footer