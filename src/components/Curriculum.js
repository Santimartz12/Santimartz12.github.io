import React from 'react'
import { Experiencia, Formacion } from './layout/subComponents/CurriculumComp'

import unad from '../resources/images/estudios/LogoUNAD.svg'
import normal from '../resources/images/estudios/LogoNormalFalan.webp'
import udemy from '../resources/images/estudios/LogoUdemy.svg'
import one from '../resources/images/estudios/logoONE.svg'
import platzi from '../resources/images/estudios/LogoPlatzi.svg'
import { useTranslation } from 'react-i18next'


export const Curriculum = () => {

  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className="perfil__profesional">
        {/* <img className='perfil__photo' alt="Foto Personal" src={myphoto}/> */}
        <div className='info__perfil'>
          <h1 className='formacion__titulo light__text'>{t('professionalProfile')}</h1>
          {/* <img className='perfil__photo__responsive' alt="Foto Personal" src={myphoto}/> */}
          <div className='formacion__text__container'>
            <p className='formacion__text light__text'>{t('professionalProfileData1')}</p> <br />
            <p className='formacion__text light__text'>{t('professionalProfileData2')}</p> <br />
            <p className='formacion__text light__text'>{t('professionalProfileData3')}</p>
          </div>
        </div>
      </div>


      <div className='container__curriculum fondo__claro'>
        <h1 className='formacion__titulo'>{t('laboralExperience')}</h1>
        <div className='experiencia__lista__container'>
          <Experiencia titulo={t('publicitaryTitle')} nombreLogo="newspaper" fecha="03/2019 - 08/2019" info={t('publicitaryInfo')} />
          <Experiencia titulo={t('modelTitle')} nombreLogo="cube" fecha="12/2021 - 06/2023" info={t('modelInfo')} />
          <Experiencia titulo={t('frontendSSTitle')} nombreLogo="code" fecha="03/2023 - 10/2024" info={t('frontendSSInfo')} />
        </div>
      </div>

      <div className='fondo__oscuro container__curriculum'>
        <h1 className='formacion__titulo light__text'>{t('education')}</h1>
        <div className='formacion__lista'>
          <Formacion image={unad} titulo="Ingeniería Multimedia" info="En curso - UNAD" alt="Logo UNAD" />
          <Formacion image={one} titulo="Desarrollo FrontEnd" info="2022 - Oracle Next Education" alt="Logo Alura" />
          <Formacion image={normal} titulo="Normalista Superior" info="2019 - IENSFT" alt="Logo IENSFT" />
          <Formacion image={udemy} titulo="Angular: De cero a experto" info="2022 - Udemy" alt="Logo Udemy" />
          <Formacion image={udemy} titulo="Flutter: De cero a experto" info="En curso - Udemy" alt="Logo Udemy" />
          <Formacion image={platzi} titulo="Frontend con React.js" info="En curso - Platzi" alt="Logo Platzi" />
        </div>
      </div>

    </div>
  )
}
