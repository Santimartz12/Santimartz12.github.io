import React from 'react'

import { Link } from 'react-router-dom'

import banner from "../resources/images/Banner.webp"
import foto from "../resources/images/ImagenPerfil.webp"
import { trabajos } from '../data/trabajos'
import { Trabajo } from './layout/subComponents/Trabajo'
import { useTranslation } from 'react-i18next';


export const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className='inicio'>
      <div className='contenedorbanner'>
        <img alt='banner' src={banner} className="banner" />
      </div>

      <div className='presentacion'>
        <div className='presentacion__info'>
          <h1 className='presentacion__titulo'> {t('welcome')}</h1>
          <p className='presentacion__texto'> {t('homePresentation')} </p>
        </div>
        <img className="presentacion__image" alt='foto_Santiago' src={foto} />
      </div>

      <section className='ultimos__proyectos'>
        <h1 className='ultimos__proyectos__titulo'>{t('someProjectsTitle')}</h1>
        <Link className='inicio__contacto__link' to="/portafolio"><p className='inicio__contacto__texto'>{t('moreProjectsBtn')}</p></Link>
        <div className='inicio__trabajos__container'>
          <Trabajo trabajo={trabajos[4]} />
          <Trabajo trabajo={trabajos[0]} />
          <Trabajo trabajo={trabajos[6]} />
        </div>

        {/* <div className='inicio__contacto__container'>
          <Link className='inicio__contacto__link' to="/contacto">
            <p className='inicio__contacto__texto'>Desarrollemos juntos tu nuevo proyecto</p>
          </Link>
        </div> */}

      </section>
    </div>
  )
}
