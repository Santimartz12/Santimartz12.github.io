import React from 'react'

import { Link } from 'react-router-dom'

import banner from "../resources/images/Banner.webp"
import foto from "../resources/images/ImagenPerfil.webp"
import { trabajos } from '../data/trabajos'
import { Trabajo } from './layout/subComponents/Trabajo'

export const Inicio = () => {

  return (
    <div className='inicio'>
      <div className='contenedorbanner'>
        <img alt='banner' src={banner} className="banner" />
      </div>

      <div className='presentacion'>
        <div className='presentacion__info'>
          <h1 className='presentacion__titulo'> Hola! Soy Santiago Martínez. Soy Artista 3D y Desarrollador FrontEnd Junior con Angular.</h1>

          <p className='presentacion__texto'> Soy una persona que aprende bastante rápido y aplica todos esos conocimientos en proyectos tanto personales como profesionales; aparte de la programación he trabajado bastante en el diseño gráfico, la animación 3D y la edición de videos, por lo que tengo un amplio manejo de programas multimedia y he realizado varios trabajos profesionales en páginas de Freelance. </p>
        </div>
        <img className="presentacion__image" alt='foto_Santiago' src={foto} />
      </div>

      <section className='ultimos__proyectos'>
        <h1 className='ultimos__proyectos__titulo'>Algunos proyectos desarrollados</h1>
        <Link className='inicio__contacto__link' to="/portafolio"><p className='inicio__contacto__texto'>Conoce más proyectos</p></Link>
        <div className='inicio__trabajos__container'>
          <Trabajo trabajo={trabajos[4]} />
          <Trabajo trabajo={trabajos[0]} />
          <Trabajo trabajo={trabajos[6]} />
        </div>

        <div className='inicio__contacto__container'>
          <Link className='inicio__contacto__link' to="/contacto">
            <p className='inicio__contacto__texto'>Desarrollemos juntos tu nuevo proyecto</p> 
          </Link>
        </div>

      </section>
    </div>
  )
}
