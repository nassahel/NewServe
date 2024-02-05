import React, { useState } from 'react'

const Nav = () => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)

    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <div className='hidden md:block'>
      <div className='text-white bg-blue-950 text-end px-4 py-0.5'>
        Tel: 3865-607676  - 3865-252015 - servemastersas@gmail.com
      </div>

      <div className={`h-20 ${color ? 'bg-white shadow-md top-0' : 'gra top-7'} duration-200 lg:flex justify-between items-center pl-6 fixed left-0 right-0  hidden z-50`}>
        <a href="#" className='h-full flex items-center'>
          <h1 className={` ${color ? 'text-2xl' : 'text-4xl'} text-blue-800 duration-300 font-semibold `}><span className='text-pink-800'>SERVE</span>MASTER S.A.S</h1>
        </a>
        <div className={`flex h-full text-xl mr-14 font-semibold ${color ? 'text-azulServe' : 'text-azulServe'}`}>
          <a className='nav-btn' href="#">Home</a>
          <a className='nav-btn' href="#sectionTwo">Servicios</a>
          <a className='nav-btn' href="#sectionFive">Contacto</a>
        </div>
      </div>
    </div>
  )
}

export default Nav