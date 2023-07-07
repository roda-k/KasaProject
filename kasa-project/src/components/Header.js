import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/LOGO.png"
import '../stylesheets/header.scss'

function Header() {

  return (
    <div className='header'>
      <img src={Logo} className='logo-kasa' alt='Logo Kasa' />
      <div className='headerLinks'>
        <NavLink
          to="/"
          className="home"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
        >
          A propos
        </NavLink>
      </div>
    </div>
  )

}

export default Header