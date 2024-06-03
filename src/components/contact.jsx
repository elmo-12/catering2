import Principal from './principal'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { BiMessageAltDetail } from 'react-icons/bi'
import { CiMap } from 'react-icons/ci'
import Separador from './separador'
import Mapa from './mapa'

function Contact () {
  return (
    <>
      <Principal
        mensaje='¡Contáctanos!'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4'>
        <div className='flex justify-center flex-col items-center'>
          <MdOutlinePhoneAndroid className='text-4xl text-red-700' />
          <h1 className='font-poppins text-lg font-bold'>Llámanos</h1>
          <p className='font-nunito text-base  text-red-700'>00.00.00.00.00</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <BiMessageAltDetail className='text-4xl text-red-700' />
          <h1 className='font-poppins text-lg font-bold'>Envíanos un correo electrónico</h1>
          <p className='font-nunito text-base  text-red-700'>serviciodecatering@correo.com</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <CiMap className='text-4xl text-red-700' />
          <h1 className='font-poppins text-lg font-bold'>Visítanos</h1>
          <p className='font-nunito text-base  text-red-700'>Av. Lema, Metepec</p>
        </div>
      </div>
      <Separador titulo='Visita nuestros locales' subtitulo='Ven a discutir con nosotros las comidas para tus futuros eventos' />
      <Mapa />
    </>
  )
}

export default Contact
