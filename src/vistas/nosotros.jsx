// Importamos los componentes necesarios
import Contenido from '../components/contenido'
import Opciones from '../components/opciones'
import Principal from '../components/principal'
import Separador from '../components/separador'
import SSlider from '../components/slider'

// Definimos el componente Nosotros
function Nosotros () {
  // Renderizamos el componente
  return (
    <>
      <Principal mensaje='¿Quiénes somos?' /> {/* Componente Principal con un mensaje */}
      <Separador titulo='Nuestra historia' subtitulo='Más que un trabajo, una pasión' /> {/* Componente Separador con un título y un subtítulo */}
      <Contenido /> {/* Componente Contenido */}
      <Separador
        titulo='Las opiniones de nuestros clientes'
        subtitulo='Tus comentarios son importantes para nosotros, nos ayudan a servirte mejor'
      /> {/* Componente Separador con un título y un subtítulo */}
      <SSlider /> {/* Componente SSlider */}
      <Opciones /> {/* Componente Opciones */}
    </>
  )
}

// Exportamos el componente Nosotros
export default Nosotros
