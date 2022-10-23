import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Logos } from './layout/subComponents/Logos';
import { multimedia } from '../data/multimedia';

export const Proyecto = () => {

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
          <span className='link__back__proyecto'>&nbsp;&nbsp; Volver al portafolio</span>
        </div>
      </NavLink>

      <img className='img__proyecto' alt={pagina.titulo} src={pagina.banner} />
      <div className='info__proyecto'>
        <h1 className='tituloinfo'>Acerca de</h1>
        <p className='acercade__proyecto'>{pagina.acercaDe}</p>
      </div>


      {/* {(pagina.galeria) && <img className='img__proyecto' alt={pagina.titulo} src={pagina.galeria[0].img} />} */}
      {(pagina.banner2) && <img className='img__proyecto' alt={pagina.titulo} src={pagina.banner2} />}


      {/* Si hay video en YouTube se muestra esto */}
      {(pagina.linkYT &&
        (<div className='info__proyecto'>
          <h1 className='tituloinfo'>Teaser - {pagina.titulo}</h1>
          <span className='contenedorYT'>{pagina.linkYT}</span>
        </div>))}

    </div>
  )
}
