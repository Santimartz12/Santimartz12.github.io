import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Logos } from './layout/subComponents/Logos';
import { multimedia } from '../data/multimedia';
import { useTranslation } from 'react-i18next';

export const Proyecto = () => {
  const { t } = useTranslation();

  const { proyecto } = useParams();

  const [pagina, setPagina] = useState([]);

  const buscarPagina = () => {

    multimedia.forEach(proyect => {
      if (proyect.id === proyecto) {
        setPagina(proyect);
      }
    });
  }

  useEffect(() => {
    buscarPagina();
  },)


  return (
    <div className='proyecto'>

      <NavLink to="/portafolio" style={{ textDecoration: 'none' }}>
        <div className='go__back__proyecto'>
          <Logos colorLogo='inherit' logo='arrow-back-outline' />
          <span className='link__back__proyecto'>&nbsp;&nbsp; {t('backToPortfolio')}</span>
        </div>
      </NavLink>

      <img className='img__proyecto' alt={pagina.titulo} src={pagina.banner} />
      <div className='info__proyecto'>
        <h1 className='tituloinfo'>{t('about')}</h1>
        <p className='acercade__proyecto'>{t(pagina.acercaDe)}</p>
      </div>


      {(pagina.galeria) &&
        <div className='galeria'>
          <h1 className='tituloinfo'>{t('gallery')}</h1>

          <div className='galeria__container'>
            {
              (pagina.galeria.map(img => {
                return <img className='img__galeria' alt={pagina.titulo} src={img} />
              }))
            }
          </div>
        </div>
      }


      {(pagina.banner2) && <img className='img__proyecto' alt={pagina.titulo} src={pagina.banner2} />}
      {(pagina.art) &&
        (<div className='art_container'>
          <img className='img__art' alt={pagina.titulo} src={pagina.art} />
        </div>)}

      {/* Si hay video en YouTube se muestra esto */}
      {(pagina.linkYT &&
        (<div className='info__proyecto'>
          <h1 className='tituloinfo'>Teaser - {pagina.titulo}</h1>
          <span className='contenedorYT'>{pagina.linkYT}</span>
        </div>))}

    </div>
  )
}
