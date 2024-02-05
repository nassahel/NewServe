import React from 'react'
import foto2 from '../assets/img/sv-foto2.jpeg'
import foto3 from '../assets/img/sv-foto3.jpg'
import foto4 from '../assets/img/sv-foto4.jpg'
import foto5 from '../assets/img/sv-foto5.jpg'
import foto6 from '../assets/img/sv-foto6.jpg'

const fotos = [foto2, foto3, foto4, foto5, foto6]

const SectionFour = () => {
  return (
    <div className='h-screen pt-36 flex flex-col items-center gap-20 overflow-hidden'>
      <h2 className='text-3xl font-semibold text-azulServe'>NUESTROS TRABAJOS</h2>
      <div className='flex items-center w-10/12 justify-center overflow-hidden'>
        <div className='flex scroll-anim gap-8'>
          {
          fotos.map((foto, i) => (
            <figure key={i} className='w-[40rem] h-[30rem] my-20 shadow-lg border  overflow-hidden rounded flex-shrink-0'>
              <img src={foto} alt="foto de personal de la empresa trabajando" className='h-full w-full object-cover ' />
            </figure>
          ))
        }
        </div>
        

      </div>

    </div>
  )
}

export default SectionFour