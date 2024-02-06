import React from 'react'
import { MapPinIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'





const SectionFive = () => {
	return (
		<motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .3, delay: .5 }}
        viewport={{ once: true }}
		
		className='min-h-screen flex flex-col items-center py-40 gap-20 bg-blue-50' id='sectionFive'>
			<h2 className='text-3xl font-semibold text-azulServe'>CONTACTO</h2>
			<div className='flex flex-col lg:flex-row gap-40 lg:w-7/12 justify-between'>
				<div className='flex flex-col w-full gap-4 text-xl text-blue-900 font-semibold'>
					<p className='text-center mb-10 text-azulServe'>Si deseas consultar por mayor información sobre nuestros servicios o tienes alguna duda al respecto, no dudes en consultarnos por alguno de nuestros medios de contacto. Te responderemos a la brevedad!</p>
					<a href='mailto:servemastersas@gmail.com' className='flex gap-2'>
						<EnvelopeIcon className="w-8 text-pink-700" />
						<p className='hover:underline'>servemastersas@gmail.com</p>
					</a>
					<a href='' className='flex gap-2'>
						<MapPinIcon className="w-8 text-pink-700" />
						<p className='hover:underline'>20 de Junio 540, Aguilares, Tucumán</p>
					</a>
					<div href='' className='flex gap-2 items-start'>
						<DevicePhoneMobileIcon className="w-8 text-pink-700" />
						<div className='flex flex-col gap-2'>
							<a className='hover:underline' href="">+549 3865-607676</a>
							<a className='hover:underline' href="">+549 3865-252015</a>
						</div>
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<form action="" className='flex flex-col w-full max-w-[30rem] gap-6 text-lg'>
						<input type="text" name="" className='input-form' placeholder='Nombre' id="" />
						<input type="email" name="" className='input-form' placeholder='E-mail' id="" />
						<input type="text" name="" className='input-form' placeholder='Asunto' id="" />
						<textarea name="" id="" cols="30" rows="10" className='h-60 rounded-md border-2 border-gray-400 p-2 resize-none hover:border-pink-700 duration-200 focus:outline-pink-700' placeholder='Mensaje...'></textarea>
						<div className='text-end'>
						<button className='bg-pink-700 hover:bg-pink-800 duration-300 text-white py-1 px-4 rounded-md '>Enviar</button>
						</div>

					</form>
				</div>
			</div>

		</motion.div>
	)
}

export default SectionFive