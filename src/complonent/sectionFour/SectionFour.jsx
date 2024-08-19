import "./sectionFour.css"
const SectionFour = () => {
    return (
        <div className="clip clip-sm font-sans  bg-gradient-to-r   pb-40 from-[#fad6f021] to-[#dbfdfe]">
            {/* heading */}
            <div className="lg:w-[70%] w-full text-center pb-20  pt-[130px] mx-auto ">
                <h1 className="text-[36px] text-[#2d3958] font-extrabold">
                    Explore our recent client success stories and witness our full 360 transformations come to life</h1>
            </div>

            {/* main div for image flex */}
            <div className=" w-[89%] mx-auto gap-10">
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-7">

                  {/* 1st Image */}
                  <div className="col-span-7">
                    <img className="lg:h-[550px] rounded-[40px] w-full" src="https://i.ibb.co/rd4xxcJ/portfolio-001-min-q2okaj0nfbr8p8rgd5zupb8q7xwazgde671hh3n0lg.jpg" alt="First" />
                    <div className="pt-5">
                        <a className="text-[#2d3958] hover:text-[] font-bold text-[22px]">UX/UI Design</a>
                    </div>
                </div>

                {/* 2nd Image */}
                <div className="col-span-5">

                    <img className="lg:h-[550px] rounded-[40px] w-full" src="https://i.ibb.co/KsTT0kJ/portfolio-0021-min-q2okalu3k4bdd90gr0ub8uiep3zjut7ilyt9o1mc3o.jpg" alt="Third" />
                    <div className="pt-5">
                        <a className="text-[#2d3958] hover:text-[] font-bold text-[22px]">NFT Market UI</a>
                    </div>
                </div>
              </div>


                <div className=" grid lg:grid-cols-12 grid-cols-1 gap-7">

                {/* 3rd Image */}
                <div className="col-span-5">

                    <img className="lg:h-[550px] rounded-[40px] w-full" src="https://i.ibb.co/3Scdvr1/portfolio-003-min-q2okaonm4mf8c2wdak26ybssh9lnhwipmcrq3vi5l0.jpg" alt="Second" />
                    <div className="pt-5">
                        <a className="text-[#2d3958] hover:text-[] font-bold text-[22px]">Health Mobile App</a>
                    </div>
                </div>

                {/* 4th Image */}
                <div className="col-span-7">
                    <img className="lg:h-[550px] rounded-[40px] w-full" src="https://i.ibb.co/PxJPc6b/portfolio-0004-min-q2okarh74u2tlqf5zrnhtr3vkeqlwqaz7cwuslah1g.jpg" alt="Fourth" />

                    <div className="pt-5">
                        <a className="text-[#2d3958] hover:text-[] font-bold text-[22px]">Wallet App Development</a>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default SectionFour;




