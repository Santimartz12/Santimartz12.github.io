import React from 'react'
import { Logos } from './Logos';
import { useTranslation } from 'react-i18next';


export const Trabajo = ({ trabajo }) => {

    const { t } = useTranslation();

    return (
        <article className={`trabajo__item`} key={trabajo.id}>
            <div className='trabajo__icons__container'>
                {trabajo.lenguajes.map(lenguaje => {
                    const logoname = `logo-${lenguaje}`;
                    return (<div key={lenguaje} className="trabajo__icon"><Logos size="30px" colorLogo="white" logo={logoname} /></div>)
                })}
            </div>
            <h2 className='trabajo__titulo light__text'>{trabajo.nombre}</h2>

            <img alt={trabajo.nombre} className='trabajo__image' src={trabajo.img} />

            <div className='trabajo__button__link'>
                <a className='buttons__style btn__3' href={trabajo.urlDemo} rel="noreferrer" target="_blank">{t('viewDemo')}</a>
                <a className='buttons__style btn__2' href={trabajo.urlRepo} rel="noreferrer" target="_blank">{t('repository')}</a>
            </div>
        </article>
    )
}


// `../resources/trabajos/${trabajo.id}.webp`