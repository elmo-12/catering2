// Importamos los módulos y componentes necesarios
import '.././App.css'
import React, { useState, useEffect } from 'react'
import Principal2 from '.././components/principal2' // Importamos el componente Principal2
import Separador from '.././components/separador' // Importamos el componente Separador
import Carta2 from '.././components/carta2' // Importamos el componente Carta2
import Opciones from '.././components/opciones' // Importamos el componente Opciones
import Info from '.././components/info' // Importamos el componente Info
import Galeria from '.././components/galeria' // Importamos el componente Galeria
import { fetchCartas } from '../utils/fecth'

// Definimos el componente Inicio
function Inicio () {
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
      <Principal2 />
      <Separador titulo='Nuestros platillos actuales' subtitulo='Preparados a la carta' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 mx-8'>
        {/* Mapeamos las cartas y renderizamos un componente Carta2 para cada una */}
        {cartas.slice(0, 6).map((carta) => (
          <MemoizedCarta2
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

// Usamos React.memo para evitar renderizados innecesarios del componente Carta2
const MemoizedCarta2 = React.memo(Carta2)

// Exportamos el componente Inicio
export default Inicio
