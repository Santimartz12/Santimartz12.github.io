import { trabajos } from '../data/trabajos.js'
import { Producciones } from './layout/subComponents/Producciones.js'
import { Trabajo } from './layout/subComponents/Trabajo.js'
import { multimedia } from '../data/multimedia.js'


export const Portafolio = () => {

  return (
    <div className='portafolio'>
      <div className='frontend__container__proyectos fondo__claro__logo'>
        <h2 className='titulo__proyectos dark__text fondo__claro_elementos'>Proyectos FrontEnd</h2>
        <div className='trabajos__container'>
          {
            (trabajos.map(trabajo => {
              return (
                <Trabajo key={trabajo.id} trabajo={trabajo} />
              )
            }))
          }
        </div>
      </div>

      <div className='proyectos__multimedia fondo__opaco'>
        <h2 className='titulo__proyectos light__text fondo__opaco'> Producciones Santim<span className='orange__text--animation'>art</span>z</h2>
        <div className='multimedia__container'>
          {
            (multimedia.map(produccion => {
              return (
                <Producciones key={produccion.id} produccion={produccion}/>
              )
            }))
          }

        </div>
      </div>

    </div>
  )
}


{/* <h1 className='portafolio__titulo'>Proyectos FrontEnd</h1> */ }

// (trabajos.map(trabajo => {
//   return (
//     <article className={`trabajo__item`} key={trabajo.id}>
//       <div className='trabajo__icons__container'>
//         {trabajo.lenguajes.map(lenguaje => {
//           const logoname = `logo-${lenguaje}`;
//           return (<div key={lenguaje} className="trabajo__icon"><Logos size="30px" colorLogo="white" logo={logoname} /></div>)
//         })}
//       </div>
//       <h2 className='trabajo__titulo light__text'>{trabajo.nombre}</h2>

//       <img alt={trabajo.nombre} className='trabajo__image' src={`/trabajos/${trabajo.id}.webp`} />

//       <div className='trabajo__button__link'>
//         <a className='buttons__style btn__3' href={trabajo.urlDemo} rel="noreferrer" target="_blank">Ver Demo</a>
//         <a className='buttons__style btn__2' href={trabajo.urlRepo} rel="noreferrer" target="_blank">Repositorio</a>
//       </div>
//     </article>
//   )
// }))