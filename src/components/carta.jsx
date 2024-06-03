import PropTypes from 'prop-types'
import '../App.css'

function Carta ({ imagen, nombre, precio, descripcion }) {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <img src={imagen} alt={nombre} className='w-full md:w-1/2 h-40 md:h-auto object-cover' />
        <div className='flex flex-col justify-between py-4 md:w-1/2 md:pl-4'>
          <div>
            <div className='text-2xl md:text-3xl font-bold text-red-700'>{nombre}</div>
            <p className='text-start text-lg md:text-xl clamp-3'>{descripcion}</p>
          </div>
          <div className='text-2xl md:text-3xl font-bold text-red-700'>{precio}MXN</div>
        </div>
      </div>
    </>
  )
}

Carta.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired
}

export default Carta
