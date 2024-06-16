// Importamos los módulos y componentes necesarios
import React, { useState, useEffect } from 'react'
import '.././App.css'
import Carta from '../components/carta'
import Separador from '../components/separador'
import Principal from '../components/principal'
import Opciones from '../components/opciones'
import { fetchCartas } from '../utils/fecth'

// Definimos el componente Menu
function Menu () {
  // Definimos el estado para las cartas
  const [cartas, setCartas] = useState([])

  // Usamos useEffect para realizar la solicitud de datos cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const cartas = await fetchCartas() // Usamos la función fetchCartas para obtener los datos
      setCartas(cartas) // Actualizamos el estado con los datos obtenidos
    }

    fetchData() // Llamamos a la función fetchData
  }, []) // Pasamos un array vacío como segundo argumento para que useEffect solo se ejecute una vez

  // Renderizamos el componente
  return (
    <>
      <Principal
        mensaje='Nuestro menú'
      />
      <Separador
        titulo='Nuestro menú'
        subtitulo='Preparado a la carta'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-8 px-8'>
        {/* Mapeamos las cartas y renderizamos un componente Carta para cada una */}
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

// Exportamos el componente Menu
export default Menu
