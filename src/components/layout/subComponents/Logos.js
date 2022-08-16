import React from 'react'

export const Logos = (props) => {

  //estilo size colorLogo logo

  return (
    <div className={props.estilo && props.estilo}>
      <ion-icon style={{ fontSize: props.size, color: props.colorLogo }}
        name={props.logo}></ion-icon>
    </div>
  )
}