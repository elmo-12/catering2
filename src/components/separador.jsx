import PropTypes from 'prop-types'

function Separador ({ titulo, subtitulo }) {
  return (
    <>
      <div className='py-8  text-center'>
        <h1 className='text-red-700 font-bold text-4xl font-poppins pb-4'> - {titulo} - </h1>
        <h2 className='text-2xl font-nunito font-bold'> | {subtitulo} | </h2>
      </div>
    </>
  )
}

Separador.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

export default Separador
