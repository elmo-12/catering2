import PropTypes from 'prop-types'
import '../App.css'

function Carta2 ({ imagen, nombre, precio, informacion }) {
  return (
    <>
      <div className='flex flex-col'>
        <img src={imagen} alt={nombre} className='w-full h-60 object-cover' />
        <div className='flex flex-col py-4 md:pl-4'>
          <div>
            <div className='text-2xl md:text-3xl font-bold text-red-700 text-center font-poppins'>{nombre}</div>
            <div className='text-xl md:text-2xl text-black text-center font-nunito'>{precio}MXN</div>
            <div className='text-xl md:text-2xl text-black text-center font-nunito'>{informacion}</div>
          </div>
        </div>
      </div>
    </>
  )
}

Carta2.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  informacion: PropTypes.string.isRequired
}

export default Carta2
