import React from 'react'

const Mapa = () => {
  return (
    <div className='w-full h-[40vh] my-8'>
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
  )
}

export default Mapa
