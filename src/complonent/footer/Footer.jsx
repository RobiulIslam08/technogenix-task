
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="bg-[url('https://i.ibb.co/qNF9DqY/footer-bg.png')] lg:px-20 px-8 bg-cover bg-no-repeat bg-center">
			<div className='grid lg:grid-cols-5 grid-cols-1    py-20 '>
				{/* 1st */}
				<div className=' lg:col-span-2'>
					<img src="https://i.ibb.co/2WyvdR9/logo-light.png" className='pb-10' alt="" />
					<p className='text-[#e7e5ea] text-sm'>Creative-powered to fuel your growth goals. We build world-class digital products, software and branding</p>
				</div>

				{/* 2nd */}
				<div className='lg:space-y-6 space-y-4 col-span-1  lg:mx-auto '>
					<h1  className='text-[#ffffff] font-semibold text-sm lg:pt-0 pt-8'>Products</h1>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Unify App</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Page Builder	</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Templates</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Pricing</a></p>
				</div>

				{/* 3rd */}
				<div className='lg:space-y-6 space-y-4 col-span-1 lg:mx-auto'>
					<h1 className='text-[#ffffff] font-semibold text-sm lg:pt-0 pt-8'>Resources</h1>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Design</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Inspiration</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Blog</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Jobs</a></p>
				</div>

				{/* 4th */}
				<div className='lg:space-y-6 space-y-4 col-span-1 lg:mx-auto'>
					<h1  className='text-[#ffffff] font-semibold text-sm lg:pt-0 pt-8'>Support</h1>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Documentation</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Help Desk	</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Video Guides</a></p>
					<p><a href="" className='text-[#a8a1b3] text-sm hover:text-white transition-colors duration-300 ease-in'>Security</a></p>
				</div>
			</div>
			<hr className='opacity-25 border-[#8a6ec2]' />
			<div className='pt-4 flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between pb-[75px]'>
				<p className='text-[#afa3c2] text-sm'>© 2023 Converta Theme. Codeless, LLC. San Francisco, California. USA.</p>

				{/* icon */}
				<div className='flex gap-5'>
				<FaFacebook className='text-white'/>
				<FaTwitter className='text-white' />
				<FaYoutube className='text-white' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
