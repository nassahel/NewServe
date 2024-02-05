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
    <div className={`h-20 ${ color ? 'bg-white shadow-md' : 'gra' } duration-300 lg:flex justify-between items-center pl-6 fixed left-0 right-0 top-0 hidden  z-50`}>
      <a href="#" className='h-full flex items-center'>
        <h1 className={` ${ color ? 'text-2xl' : 'text-4xl' } text-blue-800 duration-300 font-semibold `}><span className='text-pink-800'>SERVE</span>MASTER S.A.S</h1>
      </a>
      <div className={`flex h-full text-xl mr-14 font-semibold ${color ? 'text-azulServe' : 'text-azulServe'}`}>
        <a className='nav-btn' href="#">Home</a>
        <a className='nav-btn' href="#sectionTwo">Servicios</a>
        <a className='nav-btn' href="#sectionFive">Contacto</a>
      </div>

    </div>
  )
}

export default Nav