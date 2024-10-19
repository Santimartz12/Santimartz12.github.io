import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../resources/images/Icon_Santimartz.svg"

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to="/inicio"><img className='header__logo' alt='logo Santimartz' src={logo} /></NavLink>
      <nav>
        <ul className='header__menu'>
          <li className='header__items'>
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/inicio">Inicio</NavLink>
          </li>
          <li className='header__items'>
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/portafolio">Portafolio</NavLink>
          </li>
          <li className='header__items'>
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/skills">Skills</NavLink>
          </li>
          <li className='header__items'> 
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/curriculum">Curriculum</NavLink>
          </li>
          {/* <li className='header__items'>
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/contacto">Contacto</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}