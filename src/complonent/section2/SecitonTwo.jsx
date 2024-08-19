import { FaPenNib } from "react-icons/fa";
import "./section2.css"
import { LuTarget } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";
const SecitonTwo = () => {

	return (
		<div className="bg-gradient-to-r clip clip-sm  pt-40 pb-40 mt-10 lg:mt-20 from-[#fad6f0ad] to-[#dbfdfe] mb-40 ">
			<div className="">
				{/* heading */}
				<div className="flex lg:flex-row flex-col justify-between w-[89%] mx-auto">
					{/* left */}
					<div className="lg:w-[54%] w-[100%] lg:text-left text-center mb-4 lg:mb-0">
						<p className="text-[#7b88a8] uppercase text-sm">Bringing logic to design with a spirit of curiosity and excitement</p>
						<h1 className="text-[#2d3958] pt-4 lg:pt-4 lg:leading-tight lg:text-[40px] text-[36px] leading-none font-extrabold">A team of creative designers & strategists</h1>
					</div>

					{/* right */}
					<div className="lg:w-[46%] w-[90%] mx-auto ml-auto flex flex-col items-center lg:items-end">
						<div><img src="" alt="" /></div>
						<div className="lg:mt-4 my-16">
							<p className="bg-[#6ac75a] rounded-full hidden lg:flex ml-auto mr-10 mb-14 w-4 h-4 "></p>
							<button className="bg-[#4c6fff]  hover:bg-[#111a4e] text-white font-bold lg:py-4 py-3 px-4 lg:px-7 rounded-lg transform transition-colors duration-500">
								Learn More
							</button>
						</div>
					</div>
				</div>

				{/* card */}
				<div className="flex lg:flex-row flex-col lg:w-[89%] w-full mx-auto gap-8">

					{/* left card*/}
					<div className="bg-[#ffffff] flex lg:flex-row flex-col rounded-[35px] lg:gap-5 gap-20 px-7 py-10">
						{/* icon */}
					
						<div>
						<p className="p-6 bg-[#4c6fff] inline-block rounded-full">
                                    <FaPenNib size={20} className="rotate-90 text-white" />
                                </p>
						</div>
					

						{/* text */}
						<div>
							<h1 className="text-[#2d3958] font-bold text-[22px] pb-4">Branding</h1>
							<p className="text-[#9fa8c0] text-base pb-6">See your authentic mission, and values come to life with a unique brand image.</p>
							<a className="text-[#9fa8c0] hover:text-blue-600 transform transition-colors duration-500  text-lg">Learn More</a>
						</div>
					</div>

					{/* center  card*/}
					<div className="bg-[#ffffff] flex lg:flex-row flex-col rounded-[35px] lg:gap-5 gap-20 px-7 py-10">
						{/* icon */}
					
						<div>
						<p className="p-6 bg-[#f9c45c] inline-block rounded-full">
                                    <LuTarget size={20} className="rotate-90 text-white" />
                                </p>
						</div>
					

						{/* text */}
						<div>
							<h1 className="text-[#2d3958] font-bold text-[22px] pb-4">Strategy</h1>
							<p className="text-[#9fa8c0] text-base pb-6">See your authentic mission, and values come to life with a unique brand image.</p>
							<a className="text-[#9fa8c0] hover:text-blue-600 transform transition-colors duration-500  text-lg">Learn More</a>
						</div>
					</div>

					{/* right card*/}
					<div className="bg-[#ffffff] flex lg:flex-row flex-col rounded-[35px] lg:gap-5 gap-20 px-7 py-10">
						{/* icon */}
					
						<div>
						<p className="p-6 bg-[#61dcdf] inline-block rounded-full">
                                    <FiLayout size={20} className="rotate-90 text-white" />
                                </p>
						</div>
					

						{/* text */}
						<div>
							<h1 className="text-[#2d3958] font-bold text-[22px] pb-4">User Experience</h1>
							<p className="text-[#9fa8c0] text-base pb-6">See your authentic mission, and values come to life with a unique brand image.</p>
							<a className="text-[#9fa8c0] hover:text-blue-600 transform transition-colors duration-500  text-lg">Learn More</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default SecitonTwo;
