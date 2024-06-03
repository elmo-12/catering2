import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '.././App.css'
import Carta from './carta'
import Separador from './separador'
import Principal from './principal'
import Opciones from './opciones'

function Menu () {
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
      <Principal
        mensaje='Nuestro menú'
      />
      <Separador
        titulo='Nuestro menú'
        subtitulo='Preparado a la carta'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8'>
        {cartas.slice(0, 6).map((carta) => (
          <Carta
            key={carta.nombre}
            imagen={carta.imagen}
            nombre={carta.nombre}
            precio={carta.precio}
            descripcion={carta.descripcion}
          />
        ))}
      </div>
      <Opciones />
      <Separador
        titulo='¿No encuentras lo que quieres?'
        subtitulo='Contáctanos para crear tus platillos a la carta'
      />
    </>
  )
}

export default Menu
