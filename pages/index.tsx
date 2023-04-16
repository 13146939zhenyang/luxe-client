import Head from 'next/head'
import Hall from '@/components/canvas/Hall'
import { useState, useEffect } from 'react'
import { Header } from '@/components/index'


export default function Home() {
	const [number, setNumber] = useState(0.01)
	const [render, setRender] = useState(false)
	useEffect(() => {
		window.onscroll = () => {
			setNumber(number + window.scrollY / 5000);
		};
	}, [])
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setRender(true)
		}, 2000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	return (
		<>
			<Head>
				<title>Dropshipping</title>
				<meta name="description" content="Luxury shoes, clothing, leather goods, accessorise" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.svg" />
			</Head>
			<main className='w-full relative h-full'>
				<div className='w-full h-[100vh] sticky top-0 left-0 z-10'>
					<Hall number={number} />
				</div>
				<div className='bg-black bg-opacity-[0.4] w-full h-full absolute top-0 left-0 z-20'>
					{render && <>
						<section className='w-full sticky top-0 left-0 z-30 py-10'>
							<Header />
						</section>
						<div className='bg-white lg:max-w-[1200px] lg:mx-auto w-full px-4'>
1
						</div>
					</>}
				</div>
				<section className='h-[100vh]' id="brands"></section>
				<section className='h-[100vh]' id="query"></section>
			</main>
		</>
	)
}
