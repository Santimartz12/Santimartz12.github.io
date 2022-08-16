import React from 'react'
import { Logos } from './layout/subComponents/Logos'

export const Contacto = () => {

  const size = "50px"
  return (
    <div>
      <div className='fondo__claro'>
        <section className='redes__contacto'>
          <h1 className='titulo__redes'>Redes de Contacto</h1>
          <div className='contacto__icons__lista'>
            <a rel="noreferrer" href='https://www.instagram.com/santimartz12' target="_blank"><Logos estilo="contacto__icons" size={size} colorLogo="black" logo="logo-instagram" /></a>
            <a rel="noreferrer" href='https://www.linkedin.com/in/santimartz' target="_blank"><Logos estilo="contacto__icons" size={size} colorLogo="black" logo="logo-linkedin" /></a>
            <a rel="noreferrer" href='https://www.youtube.com/channel/UCIvdofLoZQFXW_QKFxse2QQ' target="_blank"><Logos estilo="contacto__icons" size={size} colorLogo="black" logo="logo-youtube" /></a>
            <a rel="noreferrer" href='https://github.com/Santimartz12' target="_blank"><Logos estilo="contacto__icons" size={size} colorLogo="black" logo="logo-github" /></a>
          </div>
        </section>
      </div>


      <section id="contacto">
        <div className="contacto__info">
          <h2 className="contacto__titulo">Contacto</h2>
          <p className="contacto__texto">Ingresa tus datos en el siguiente formulario <br />Me pondré en contacto
            contigo lo más pronto posible.</p>

          <form className="contacto__contenedor" action="https://formsubmit.co/santimartz12@gmail.com" method="POST">

            <input
              type="text"
              id="nombreapellido"
              name='Nombre'
              placeholder="Nombre"
              className="contacto__input"
              required
            />

            <input
              type="email"
              id="email"
              name='Email'
              placeholder="Correo Electrónico"
              className="contacto__input"
              required />

            <input
              type="text"
              id="Asunto"
              name='Asunto'
              placeholder="Asunto"
              className="contacto__input"
              required />

            <textarea
              id="mensaje"
              name='Mensaje'
              required className="contacto__input contacto__input-mensaje"
              rows="10"
              placeholder="Mensaje">
            </textarea>

            <input className="contacto__boton" type="submit" value="Enviar Mensaje" />

          </form>

        </div>

      </section>
    </div>
  )
}
