import React from 'react'
import { HardSkills, SoftSkills } from './layout/subComponents/SkillsComponent'

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
              <HardSkills titulo="CSS" nameLogo="logo-css3" porcentaje="70"/>
              <HardSkills titulo="JavaScript" nameLogo="logo-javascript" porcentaje="70"/>
              <HardSkills titulo="Git" nameLogo="git-branch-outline" porcentaje="30"/>
              <HardSkills titulo="React JS" nameLogo="logo-react" porcentaje="50"/>
              <HardSkills titulo="Angular" nameLogo="logo-angular" porcentaje="40"/>
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
