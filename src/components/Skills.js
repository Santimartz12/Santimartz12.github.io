import React from 'react'
import { HardSkills, SoftSkills } from './layout/subComponents/SkillsComponent'

export const Skills = () => {

  return (
    <div className='page'>

      <div className='skills'>
        <section className='hard__skills__section'>
          <div className='light__container'>
            <h2 className='skills__titulo'>Hard skills</h2>

            <div className='skills__container'>
              <HardSkills titulo="HTML" nameLogo="logo-html5" />
              <HardSkills titulo="CSS" nameLogo="logo-css3" />
              <HardSkills titulo="JavaScript" nameLogo="logo-javascript" />
              <HardSkills titulo="React JS" nameLogo="logo-react" />
              <HardSkills titulo="Git" nameLogo="git-branch-outline" />
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
