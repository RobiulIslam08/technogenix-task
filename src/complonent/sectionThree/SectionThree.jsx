
import "./sectionThree.css"
const SectionThree = () => {
	return (
		<div className="relative mb-40">
			 <div className="circle"></div>
			 <div className="circle2"></div>
			<div className="flex  lg:flex-row flex-col justify-between bg-cover bg-left items-center bg-no-repeat  ">
				{/* left side */}
				<div className="flex-1 lg:mb-24 relative">
					<img className="lg:px-[75px] px-7" src="https://i.ibb.co/MSNDNJW/img-agency-22-min.png" alt="dfsdf" />
					<div className="lg:flex lg:-mt-72">

						{/* side er choto desing ta */}
						<div className="relative -top-52">
							<img className="-ml-[58px]  h-40 hidden lg:flex" src="https://i.ibb.co/jW4gspL/pattern-001.png" alt="fdsf" />
						</div>
						<div className="lg:relative hidden -mt-16 ml-[300px] lg:inline-block">
							<img className="bg-gradient-to-r from-[#fec645] to-[#ec9b25]  lg:rounded-[50px]" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />

							<p className="lg:absolute leading-none inset-0 text-center flex flex-col justify-center items-center text-white font-bold">
								<span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-white">3K</span><br />
								<span className="-mt-2 font-bold leading-none text-[19px]">Happy Customers</span>
							</p>
						</div>


						{/* small devise er jonno aita */}
						<div className="absolute inset-0  flex justify-center items-center lg:hidden">
							<div className="rounded-r-[40px] rounded-l-[20px] mr-10 mt-52 bg-gradient-to-r from-[#fec645] to-[#ec9b25]  w-[90%] mx-auto ">
								<img className="" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
								<p className=" leading-none -mt-48 p-10 text-center  text-white font-bold">
									<span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-white">3K</span><br />
									<span className="-mt-2 font-bold leading-none  text-[19px]">Startups created</span>
								</p>
							</div>
						</div>


					</div>
				</div>

				{/* right side */}
				<div className="flex-1  lg:pr-10  text-center lg:text-left px-5  lg:pl-28">
					<h1 className="lg:text-[36px] lg:pl-16 pt-24 lg:pt-7 text-[36px]  font-extrabold text-[#2d3958] leading-10">
						Augment your brand, and heighten your business
					</h1>
					<p className="pb-12 pt-8 lg:pl-16 text-[#7b88a8] text-lg">
						dentify your authentic brand & shop elements through an in-depth exploration, receive unique strategies to clarify your vision, strengthen differentiation, and prime your company for growth.
					</p>

					{/* children div for flex fro */}
					<div className="lg:pl-16">
						<button className="bg-[#4c6fff]  hover:bg-[#111a4e] text-white font-bold lg:py-4 py-3 px-4 lg:px-7 rounded-lg transform transition-colors duration-500">
							Get Started
						</button>
					</div>
				</div>

			</div>

			{/* pic er niche design tar image */}
			<div className="flex ml-[530px] mt-20">
				<img src="https://i.ibb.co/VNT5dtN/pattern-002.png" className="hidden lg:flex " alt="" />
			</div>

			{/* love emoji */}
			<div className="h-[74px] w-[74px] hidden ml-[830px]  lg:flex rotate-12">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="smiling-with-heart-eye"><circle cx="18" cy="18" r="16.5" fill="#f4cb5b"></circle><path fill="#e5423e" d="M12.33939 10.47739l-.0495.097-.09137-.05927a2.48913 2.48913 0 0 0-3.49064.73255 3.0505 3.0505 0 0 0 .95551 4.02018l.17412.11293 3.5963 2.33259a1 1 0 0 0 1.43492-.38448l1.94819-3.81823.09432-.18487a3.05048 3.05048 0 0 0-1.1826-3.95933A2.48912 2.48912 0 0 0 12.33939 10.47739zM24.19792 10.47739l.0495.097.09138-.05927a2.48912 2.48912 0 0 1 3.49063.73255 3.0505 3.0505 0 0 1-.95551 4.02018l-.17411.11293-3.5963 2.33259a1 1 0 0 1-1.43492-.38448l-1.9482-3.81823-.09432-.18487a3.0505 3.0505 0 0 1 1.1826-3.95933A2.48911 2.48911 0 0 1 24.19792 10.47739z"></path><path fill="#474750" d="M27.4203,22.49677a1.00185,1.00185,0,0,1,.99778,1.13173,7.73905,7.73905,0,0,1-.17809.86827c-1.08,3.99-5.28,7-10.24,7s-9.16-3.01-10.24-7a7.73905,7.73905,0,0,1-.17809-.86827,1.00185,1.00185,0,0,1,.99778-1.13173Z"></path></svg>
			</div>


			{/* card */}
			<div className="w-[89%] flex lg:flex-row flex-col gap-6 mx-auto">

				{/* first card */}
				<div className="bg-[#ffffff] border py-10 pl-9 lg:pr-16 pr-10 rounded-[40px]">
					<div className="flex gap-3 items-center">
						<div>
							<img className="h-20 w-20" src="https://i.ibb.co/TTrWGqW/avatar-3-150x150.png" alt="" />
						</div>

						<div className="">
							<h1 className="text-[#2d3958] text-base font-bold pb-[6px]">Ernest Smith</h1>
							<p className="text-[#a2abc2] pb-3">Developer at Unixity</p>

							{/* ratin icon */}
							<div className="flex items-center">
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							</div>

						</div>
					</div>

					{/* text */}
					<div>
						<p className="text-[#7b88a8] text-lg pt-4">&quot;Outstanding dedication to excellence, exceptional support received. Impressive service!&quot;</p>

					</div>
				</div>
				{/* second card */}
				<div className="bg-[#ffffff] border py-10 pl-9 lg:pr-16 pr-10 rounded-[40px]">
					<div className="flex gap-3 items-center">
						<div>
							<img className="h-20 w-20" src="https://i.ibb.co/5jwtYfw/avatar-2-150x150.png" alt="" />
						</div>

						<div className="">
							<h1 className="text-[#2d3958] text-base font-bold pb-[6px]">Ernest Smith</h1>
							<p className="text-[#a2abc2] pb-3">Developer at Unixity</p>

							{/* ratin icon */}
							<div className="flex items-center">
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							</div>

						</div>
					</div>

					{/* text */}
					<div>
						<p className="text-[#7b88a8] text-lg pt-4">&quot;Outstanding dedication to excellence, exceptional support received. Impressive service!&quot;</p>

					</div>
				</div>
				{/* third card */}
				<div className="bg-[#ffffff] border py-10 pl-9 lg:pr-16 pr-10 rounded-[40px]">
					<div className="flex gap-3 items-center">
						<div>
							<img className="h-20 w-20" src="https://i.ibb.co/gPvQ8WT/avatar-1-150x150.png" alt="" />
						</div>

						<div className="">
							<h1 className="text-[#2d3958] text-base font-bold pb-[6px]">Ernest Smith</h1>
							<p className="text-[#a2abc2] pb-3">Developer at Unixity</p>

							{/* ratin icon */}
							<div className="flex items-center">
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-[#ffbb00] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							</div>

						</div>
					</div>

					{/* text */}
					<div>
						<p className="text-[#7b88a8] text-lg pt-4">&quot;Outstanding dedication to excellence, exceptional support received. Impressive service!&quot;</p>

					</div>
				</div>

			</div>

			{/* laugh imogi */}
			<div className="hidden lg:flex ml-[450px] mt-10">
			<img src="https://i.ibb.co/C0TZCGQ/happy-face.png" className="w-12 h-12 -rotate-12" alt="" />
			</div>

		</div>
	);
};

export default SectionThree;