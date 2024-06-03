// src/components/Navbar.jsx
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const linkClasses = (path) => {
    return location.pathname === path ? 'text-red-700' : 'text-black'
  }

  return (
    <nav className='bg-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src='src/img/logo.svg' alt='Logo' className='h-12 w-12 mr-2' />
        </div>
        <div className='hidden md:flex space-x-8'>
          <Link to='/' className={`text-lg ${linkClasses('/')} font-nunito`}>Inicio</Link>
          <Link to='/menu' className={`text-lg ${linkClasses('/menu')} font-nunito`}>Nuestro menú</Link>
          <Link to='/nosotros' className={`text-lg ${linkClasses('/nosotros')} font-nunito`}>Acerca de nosotros</Link>
          <Link to='/contactarnos' className={`text-lg ${linkClasses('/contactarnos')} font-nunito`}>Contactarnos</Link>
        </div>
        <div className='hidden md:block'>
          <button className='bg-red-700 text-center text-white rounded-full h-[45px] w-[160px] text-base font-nunito'>
            Contáctanos
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-black focus:outline-none'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden flex flex-col items-center'>
          <Link to='/' className={`block text-lg ${linkClasses('/')} px-4 py-2 font-nunito`}>Inicio</Link>
          <Link to='/menu' className={`block text-lg ${linkClasses('/menu')} px-4 py-2 font-nunito`}>Nuestro menú</Link>
          <Link to='/nosotros' className={`block text-lg ${linkClasses('/nosotros')} px-4 py-2 font-nunito`}>Acerca de nosotros</Link>
          <Link to='/contactarnos' className={`block text-lg ${linkClasses('/contactarnos')} px-4 py-2 font-nunito`}>Contactarnos</Link>
          <button className='bg-red-700 text-white w-3/4 px-4 py-2 rounded-full'>
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
