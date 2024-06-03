import Separador from './separador'

function Info () {
  return (
    <div className='relative h-[80vh] w-full my-8'>
      <img src='./src/img/fondo.jpeg' alt='' className='absolute object-cover w-full h-full' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <Separador titulo='¿Por qué nosotros?' subtitulo='Nuestras cifras hablan por sí solas' />
        <div className='flex flex-row w-full px-10 py-8'>
          <div className='w-1/3 text-center'>
            <h1 className='text-center font-bold font-poppins text-4xl text-red-700'>98%</h1>
            <p className='font-nunito text-2xl text-center px-16'>de nuestros clientes estan satisfechos</p>
          </div>
          <div className='w-1/3 text-center'>
            <h1 className='text-center font-bold font-poppins text-4xl text-red-700'>23 años</h1>
            <p className='font-nunito text-2xl text-center px-16'>de experiencia en el sector de la restauración</p>
          </div>
          <div className='w-1/3 text-center'>
            <h1 className='text-center font-bold font-poppins text-4xl text-red-700'>684</h1>
            <p className='font-nunito text-2xl text-center px-16'>eventos realizados con vosotros</p>
          </div>
        </div>
        <div className='gap-8 flex justify-center py-8'>
          <div>
            <button className='bg-red-700 text-center text-white rounded-full h-[45px] w-[230px] text-base font-nunito'>Reservar ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
