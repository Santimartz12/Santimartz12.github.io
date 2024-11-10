import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../resources/images/Icon_Santimartz.svg"
import { useTranslation } from 'react-i18next'
import { LangSelector } from './subComponents/lang-selector/lang-selector'

export const Header = () => {

  const { t } = useTranslation();

  return (
    <header className='header'>
      <NavLink to="/inicio"><img className='header__logo' alt='logo Santimartz' src={logo} /></NavLink>
      <nav>
        <ul className='header__menu'>
          <li className='header__items'>
            <NavLink className={`header__links ${({ isActive }) => isActive ? "active" : ""}`} to="/inicio">{t('home')}</NavLink>
          </li>
          <li className='header__items'>
            <NavLink className={`header__links ${({ isActive }) => isActive ? "active" : ""}`} to="/portafolio">{t('portfolio')}</NavLink>
          </li>
          <li className='header__items'>
            <NavLink className={`header__links ${({ isActive }) => isActive ? "active" : ""}`} to="/skills">{t('skills')}</NavLink>
          </li>
          <li className='header__items'>
            <NavLink className={`header__links ${({ isActive }) => isActive ? "active" : ""}`} to="/curriculum">{t('curriculum')}</NavLink>
          </li>

          <LangSelector></LangSelector>
          {/* <li className='header__items'>
            <NavLink className={`header__links ${({isActive}) => isActive ? "active" : ""}`} to="/contacto">Contacto</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}