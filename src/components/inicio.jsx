import '.././App.css'
import React, { useState, useEffect } from 'react'
import Separador from './separador'
import Carta2 from './carta2'
import axios from 'axios'
import Opciones from './opciones'
import Info from './info'
import Galeria from './galeria'
import Principal2 from './principal2'

function Inicio () {
  const [cartas, setCartas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('src/info/cartas.json')
      setCartas(result.data.cartas)
    }

    fetchData()
  }, [])

  return (
    <>
      <Principal2 />
      <Separador titulo='Nuestros platillos actuales' subtitulo='Preparados a la carta' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8'>
        {cartas.slice(0, 6).map((carta) => (
          <Carta2
            key={carta.nombre}
            imagen={carta.imagen}
            nombre={carta.nombre}
            precio={carta.precio}
            informacion={carta.informacion}
          />
        ))}
      </div>
      <Opciones />
      <Info />
      <Separador titulo='Nuestro equipo' subtitulo='Profesionales con más de 15 años de experiencia' />
      <Galeria />
      <Opciones />
      <Separador titulo='Noticias' subtitulo='Ya puedes utilizar nuestra aplicación de reservas' />
      <div className='flex justify-center p-8'><img src='./src/img/google.png' alt='' className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[20%]' /></div>
    </>
  )
}

export default Inicio
