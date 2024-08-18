// /* eslint-disable react/no-unescaped-entities */

// import { FaPenNib } from "react-icons/fa";
// import { FiCoffee } from "react-icons/fi";
// import './agency.css';

// const AgensySection = () => {
// 	return (
// 	<div>
// 		<div>
// 		<div className="md:mt-24 lg:mt-28 mt-20 font-sans  mb-[200px]">
// 			{/* heading */}
// 			<div className="lg:w-[60%] md:w-[90%] w-[80%]  text-center mx-auto">
// 				<h1 className="lg:text-[45px]  md:text-[40px] leading-none tracking-tighter text-[36px] text-[#2d3958] font-bold">Websites that tell your brand's story</h1>
// 				<p className="pt-4 text-lg text-[#7b88a8] lg:w-[70%] md:w-[80%] mx-auto">We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.</p>
// 			</div>

// 			<div className="flex justify-end  pr-[120px]">
// 			<img src="https://i.ibb.co/gWk5D5n/agency-section-02.png" className="" alt="" />
// 			</div>
// 			{/*main flex div */}

// 			<div className="flex color justify-between bg-cover bg-left items-center bg-no-repeat  mt-20">
// 				{/* left side */}
// 				<div className="flex-1 ">
// 					<img className="px-[75px]" src="https://i.ibb.co/3BHkZ5x/img-agency-section.png" alt="dfsdf" />
// 					<div className="flex -mt-72 ">
// 						<img className="-ml-3" src="https://i.ibb.co/jVV9M4x/agency-section-copy-03.png" alt="fdsf" />
// 						<div className="relative ml-80 inline-block">
// 							<img className="bg-[#4c6fff] rounded-[50px]" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
// 							<p className="absolute leading-none inset-0 text-center flex flex-col justify-center items-center text-white font-bold">
// 								<span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-[#ffc0ec]">24 +</span><br /> <span className="-mt-2 font-bold leading-none text-[19px]">Startups reated</span>
// 							</p>
// 						</div>
// 					</div>
// 				</div>

// 				{/* right side */}
// 				<div className="flex-1  pr-10 pl-20">
				
// 					<h1 className="text-[36px] pb-9 font-extrabold text-[#2d3958] leading-10">We’re design-focused across every touchpoint or interaction</h1>
// 					<p className="pb-12">Everything we do and dream up has a solid design impact.We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.</p>

// 					{/* childerrn div for flex fro */}
// 					<div className="flex justify-between gap-10">
// 						{/* 1st card */}
// 						<div className="w-[40%] ">
// 							<p className="p-6  bg-[#c8cdff] inline-block rounded-full">	<FaPenNib size={25} className=" rotate-90 text-[#8080f1] " /></p>
// 							<h1 className="pt-7 pb-4">UI/UX Design</h1>
// 							<p>We design digital products used by millions of people.</p>
// 						</div>

// 						{/* 2nd card */}
// 						<div className="w-[40%]">
// 							<p className="p-6 bg-[#c8cdff] inline-block rounded-full">	<FiCoffee size={25} className=" text-[#8080f1] " /></p>
// 							<h1 className="pt-7 pb-4">Development</h1>
// 							<p>We design digital products used by millions of people.</p>

// 						</div>


// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		</div>
// 	</div>
// 	);
// };

// export default AgensySection;
/* eslint-disable react/no-unescaped-entities */

import { FaPenNib } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import './agency.css';

const AgensySection = () => {
    return (
        <div className="relative">
            <div className="circle"></div> {/* This is the gradient circle */}
            <div className="md:mt-24 lg:mt-28 mt-20 font-sans  relative z-10">
                {/* heading */}
                <div className="lg:w-[60%] md:w-[90%] w-[80%] text-center mx-auto">
                    <h1 className="lg:text-[45px] md:text-[40px] leading-none tracking-tighter text-[36px] text-[#2d3958] font-bold">
                        Websites that tell your brand's story
                    </h1>
                    <p className="pt-4 text-lg text-[#7b88a8] lg:w-[70%] md:w-[80%] mx-auto">
                        We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.
                    </p>
                </div>

                <div className="lg:flex hidden justify-end  pr-[120px]">
                    <img src="https://i.ibb.co/gWk5D5n/agency-section-02.png" className="" alt="" />
                </div>
                {/* main flex div */}
                <div className="flex lg:flex-row flex-col justify-between bg-cover bg-left items-center bg-no-repeat mt-20">
                    {/* left side */}
                    <div className="flex-1 relative">
                        <img className="lg:px-[75px] px-7" src="https://i.ibb.co/3BHkZ5x/img-agency-section.png" alt="dfsdf" />
                        <div className="lg:flex lg:-mt-72">
                            <img className="-ml-3 hidden lg:flex" src="https://i.ibb.co/jVV9M4x/agency-section-copy-03.png" alt="fdsf" />
                            <div className="lg:relative hidden ml-80 lg:inline-block">
                                <img className="bg-[#4c6fff] lg:rounded-[50px]" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
								
                                <p className="lg:absolute leading-none inset-0 text-center flex flex-col justify-center items-center text-white font-bold">
                                    <span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-[#ffc0ec]">24 +</span><br />
                                    <span className="-mt-2 font-bold leading-none text-[19px]">Startups created</span>
                                </p>
                            </div>


							{/* small devise er jonno aita */}
							<div className="absolute inset-0 flex justify-center items-center lg:hidden">
                                <div className="rounded-[40px]  bg-[#4c6fff] w-[90%] mx-auto "> 
									<img className="" src="https://i.ibb.co/JnKxQR0/vectors-group.png" alt="" />
									 <p className=" leading-none -mt-48 p-10 text-center  text-white font-bold">
                                    <span className="text-[64px] leading-none font-spaceGrotesk font-extraboldbold text-[#ffc0ec]">24 +</span><br />
                                    <span className="-mt-2 font-bold leading-none  text-[19px]">Startups created</span>
                                </p>
								</div>
                            </div>


                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex-1 lg:pr-10  px-5  lg:pl-20">
                        <h1 className="lg:text-[36px] text-[36px] lg:pb-9 font-extrabold text-[#2d3958] leading-10">
                            We’re design-focused across every touchpoint or interaction
                        </h1>
                        <p className="pb-12 text-[#7b88a8] text-lg">
                            Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.
                        </p>

                        {/* children div for flex fro */}
                        <div className="flex lg:flex-row flex-col justify-between gap-20 lg:gap-10">
                            {/* 1st card */}
                            <div className="w-full lg:px-10  lg:w-[40%]">
                                <p className="p-6 bg-[#c8cdff] inline-block rounded-full">
                                    <FaPenNib size={20} className="rotate-90 text-[#8080f1]" />
                                </p>
                                <h1 className="pt-7 pb-4 font-bold text-[22px] text-[#2d3958]">UI/UX Design</h1>
                                <p className="text-[#7b88a8] text-lg">We design digital products used by millions of people.</p>
                            </div>

                            {/* 2nd card */}
                            <div className="lg:w-[40%] w-full lg:px-10">
                                <p className="p-6 bg-[#c8cdff] inline-block rounded-full">
                                    <FiCoffee size={20} className="text-[#8080f1]" />
                                </p>
                                <h1 className="pt-7 pb-4 font-bold text-[22px] text-[#2d3958]">Development</h1>
                                <p className="text-[#7b88a8] text-lg">We design digital products used by millions of people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgensySection;
