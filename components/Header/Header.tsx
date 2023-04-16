import React from 'react'
import { SectionWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { navbar } from '@/utils/constants'
import { fadeIn, textVariant } from "@/utils/motion";

const Header = () => {
	return (
		<div className='w-full flex justify-center items-center bg-transparent flex-col'>
			<motion.span variants={textVariant()} className='font-bold lg:text-[60px] text-3xl text-white drop-shadow-2xl lg:mb-10 mb-5 cursor-pointer' onClick={() => window.scrollTo(0, 0)}>LUXURY LOGO</motion.span>
			<div className='w-full flex lg:justify-end justify-evenly items-center lg:text-base text-sm font-base lg:gap-10'>
				{navbar.map(
					(item, index) => (
						<motion.a href={item.position} variants={fadeIn("right", "", index, 1)} className='text-gray-300 hover:text-white transition duration-200 ease-in-out drop-shadow-2xl'>{item.name.toUpperCase()}</motion.a>
					)
				)}
			</div>
		</div>
	)
}

export default SectionWrapper(Header, '')