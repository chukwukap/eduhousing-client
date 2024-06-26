import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
	return (
		<div className=' w-full h-screen '>
			<Image
				src='/images/hero-image.jpg'
				alt='Student in Lodge'
				fill
				className='object-cover'
				priority
			/>
			<div className='absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/80'></div>
			<div className='relative  h-full  w-full z-10 flex flex-col items-center justify-center  max-w-4xl  text-center text-white'>
				<h1 className='text-5xl font-bold mb-4'>
					Find Your Perfect Off-Campus Housing
				</h1>
				<p className='text-lg mb-8'>
					Discover the best student lodges near your university with
					our comprehensive listing platform.
				</p>
				<div className='flex space-x-4'>
					<Button variant='default' size='lg'>
						Browse Listings
					</Button>
					<Button variant='secondary' size='lg'>
						Learn More
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
