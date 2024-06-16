import React from 'react'
import { Link } from 'react-router-dom'

function Opciones () {
  return (
    <div className='gap-8 flex justify-center py-8'>
      <div>
        <button className='bg-red-700 text-center text-white rounded-full h-[45px] w-[230px] text-base font-nunito'><Link to='/contactarnos'>Reservar ahora</Link></button>
      </div>
      <div>
        <button className='bg-black text-center text-white rounded-full h-[45px] w-[230px] text-base font-nunito'>Saber más</button>
      </div>
    </div>
  )
}

export default Opciones
