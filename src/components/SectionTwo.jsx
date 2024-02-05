import React from 'react'
import manteAsistencia from '../assets/img/mantenimiento-asistencia.jpg'
import plc from '../assets/img/plc.jpg'
import comprInd from '../assets/img/bombas-de-agua.jpg'
import manteEdilicio from '../assets/img/mantenimiento-edilicio.jpg'
import divElectrica from '../assets/img/division-electrica.jpg'
import { ChevronDoubleRightIcon, Cog6ToothIcon, BoltIcon, CpuChipIcon, BuildingOffice2Icon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'


const SectionTwo = () => {

  return (
    <div id='sectionTwo' className='flex flex-col gap-28 py-36 bg-white  items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .3, delay: .2 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-between bg-white w-9/12 border-b pb-20'>
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-semibold flex items-center'> <Cog6ToothIcon className='w-8 mr-2' />SERVICIOS</h3>
          <ul className=''>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Neumática integral.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Electricidad industrial.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mecánica en general.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mantenimiento correctivo y preventivo de equipos industriales.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Montajes y reparaciones en general.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Montaje de instrumentos de medición, cableado y canalización.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Montaje de cañerías de aire comprimido, agua, vapor.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Aislación de cañerías.</li>
          </ul>
        </div>

        <img className='h-[25rem] w-[40rem] object-cover rounded-sm shadow-md' src={manteAsistencia} alt="imagen ilustrativa: hombre realizando mantenimiento de maquina hidrulica" />
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-between w-9/12 border-b pb-20'>
        <img className='h-[25rem] w-[40rem] rounded-sm object-cover shadow-md' src={plc} alt="imágen ilustrativa: laptop conectada a una maquina en reparación" />
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-semibold flex items-center'> <CpuChipIcon className='w-8 mr-2' /> DIVISIÓN ELECTRÓNICA</h3>
          <ul className=''>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Programación de PLC, HMI, SCADA.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Servomotores, variadores de velocidad.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Diseño de sistemas de control con planos de paneles.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Planos de proceso e instrumentación (P&ID).</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Planos de I/O de campo y de panel, esquemas eléctricos de panel.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Planos de conexión de red.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Actualizacion tecnológica de equipos productivos (retrofittubg).</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Reparación de placas electrónicas.</li>
          </ul>
        </div>

      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-between w-9/12 border-b pb-20'>
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-semibold flex items-center'> <WrenchScrewdriverIcon className='w-8 mr-2' /> DIVISIÓN MECÁNICA INDUSTRIAL</h3>
          <ul className=''>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mantenimiento de compresores de aire.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mantenimiento de bombas de agua y fluidos.</li>
          </ul>
        </div>
        <img className='h-[25rem] w-[40rem] rounded-sm object-cover shadow-md' src={comprInd} alt="imágen ilustrativa: bomba de agua" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-between w-9/12 border-b pb-20'>
        <img className='h-[25rem] w-[40rem] rounded-sm object-cover shadow-md' src={manteEdilicio} alt="imagen ilustrativa: obreros trabajando en construcción de un edificio" />
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-semibold flex items-center'> <BuildingOffice2Icon className='w-8 mr-2' /> MANTENIMIENTO EDILICIO</h3>
          <ul className='list-unstyled ms-3'>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Sistemas de iluminación y emergencia.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Sistemas de alarmas y cámaras de seguridad.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mantenimiento edilicio (pintura, albañilería, plomería, carpintería, herrería, cielorrasos).</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Construcciones en seco (durlock y superboard).</li>
          </ul>
        </div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-between w-9/12'>
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-semibold flex items-center'> <BoltIcon className='w-8 mr-2' />DIVISIÓN ELÉCTRICA</h3>
          <ul className=''>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Mantenimiento de motores eléctricos.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Arranques estrella triangulo.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Tableros de control, comando y fuerza.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Automatización general de procesos.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Montaje de redes eléctricas.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Planimetría eléctrica.</li>
            <li><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />Ejecución de tareas bajo normativas de seguridad.</li>
          </ul>
        </div>
        <img className='h-[25rem] w-[40rem] rounded-sm object-cover shadow-md' src={divElectrica} alt="imagen ilustrativa: persona controlando un tablero eléctrico" />
      </motion.div>

    </div>
  )
}

export default SectionTwo