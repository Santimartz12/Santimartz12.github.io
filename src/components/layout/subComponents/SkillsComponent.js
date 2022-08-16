import React from 'react'
import { Logos } from './Logos'

export const HardSkills = ({titulo,nameLogo}) => {
    return (
        <div className='hard__skills__item'>
            <Logos logo={nameLogo} size="60px" colorLogo="white" estilo="hard__skill__img"/>
            <h3 className='skill__nombre light__text'>{titulo}</h3>
        </div>
    )
}

export const SoftSkills = ({titulo,nameLogo}) => {
    return (
        <div className='soft__skills__item'>
            <Logos logo={nameLogo} size="60px" colorLogo="black" estilo="hard__skill__img"/>
            <h3 className='skill__nombre dark__text'>{titulo}</h3>
        </div>
    )
}
