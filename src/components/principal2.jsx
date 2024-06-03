import React from 'react'
import Opciones from './opciones'

const Principal2 = () => {
  return (
    <div className='relative w-[100%] h-[100vh]'>
      {/* Imagen de fondo que ocupa todo el ancho y alto de la pantalla */}
      <img
        src='src/img/principal.jpg'
        alt='Imagen de fondo'
        className='absolute inset-0 w-full h-full object-cover'
      />
      {/* Div cuadrado situado a la derecha y centrado verticalmente */}
      <div className='absolute right-0 h-full flex justify-end items-center'>
        <div className='text-center w-3/5 m-8'>
          {/* Contenido del div */}
          <h1 className='text-red-700 font-poppins font-bold text-5xl mb-4'>Servicio de catering</h1>
          <p className='font-nunito text-3xl'>Descubre los sabores únicos y deliciosos de nuestro servicio de catering, donde los ingredientes de calidad y la creatividad culinaria se unen para cada ocasión.</p>
          <Opciones />
        </div>
      </div>
    </div>
  )
}

export default Principal2
