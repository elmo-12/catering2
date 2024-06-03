import PropTypes from 'prop-types'

function Principal ({ mensaje }) {
  return (
    <div className='relative h-80 w-full mb-8'>
      <img src='./src/img/principal.jpg' alt='' className='absolute object-cover object-left-top w-full h-full' />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
        <h1 className='text-red-700 font-bold text-5xl font-poppins mb-4'>Servicio de catering</h1>
        <h2 className='text-3xl font-nunito'>{mensaje}</h2>
      </div>
    </div>
  )
}

Principal.propTypes = {
  mensaje: PropTypes.string.isRequired
}

export default Principal
