import React from 'react'
import { HardSkills, SoftSkills } from './layout/subComponents/SkillsComponent'


//Logos para importar mientras se actualiza ionicons
import logoCsharp from "../resources/images/csharp.svg";
import logoJava from "../resources/images/Java.svg";
import logoIllustrator from "../resources/images/Illustrator.svg";
import logoPhotoshop from "../resources/images/Photoshop.svg";
import logoPremiere from "../resources/images/Premiere.svg";
import logoBlender from "../resources/images/Blender.svg";

export const Skills = () => {

  //    En hardSkills faltan:
  //    Photoshop - Illustrator - Blender - C# - Java - TypeScript

  return (
    <div className='page'>

      <div className='skills'>
        <section className='hard__skills__section'>
          <div className='light__container'>
            <h2 className='skills__titulo'>Hard skills</h2>

            <div className='skills__container'>
              <HardSkills titulo="HTML" nameLogo="logo-html5" porcentaje="90"/>
              <HardSkills titulo="CSS" nameLogo="logo-css3" porcentaje="80"/>
              <HardSkills titulo="JavaScript" nameLogo="logo-javascript" porcentaje="70"/>
              <HardSkills titulo="Git" nameLogo="git-branch-outline" porcentaje="100"/>
              <HardSkills titulo="React JS" nameLogo="logo-react" porcentaje="50"/>
              <HardSkills titulo="Angular" nameLogo="logo-angular" porcentaje="80"/>
              <HardSkills titulo="C#" nameLogo={logoCsharp} porcentaje="50"/>
              <HardSkills titulo="Java" nameLogo={logoJava} porcentaje="60"/>
              <HardSkills titulo="Photoshop" nameLogo={logoPhotoshop} porcentaje="100"/>
              <HardSkills titulo="Illustrator" nameLogo={logoIllustrator} porcentaje="80"/>
              <HardSkills titulo="Premiere" nameLogo={logoPremiere} porcentaje="80"/>
              <HardSkills titulo="Blender" nameLogo={logoBlender} porcentaje="70"/>
            </div>
          </div>

          <div className='dark__container'>
            <h2 className='skills__titulo light__text'>Soft skills</h2>
            <div className='skills__container'>
              <SoftSkills titulo="Trabajo en equipo" nameLogo="people-outline" />
              <SoftSkills titulo="Creatividad" nameLogo="bulb-outline" />
              <SoftSkills titulo="Aprendizaje constante" nameLogo="school-outline" />
              <SoftSkills titulo="Actitud positiva" nameLogo="happy-outline" />
              <SoftSkills titulo="Autonomía" nameLogo="man-outline" />
              <SoftSkills titulo="Adaptabilidad" nameLogo="shuffle-outline" />
            </div>
          </div>

        </section>
      </div>

    </div>

  )
}
