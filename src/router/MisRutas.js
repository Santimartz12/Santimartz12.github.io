import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Contacto } from '../components/Contacto'
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Skills } from '../components/Skills'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

import { Error404 } from '../components/Error'
import { Proyecto } from '../components/Proyecto'

export const MisRutas = () => {
  return (
    <BrowserRouter>

      {/*Header y navegacion*/}
      <Header />


      {/*Contenido central*/}
      <Routes>
        <Route path='/' element={<Navigate to="/inicio" />} />
        <Route path='/portafolio-react' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/portafolio/:proyecto' element={<Proyecto />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>


      {/*Footer*/}
      <Footer />

    </BrowserRouter>
  )
}
