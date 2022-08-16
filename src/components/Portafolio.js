import { trabajos } from '../data/trabajos.js'
import { Trabajo } from './layout/subComponents/Trabajo.js'


export const Portafolio = () => {

  return (
    <div className='portafolio'>
      <h1 className='portafolio__titulo'>Portafolio</h1>
      <div className='trabajos__container'>
        {
          (trabajos.map(trabajo => {
            return (
              <Trabajo key={trabajo.id} trabajo={trabajo}/>
            )
          }))
        }
      </div>
    </div>
  )
}



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