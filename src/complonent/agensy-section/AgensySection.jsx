/* eslint-disable react/no-unescaped-entities */


const AgensySection = () => {
	return (
		<div className="md:mt-24 lg:mt-28 mt-20  h-[500px]">
			{/* heading */}
			<div className="lg:w-[60%] md:w-[90%] w-[80%]  text-center mx-auto">
				<h1 className="lg:text-[45px]  md:text-[40px] leading-none tracking-tighter text-[36px] text-[#2d3958] font-bold">Websites that tell your brand's story</h1>
				<p className="pt-4 text-lg text-[#7b88a8] lg:w-[70%] md:w-[80%] mx-auto">We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.</p>
			</div>
			{/*main flex div */}
			<div className="flex justify-between">
				{/* left side */}
				<div>
					<img className="px-20" src="https://i.ibb.co/3BHkZ5x/img-agency-section.png" alt="dfsdf" />
					<div className="flex -mt-80 justify-between">
					<img className="-ml-3" src="https://i.ibb.co/jVV9M4x/agency-section-copy-03.png" alt="fdsf" />
					<div className="relative inline-block">
  <img className="bg-blue-600 rounded-[50px]" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
  <p className="absolute inset-0 text-center flex justify-center items-center text-white font-bold">
   24 + <br /> startup created
  </p>
</div>
					</div>
				</div>

				{/* right side */}
				<div>

				</div>
			</div>
		</div>
	);
};

export default AgensySection;