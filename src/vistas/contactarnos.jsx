// Importamos los componentes y módulos necesarios
import React from 'react'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { BiMessageAltDetail } from 'react-icons/bi'
import { CiMap } from 'react-icons/ci'
import Principal from '../components/principal'
import InformacionContacto from '../components/informacionContacto'
import Separador from '../components/separador'
import Mapa from '../components/mapa'

// Definimos el componente Contactarnos
function Contactarnos () {
  // Renderizamos el componente
  return (
    <>
      <Principal mensaje='¡Contáctanos!' /> {/* Componente Principal con un mensaje */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4'>
        {/* Componente InformacionContacto con un icono, un título y un contenido */}
        <InformacionContacto Icono={MdOutlinePhoneAndroid} titulo='Llámanos' contenido='00.00.00.00.00' />
        {/* Componente InformacionContacto con un icono, un título y un contenido */}
        <InformacionContacto Icono={BiMessageAltDetail} titulo='Envíanos un correo electrónico' contenido='serviciodecatering@correo.com' />
        {/* Componente InformacionContacto con un icono, un título y un contenido */}
        <InformacionContacto Icono={CiMap} titulo='Visítanos' contenido='Av. Lema, Metepec' />
      </div>
      {/* Componente Separador con un título y un subtítulo */}
      <Separador titulo='Visita nuestros locales' subtitulo='Ven a discutir con nosotros las comidas para tus futuros eventos' />
      <Mapa /> {/* Componente Mapa */}
    </>
  )
}

// Exportamos el componente Contactarnos
export default Contactarnos
