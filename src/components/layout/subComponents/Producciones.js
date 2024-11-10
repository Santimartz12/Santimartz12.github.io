import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const Producciones = ({produccion}) => {
    const {t} = useTranslation();

    return (
        <NavLink className="links producciones" to={produccion.urlPage} key={produccion.id}>
                <div className='produccion__container'>
                    <h3 className='titulo__producciones'>{produccion.titulo}</h3>
                    <img className='img__producciones' alt={produccion.titulo} src={produccion.image} />
                    <p className='descripcion__producciones'>{t(produccion.presentacion)}</p>
                </div>
        </NavLink>

    )
}
