import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaSearch, FaTimes } from 'react-icons/fa'

const images = [
  './src/img/image1.jpeg', './src/img/image2.jpeg', './src/img/image3.jpeg', './src/img/image4.jpeg',
  './src/img/image5.jpeg', './src/img/image6.jpeg', './src/img/image7.jpeg', './src/img/image8.jpeg'
]

Modal.setAppElement('#root') // Set the app root for accessibility

const Galeria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const openModal = (image) => {
    setSelectedImage(image)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedImage('')
  }

  return (
    <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {images.map((image, index) => (
        <div key={index} className='relative group'>
          <img src={image} alt={`Gallery ${index}`} className='w-full h-full object-cover' />
          <div
            className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
            onClick={() => openModal(image)}
          >
            <FaSearch className='text-white text-3xl' />
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        className='flex items-center justify-center'
        overlayClassName='fixed inset-0 bg-black bg-opacity-75'
      >
        <div className='bg-white p-4 rounded shadow-lg overflow-hidden relative' style={{ width: '90%', height: '100vh' }}>
          <FaTimes className='absolute top-0 right-0 m-4 text-gray-600 cursor-pointer' size={24} onClick={closeModal} />
          <img src={selectedImage} alt='Selected' className='w-full h-full object-contain' />
        </div>
      </Modal>
    </div>
  )
}

export default Galeria
