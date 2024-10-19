import React from 'react'
import { Experiencia, Formacion } from './layout/subComponents/CurriculumComp'

import unad from '../resources/images/estudios/LogoUNAD.svg'
import normal from '../resources/images/estudios/LogoNormalFalan.webp'
import udemy from '../resources/images/estudios/LogoUdemy.svg'
import one from '../resources/images/estudios/logoONE.svg'
import platzi from '../resources/images/estudios/LogoPlatzi.svg'


export const Curriculum = () => {

  const publicitarioInfo = "Me desempeñé en el retoque digital para la elaboración de diseños de posters, avisos digitales y contenido para digital para las redes de Pitbull Barber."
  const modeladoInfo = "Me encargué de construir personajes 3D para desarrolladores de videojuegos mediante bocetos enviados desde una página de Freelance."
  const frontendInfo = "Desarrollé proyectos complejos en Angular, implementando mapas, APIs, gráficas y librerías que requerían los sistemas. Lideré el frontend en mi último proyecto, gestionando los sprints y la respectiva comunicación con el cliente.";

  return (
    <div className='page'>
      <div className="perfil__profesional">
        {/* <img className='perfil__photo' alt="Foto Personal" src={myphoto}/> */}
        <div className='info__perfil'>
          <h1 className='formacion__titulo light__text'>Perfil Profesional</h1>
          {/* <img className='perfil__photo__responsive' alt="Foto Personal" src={myphoto}/> */}
          <div className='formacion__text__container'>
            <p className='formacion__text light__text'>
              Soy estudiante de Ingeniería Multimedia con especialización en desarrollo de videojuegos y amplio conocimiento en desarrollo FrontEnd. Cuento con experiencia en el uso de Angular para la creación de aplicaciones web, así como un sólido manejo de HTML, CSS y JavaScript, habilidades que desarrollé a través del programa Oracle Next Education y Alura Latam. Actualmente, estoy aprendiendo React JS para proyectos más avanzados y profundizando en Flutter con el objetivo de expandir mis conocimientos en el desarrollo mobile.
            </p> <br />
            <p className='formacion__text light__text'>
              Además, tengo habilidades avanzadas en modelado 3D y utilizo programas como Photoshop, Illustrator, Premiere y Lightroom. En mi tiempo libre, practico escultura y animación 3D, desarrollando mis propias historias a través de producciones personales.
            </p> <br />
            <p className='formacion__text light__text'>
              Soy Normalista Superior con experiencia en trabajo comunitario y en equipo, lo que me ha permitido desarrollar fuertes habilidades de colaboración. Me considero una persona responsable, dispuesta a aprender continuamente, y siempre en busca de soluciones digitales eficientes que permitan lograr los mejores resultados en los proyectos que desarrollo.
            </p>
          </div>
        </div>
      </div>


      <div className='container__curriculum fondo__claro'>
        <h1 className='formacion__titulo'>Experiencia laboral</h1>
        <div className='experiencia__lista__container'>
          <Experiencia titulo="Diseñador publicitario" nombreLogo="newspaper" fecha="03/2019 - 08/2019" info={publicitarioInfo} />
          <Experiencia titulo="Modelador 3D" nombreLogo="cube" fecha="12/2021 - 06/2023" info={modeladoInfo} />
          <Experiencia titulo="Desarrollador Frontend - SmartSoft Labs" nombreLogo="code" fecha="03/2023 - 10/2024" info={frontendInfo} />
        </div>
      </div>

      <div className='fondo__oscuro container__curriculum'>
        <h1 className='formacion__titulo light__text'>Formacion</h1>
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
