import React from 'react';
import Logo from "../assets/LOGO.png"
import '../stylesheets/header.scss'

function Header() {

  return(
    <div className='header'>
      <img src={Logo} alt='Logo Kasa' />
      <div className='headerLinks'>
      <a href="/">Accueil</a>
      <a href="/about">A propos</a>
      </div>
    </div>
  )

}

export default Header