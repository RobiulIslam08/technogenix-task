

const SectionFive = () => {
	return (
		<div>
			<div className="flex  mb-40 lg:flex-row flex-col-reverse pt-12 lg:-pt-0 justify-between bg-cover bg-left items-center bg-no-repeat  ">
				{/* left side */}
				<div className="flex-1  lg:pr-40  text-center lg:text-left px-5   ">
					<p className=" rounded-full w-7 h-7 -ml-7 hidden lg:flex bg-[#857fff]"></p>
					<p className=" rounded-full w-4 h-4 ml-[540px] hidden lg:flex bg-[#f9c45c]"></p>
					<h1 className="lg:text-[36px] lg:pl-16 pt-24 lg:pt-7 text-[36px]  font-extrabold text-[#2d3958] leading-10">
					Ready to get started with your new project today?
					</h1>
					<p className="pb-12 pt-8 lg:pl-16 text-[#7b88a8] text-lg">
					Identify your authentic brand & shop elements through an in-depth exploration, receive unique strategies to clarify your vision, strengthen differentiation, and prime your company for growth..
					</p>
					
					<form className="lg:max-w-md  mx-auto">
					<div className="flex">
						<input
							type="email"
							id="email"
							className="flex-grow lg:py-4 py-2 lg:px-4 px-2 lg:text-lg text-base font-medium placeholder-[#757575] text-gray-900  bg-[#f4f3f6] npm run dev  focus:outline-none "
							placeholder="Your email address "
							required
						/>
						<button
							type="submit"
							className="flex-shrink-0 inline-flex items-center lg:py-2.5 py-2 lg:px-8 px-4 lg:text-lg text-base font-medium text-white bg-[#4c6fff] border border-blue-500 hover:bg-[#2f1b5f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Sign Up
						</button>
					</div>
				</form>
				<div className="ml-[474px] -mt-4 hidden lg:flex"><img src="https://i.ibb.co/BgczhYP/contact-0001.png" alt="" /></div>
				
					
				</div>
				{/* right side */}
				<div className="flex-1 lg:mb-40 relative ">
					<img className="lg:px-[75px] px-7" src="https://i.ibb.co/j3R27rt/Img-contact-last.png" alt="dfsdf" />
					<div className="lg:flex lg:-mt-72">

						{/* side er choto desing ta */}
						{/* <div className="relative -top-52">
							<img className="-ml-[58px]  h-40 hidden lg:flex" src="https://i.ibb.co/jW4gspL/pattern-001.png" alt="fdsf" />
						</div> */}
						<div className="lg:relative hidden -mt-[108px]   lg:inline-block">
							<img className="bg-[#4c6fff]  lg:rounded-[50px]" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />

							<p className="lg:absolute leading-none inset-0 text-center flex flex-col justify-center items-center text-white font-bold">
								<span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-[#ffc0ec]">150</span><br />
								<span className="-mt-2 font-bold leading-none text-[19px]">Projects in 2023</span>
							</p>
						</div>


						{/* small devise er jonno aita */}
						<div className="absolute inset-0  flex justify-center items-center lg:hidden">
							<div className="rounded-[40px]  mt-52 bg-gradient-to-r from-[#fec645] to-[#ec9b25]  w-[90%] mx-auto ">
								<img className="" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
								<p className=" leading-none -mt-48 p-10 text-center  text-white font-bold">
									<span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-white">150</span><br />
									<span className="-mt-2 font-bold leading-none  text-[19px]">Projects in 2023</span>
								</p>
							</div>
						</div>


					</div>
				</div>

				

			</div>
		</div>
	);
};

export default SectionFive;