import React from 'react'
import { Experiencia, Formacion } from './layout/subComponents/CurriculumComp'

import unad from '../resources/images/estudios/LogoUNAD.svg'
import normal from '../resources/images/estudios/LogoNormalFalan.webp'
import udemy from '../resources/images/estudios/LogoUdemy.svg'
import one from '../resources/images/estudios/logoONE.svg'
import myphoto from '../resources/images/Yop.webp'


export const Curriculum = () => {

  const publicitarioInfo = "Me desempeñé en el retoque digital para la elaboración de diseños de posters, avisos digitales y contenido para digital para las redes de Pitbull Barber."

  const modeladoInfo = "Me encargo de construir personajes 3D para desarrolladores de videojuegos mediante bocetos enviados desde una página de Freelance."

  return (
    <div className='page'>
      <div className="perfil__profesional">
        <img className='perfil__photo' alt="Foto Personal" src={myphoto}/>
        <div className='info__perfil'>
          <h1 className='formacion__titulo light__text'>Perfil Profesional</h1>
          <img className='perfil__photo__responsive' alt="Foto Personal" src={myphoto}/>
          <p className='formacion__text light__text'>Soy una persona paciente, amable, honrada y sincera, con voluntad de seguir    capacitándome para mejorar cada día como persona y profesional, tengo buena disposición para atender y recibir
            sugerencias y siempre busco hacer todo de la mejor manera posible para lograr un resultado excelente
            en las actividades donde me desempeño. </p> <br />
          <p className='formacion__text light__text'>Soy Normalista superior con experiencia en
            trabajo comunitario y en equipo, tengo conocimiento aceptable en el idioma inglés, en el
            manejo de programas como Photoshop, Illustrator y Premiere; de igual forma trabajo el paquete Office con gran destreza, practico escultura y animación 3D en mi tiempo libre, desarrollando mis propias historias mediante producciones personales. Me considero una persona muy responsable que no desaprovecha las oportunidades en las que pueda obtener experiencia y crecimiento tanto laboral
            como personal. </p> <br />
          <p className='formacion__text light__text'>He aprendido desarrollo FrontEnd gracias al programa Oracle Next Education y
            Alura Latam donde manejo de excelente forma HTML, CSS y JavaScript, actualmente estoy aprendiendo a utilizar la librería React JS y el Framework Angular para la construcción de proyectos más amplios.</p>
        </div>
      </div>


      <div className='container__curriculum fondo__claro'>
        <h1 className='formacion__titulo'>Experiencia laboral</h1>
        <div className='experiencia__lista__container'>
          <Experiencia titulo="Diseñador publicitario" nombreLogo="newspaper" fecha="03/2019 - 08/2019" info={publicitarioInfo} />
          <Experiencia titulo="Modelador 3D" nombreLogo="cube" fecha="12/2021 - Actual" info={modeladoInfo} />
        </div>
      </div>

      <div className='fondo__oscuro container__curriculum'>
        <h1 className='formacion__titulo light__text'>Formacion</h1>
        <div className='formacion__lista'>
          <Formacion image={unad} titulo="Ingeniería Multimedia" info="En curso - UNAD" alt="Logo UNAD" />
          <Formacion image={one} titulo="Desarrollo FrontEnd" info="2022 - Oracle Next Education" alt="Logo Alura" />
          <Formacion image={normal} titulo="Normalista Superior" info="2019 - IENSFT" alt="Logo IENSFT" />
          <Formacion image={udemy} titulo="Angular: De cero a experto" info="2022 - Udemy" alt="Logo Udemy" />
          <Formacion image={udemy} titulo="Programación en C#" info="En curso - Udemy" alt="Logo Udemy" />
          <Formacion image={udemy} titulo="Master en React" info="En curso - Udemy" alt="Logo Udemy" />
        </div>
      </div>

    </div>
  )
}
