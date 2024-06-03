import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './vistas/inicio'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Menu from './vistas/menu'
import Footer from './components/footer'
import Nosotros from './vistas/nosotros'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactarnos' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
