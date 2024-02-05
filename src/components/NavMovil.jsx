import { motion } from 'framer-motion'
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from 'react';


const NavMovil = () => {

  const [sideBar, setSidebar] = useState(false)



  return (
    <motion.nav

      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
      viewport={{ once: true }}
      className='fixed w-full items-center h-14 shadow-md bg-white z-50 lg:hidden'>
      <div className='flex items-center h-full justify-between px-3'>
        <Bars3Icon onClick={() => setSidebar(true)} className={` ${sideBar && "hidden"} h-10 w-10 text-pink-700 cursor-pointer`} />
        <a href='#' className='text-2xl text-azulServe inline'><span className='text-rojoServe'>SERVE</span>MASTER</a>
      </div>

      <div className={`${sideBar ? "w-full" : "w-0"} duration-300 fixed top-0 bottom-0 left-0 right-0 gap-4 bg-white flex flex-col overflow-hidden h-screen`}>
        <button onClick={() => setSidebar(false)} className='block ml-auto mr-2 mt-2'><XMarkIcon className="h-8 w-8 text-[#08213f] hover:text-pink-500 duration-200" /></button>
        <a onClick={() => setSidebar(false)} href='#' className='nav-mov'>HOME</a>
        <a onClick={() => setSidebar(false)} href='#sectionTwo' className='nav-mov'>NOSOTROS</a>
        <a onClick={() => setSidebar(false)} href='#sectionTree' className='nav-mov'>SERVICIOS</a>
        <a onClick={() => setSidebar(false)} href='#sectionFour' className='nav-mov'>CONTÁCTO</a>
        <div className='text-center mt-auto'>
        <a href='#' className='text-2xl text-azulServe inline truncate'><span className='text-rojoServe'>SERVE</span>MASTER</a>

        </div>
        <div className='text-white bg-blue-950 text-center px-4 py-0.5 mt-auto truncate'>
        Tel: 3865-607676 | 3865-252015
      </div>
      </div>
    </motion.nav>

  )
}

export default NavMovil