
import  { useState } from 'react';
import {  FaPlay,  } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosMenu, } from 'react-icons/io';
import {  IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import './hero.css';
const Hero = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className="font-sans lg:h-[548px] bg-hero bg-[#001c7f] lg:bg-[url('https://i.ibb.co/DV2DjX4/agency-bg-hero-min.jpg')]  clip-bottom  bg-cover bg-center  w-full" style={{ backgroundPosition: 'center top -110px' }}>

			{/* navbar */}
			<div className='flex  justify-between items-center pt-8 lg:px-20 px-5 '>
				{/* 1st */}
				<div className=''>
					<img src="https://i.ibb.co/2WyvdR9/logo-light.png" className='' alt="" />
				</div>

				{/* second */}

				<div className='hidden md:flex items-center gap-10' >
					<div className='space-x-4'>
						<button
							type="button"
							className="inline-flex justify-center items-center gap-x-1.5 rounded-md  px-3 py-2 text-base font-semibold text-white shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Home
							<svg
								className="-mr-1 h-5 w-5 tewhite"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button className='text-white text-sm font-semibold'>About Us</button>
						<button
							type="button"
							className="inline-flex justify-center gap-x-1.5 items-center rounded-md  px-3 py-2 text-base font-semibold text-white shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Pages
							<svg
								className="-mr-1 h-5 w-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							type="button"
							className="inline-flex justify-center gap-x-1.5 rounded-md  items-center px-3 py-2 text-base font-semibold text-white shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Features
							<svg
								className="-mr-1 h-5 w-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							type="button"
							className="inline-flex justify-center gap-x-1.5 items-center rounded-md  px-3 py-2 text-base font-semibold text-white shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Blogs
							<svg
								className="-mr-1 h-5 w-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button className='text-white text-base font-semibold'>Contact</button>
					</div>
					<div className='text-white flex items-center gap-5'>
						<div className=''>
							<FiShoppingCart className='text-[22px] absolute' />
							<p className='relative left-3  rounded-full px-1 border-white border-[1px] text-[10px] bg-[#23c28c] -top-1 '>o</p>
						</div>
						<IoSearch className='text-2xl' />
					</div>
				</div>


				{/* small devise er jonno */}

				<div onClick={() => setNav(!nav)} className=" z-10 cursor-pointer text-white md:hidden">
					{nav ? <RxCross2 size={25} /> : <IoIosMenu size={25} />}
				</div>





			</div>
			{
				nav && (
					<div className='bg-[#ffffff] h-full space-y-4  flex flex-col'>
						<button
							type="button"
							className="inline-flex justify-between items-center gap-x-1.5 rounded-md  px-3 py-2 text-base font-semibold text-[#2d3958] shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Home
							<svg
								className="-mr-1 h-5 w-5 text-[[#2d3958]]"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button className='text-[#2d3958] flex justify-between px-3 text-base font-semibold'>About Us</button>
						<button
							type="button"
							className="inline-flex justify-between gap-x-1.5 items-center rounded-md  px-3 py-2 text-base font-semibold text-[#2d3958] shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Pages
							<svg
								className="-mr-1 h-5 w-5 text-[[#2d3958]]"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							type="button"
							className="inline-flex justify-between gap-x-1.5 rounded-md  items-center px-3 py-2 text-base font-semibold text-[#2d3958] shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Features
							<svg
								className="-mr-1 h-5 w-5 text-[[#2d3958]]"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							type="button"
							className="inline-flex justify-between gap-x-1.5 items-center rounded-md  px-3 py-2 text-base font-semibold text-[#2d3958] shadow-sm "
							id="menu-button"

							aria-haspopup="true"

						>
							Blogs
							<svg
								className="-mr-1 h-5 w-5 text-[[#2d3958]]"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button className='text-[#2d3958] flex justify-between px-3 text-base font-semibold'>Contact</button>
					</div>
				)
			}

			{/* content */}
			<div className='lg:px-20 px-6 pt-3 lg:text-left text-center lg:pt-10'>
				<div className=''>
					<h1 className='lg:text-[68px] text-[42px] font-extrabold text-white leading-none font-sans'>A Design & Branding <br />  Agency in <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#857fff] to-[#ffabe6]'>New York</span>.</h1>
					<p className='text-white text-lg pt-6'>We’re a digital product and UX agency in New York City. Strategy, design, and <br /> development across all platforms. Digital products that people love to use</p>
					<div className='lg:flex hidden items-center gap-3 pt-14'>
						<button className="bg-[#4c6fff] hover:bg-[#4569fa] text-white font-bold lg:py-4 py-3 px-4  lg:px-7 rounded-lg transition-transform transform hover:scale-95">
							Get Started
						</button>
						<div className='flex items-center gap-2'>
						
						<p className='bg-white p-5 inline-block rounded-full'><FaPlay className='text-[#857fff]' /></p>
						<p className='text-white'>How It Works</p>
						</div>
					</div>

					{/* smmall devise a button dekhabe */}
					<button className="lg:hidden my-12 bg-[#4c6fff] hover:bg-[#4569fa] text-white font-semibold  py-5 px-7  lg:px-7 rounded-lg transition-transform transform hover:scale-95">
							Get Started
						</button>
					
				</div>
				
			</div>
			

		</div>
	);
};

export default Hero;