import React from 'react'

//Importacion de componentes
import { Logos } from './subComponents/Logos'



export const Footer = () => {
    return (
        <footer className='footer'>

            <p className='footer__name'>&copy; Santiago Martinez Martinez</p>

            <div className='footer__icons__container'>
                <a
                    className='footer__icon'
                    href='https://github.com/Santimartz12'
                    target="_blank">
                    <Logos logo="logo-github" size="20px" colorLogo="black" />
                </a>

                <a
                    className='footer__icon'
                    href='https://www.linkedin.com/in/santimartz'
                    target="_blank">
                    <Logos logo="logo-linkedin" size="20px" colorLogo="black" />
                </a>

                <a
                    className='footer__icon'
                    href='https://www.instagram.com/santimartz12'
                    target="_blank">
                    <Logos logo="logo-instagram" size="20px" colorLogo="black" />
                </a>

            </div>
        </footer>
    )
}
