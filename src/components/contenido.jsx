function Contenido () {
  return (
    <div className='my-8 flex mx-8'>
      <div className='w-1/2 h-[90vh]'>
        <img src='./src/img/nosotros.jpeg' alt='' className='h-full w-full object-cover' />
      </div>
      <div className='w-1/2 px-8 flex flex-col justify-center'>
        <h1 className='font-bold text-red-700 text-2xl font-poppins'>Una herencia culinaria de generación en generación</h1>
        <p className='font-nunito text-lg mb-8'>
          Desde su fundación hace varias décadas, nuestra empresa se ha dedicado a perpetuar tradiciones culinarias ofreciendo una cocina auténtica y de calidad. Esta empresa familiar fue creada por entusiastas de la gastronomía que han transmitido sus conocimientos culinarios de generación en generación.
        </p>
        <h1 className='font-bold text-red-700 text-2xl font-poppins'>Nuestros valores: Calidad, Tradición, Pasión</h1>
        <p className='font-nunito text-lg'>
          En nuestra empresa, la calidad está en el centro de todo lo que hacemos. Trabajamos con los mejores proveedores locales para garantizar la frescura y calidad de sus ingredientes. También perpetuamos tradiciones culinarias ofreciendo una cocina auténtica y deliciosa. Por último, nuestra pasión por la gastronomía es lo que nos impulsa a dar lo mejor de nosotros mismos en cada comida que preparamos. Nuestros clientes pueden estar seguros de disfrutar siempre de una experiencia culinaria de primera clase.
        </p>
      </div>
    </div>
  )
}

export default Contenido
