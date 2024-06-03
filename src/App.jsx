import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './components/inicio'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Menu from './components/menu'
import Nosotros from './components/nosotros'
import Footer from './components/footer'
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
