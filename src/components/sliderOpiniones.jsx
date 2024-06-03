import React from 'react'
import PropTypes from 'prop-types'

function SliderOpiniones ({ autor, contenido }) {
  return (
    <div className='text-center text-white px-16'>
      <div className='bg-black bg-opacity-50 p-4 grid items-center'>
        <p className='text-3xl'>{autor}</p>
        <p className='text-md'>{contenido}</p>
      </div>
    </div>
  )
}

SliderOpiniones.propTypes = {
  autor: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired
}

export default SliderOpiniones
