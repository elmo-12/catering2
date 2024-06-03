import PropTypes from 'prop-types'

function InformacionContacto ({ Icono, titulo, contenido }) {
  return (
    <div className='flex justify-center flex-col items-center'>
      <Icono className='text-4xl text-red-700' />
      <h1 className='font-poppins text-lg font-bold'>{titulo}</h1>
      <p className='font-nunito text-base  text-red-700'>{contenido}</p>
    </div>
  )
}

InformacionContacto.propTypes = {
  Icono: PropTypes.elementType.isRequired,
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired
}

export default InformacionContacto
