import React from 'react'
import budeger from '../assets/img/budeger.png'
import santista from '../assets/img/santista.png'
import laPapelera from '../assets/img/la-papelera.png'
import fondoS3 from '../assets/img/fondos3.jpg'
import { motion } from 'framer-motion'

const SectionTree = () => {
  return (
    <div className='flex items-center justify-center py-20 lg:py-40 relative overflow-hidden '>
      <img src={fondoS3} alt="" className='-z-10 object-cover absolute brightness-75 h-full w-full' />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .3, delay: .2 }}
        viewport={{ once: true }}

        className='bg-neutral-100 flex flex-col items-center justify-center w-11/12 lg:w-10/12 rounded py-20 lg:px-20 shadow-mg'>
        <div className='text-3xl font-semibold mb-20 text-azulServe text-center'>
          <h2>NUESTROS CLIENTES</h2>
        </div>
        <div className='w-full flex flex-col lg:flex-row items-center justify-evenly gap-10'>
          <figure className='flex bg-white items-center justify-center shadow-lg rounded hover:shadow-md duration-200  w-80 p-6 h-64'>
            <img className='w-full' src={santista} alt="logo empresa Santista" />
          </figure>
          <figure className='flex bg-white items-center justify-center shadow-lg rounded hover:shadow-md duration-200 w-80 p-6 h-64'>
            <img className='w-full' src={laPapelera} alt="logo empresa La Papelera" />
          </figure>
          <figure className='flex bg-white items-center justify-center shadow-lg rounded hover:shadow-md duration-200 w-80 p-6 h-64'>
            <img className='w-full' src={budeger} alt="logo Budeguer" />
          </figure>
        </div>


      </motion.div>


    </div>
  )
}

export default SectionTree