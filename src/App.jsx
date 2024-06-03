import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './vistas/inicio'
import Navbar from './components/navbar'
import Menu from './vistas/menu'
import Footer from './components/footer'
import Nosotros from './vistas/nosotros'
import Contactarnos from './vistas/contactarnos'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactarnos' element={<Contactarnos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
