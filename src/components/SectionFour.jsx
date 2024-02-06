import React, { useState } from 'react'
import foto2 from '../assets/img/sv-foto2.jpeg'
import foto3 from '../assets/img/sv-foto3.jpg'
import foto4 from '../assets/img/sv-foto4.jpg'
import foto5 from '../assets/img/sv-foto5.jpg'
import foto6 from '../assets/img/sv-foto6.jpg'
import { PlayPauseIcon  } from "@heroicons/react/24/outline";

const fotos = [foto2, foto3, foto4, foto5, foto6, foto2, foto3, foto4, foto5, foto6]

const SectionFour = () => {

  const [play, setPlay] = useState(true)


  return (
    <div className='h-screen pt-36 flex flex-col items-center gap-20 overflow-hidden'>
      <div className='flex items-center gap-4'>
      <h2 className='text-3xl font-semibold text-azulServe'>NUESTROS TRABAJOS  </h2>
      <PlayPauseIcon onClick={()=> play? setPlay(false) : setPlay(true)}  className="w-11 text-white bg-pink-700 rounded px-2 shadow-lg hover:shadow-sm active:bg-pink-800 cursor-pointer" /> 

      </div>
      <div className='slider'>
        <div className='slide-track' style={{ animationPlayState: play ? 'running' : 'paused' }} >
          {
            fotos.map((foto, i) => (
              <figure key={i} className='slide '>
                <img src={foto} alt="foto de personal de la empresa trabajando" className='h-full w-full object-cover shadow rounded-sm hover:shadow-lg' />
              </figure>
            ))
          }
        </div>


      </div>

    </div>
  )
}

export default SectionFour