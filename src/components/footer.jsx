import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { BiMessageAltDetail } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-red-200/50 text-white py-8 px-4 md:px-16'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-full md:w-1/2 lg:w-[25%] mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2 text-red-700 font-poppins'>Acerca de nosotros</h2>
          <p className='text-black font-nunito'>Para reforzar el compromiso con la calidad y la satisfacción del cliente, nuestro servicio de catering se compromete a utilizar ingredientes frescos y de primera calidad en la preparación de cada plato.</p>
          <div className='flex space-x-2 pt-4'>
            <a href='https://www.facebook.com' className='text-black hover:text-red-700' target='_blank' rel='noreferrer'>
              <FaFacebook className='text-2xl' />
            </a>
            <a href='https://www.instagram.com' className='text-black hover:text-red-700' target='_blank' rel='noreferrer'>
              <FaInstagram className='text-2xl ml-2' />
            </a>
            <a href='https://www.twitter.com' className='text-black hover:text-red-700' target='_blank' rel='noreferrer'>
              <FaTwitter className='text-2xl ml-2' />
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-[20%] mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2 text-red-700 font-poppins'>Especialidades</h2>
          <div className=''>
            <div className='flex items-center'>
              <FaArrowRight className='inline-block mr-2 text-red-700' />
              <p className='text-black font-nunito'>Pasta fresca</p>
            </div>
            <div className='flex items-center'>
              <FaArrowRight className='inline-block mr-2 text-red-700' />
              <p className='text-black font-nunito'>Lasaña</p>
            </div>
            <div className='flex items-center'>
              <FaArrowRight className='inline-block mr-2 text-red-700' />
              <p className='text-black font-nunito'>Bistec</p>
            </div>
            <div className='flex items-center'>
              <FaArrowRight className='inline-block mr-2 text-red-700' />
              <p className='text-black font-nunito'>Maki</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-[25%] mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2 text-red-700 font-poppins'>Contactarnos</h2>
          <div className='flex md:flex-col'>
            <div className='flex items-center w-1/2'>
              <FaMapMarkerAlt className='inline-block mr-4 text-red-700 text-3xl' />
              <div>
                <p className='text-black font-nunito'>Dirección</p>
                <p className='text-black font-nunito'>Av. Lema, 52172 Metepec</p>
              </div>
            </div>
            <div className='flex items-center w-1/2'>
              <FaPhoneAlt className='inline-block mr-4 text-red-700 text-3xl' />
              <div>
                <p className='text-black font-nunito'>Teléfono</p>
                <p className='text-red-700 font-nunito'>00-00-00-00-00</p>
              </div>
            </div>
            <div className='flex items-center w-1/2'>
              <BiMessageAltDetail className='inline-block mr-4 text-red-700 text-3xl' />
              <div>
                <p className='text-black font-nunito'>Correo electrónico</p>
                <p className='text-red-700 font-nunito'>serviciodecatering@correo.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-[25%] mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2 text-red-700 font-poppins'>Ubicarnos</h2>
          <div id='map' className='h-32 md:h-36 bg-gray-600'>
            <div className='w-full h-full'>
              <iframe
                title='Google Mapa'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5427.003616686646!2d-79.0266679882965!3d-8.109881202867372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d87186eba2f%3A0xa846105cd15bab01!2sPlaza%20Mayor%20de%20Trujillo!5e0!3m2!1ses!2spe!4v1717363787076!5m2!1ses!2spe'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
