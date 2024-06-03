import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2  bg-opacity-50 text-white z-10'
    aria-label='Previous Slide'
  >
    <FaChevronLeft className='text-5xl font-bold' />
  </button>
)

// eslint-disable-next-line react/prop-types
const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-opacity-50 text-white z-10'
    aria-label='Next Slide'
  >
    <FaChevronRight className='text-5xl font-bold' />
  </button>
)

const SSlider = () => {
  const [opiniones, setopiniones] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('src/info/opiniones.json')
      setopiniones(result.data.opiniones)
    }

    fetchData()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />
  }

  return (
    <div className='relative'>
      <Slider {...settings}>
        {opiniones.map((opinion, index) => (
          <div key={index}>
            <div className='relative'>
              <img src={opinion.img} alt={opinion.autor} className='w-full h-48 sm:h-64 md:h-96 object-cover' />
              <div className='absolute bottom-0 mx-4 sm:mx-8 md:mx-16 mb-2 sm:mb-3 md:mb-4 bg-gray-800 bg-opacity-50 text-white text-center p-2'>
                <h1 className='text-xl sm:text-2xl'>{opinion.autor}</h1>
                <p className='text-sm sm:text-base'>{opinion.contenido}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SSlider
