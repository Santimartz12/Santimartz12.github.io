import { trabajos } from '../data/trabajos.js'
import { Producciones } from './layout/subComponents/Producciones.js'
import { Trabajo } from './layout/subComponents/Trabajo.js'
import { multimedia } from '../data/multimedia.js'
import { useTranslation } from 'react-i18next'


export const Portafolio = () => {
  const { t } = useTranslation();

  return (
    <div className='portafolio'>
      <div className='frontend__container__proyectos fondo__claro__logo'>
        <h2 className='titulo__proyectos dark__text fondo__claro_elementos'>{t('frontendProjects')}</h2>
        <div className='trabajos__container'>
          {(trabajos.map(trabajo => <Trabajo key={trabajo.id} trabajo={trabajo} />))}
        </div>
      </div>

      <div className='proyectos__multimedia fondo__opaco'>
        <h2 className='titulo__proyectos light__text fondo__opaco'> {t('santiProdsFirst')} Santim<span className='orange__text--animation'>art</span>z {t('santiProdsLast')}</h2>
        <div className='multimedia__container'>
          {
            (multimedia.map(produccion => {
              return (<Producciones key={produccion.id} produccion={produccion} />)
            }))
          }

        </div>
      </div>

    </div>
  )
}
