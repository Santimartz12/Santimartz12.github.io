import React from 'react'
import { Logos } from './Logos'

export const Experiencia = (props) => {

    //titulo nombreLogo fecha

    return (
        <>
            <div className='container__elements'>
                <div className='experiencia__contenedor'>
                    <p className='info__exp_texto'>{props.info}</p>
                </div>
                <div className='experiencia__contenedor__info'>
                    <h2 className='experiencia__titulo'>{props.titulo}</h2>
                    <Logos size='90px' colorLogo="#F5F5F5" logo={props.nombreLogo} />
                    <p className='experiencia__info'>{props.fecha}</p>
                </div>
            </div>
            <div className='espacio'></div>
        </>
    )
}

export const Formacion = (props) => {
    return (
        <div className='formacion__contenedor'>
            <div className="formacion__item">
                <img alt={props.alt} src={props.image} className="formacion__lista__imagen" />
            </div>
            <h3 className='formacion__lista__nombre'>{props.titulo}</h3>
            <p className='formacion__lista__fecha'>{props.info}</p>

        </div>
    )
}



