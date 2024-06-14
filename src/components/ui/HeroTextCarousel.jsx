import { useState } from "react";

const texts = [
	{
		title: "flat",
		text: "Welcome to Uni.housing, your home away from home! We specialize in providing safe, comfortable, and affordable housing options for students. Our team understands the unique needs of student life, and we're dedicated to making your housing experience seamless and stress-free.",
	},
	{
		title: "selfcon",
		text: "Welcome to Uni.housing, your home away from home! We specialize in providing safe, comfortable, and affordable housing options for students. Our team understands the unique needs of student life, and we're dedicated to making your housing experience seamless and stress-free.",
	},
	{
		title: "oneroom",
		text: "Welcome to Uni.housing, your home away from home! We specialize in providing safe, comfortable, and affordable housing options for students. Our team understands the unique needs of student life, and we're dedicated to making your housing experience seamless and stress-free.",
	},
];

function HeroTextCarousel() {
	const [curText, setCurText] = useState(texts[0]);

	function handleSetCurText(val) {
		const indexOfSelected = texts.findIndex((text) => text.title === val);
		setCurText(texts[indexOfSelected]);
	}
	return (
		<div className='w-full p-4 mt-8'>
			<div className='flex gap-4'>
				<p
					className='text-xl px-4 pb-2 cursor-pointer font-bold capitalize hover:text-gray-800'
					onClick={(e) => handleSetCurText(e.target.textContent)}>
					flat
				</p>
				<p
					className='text-xl px-4 pb-2 cursor-pointer font-bold capitalize hover:text-gray-800'
					onClick={(e) => handleSetCurText(e.target.textContent)}>
					selfcon
				</p>
				<p
					className='text-xl px-4 pb-2 cursor-pointer font-bold capitalize hover:text-gray-800'
					onClick={(e) => handleSetCurText(e.target.textContent)}>
					oneroom
				</p>
			</div>
			<p className='text-xm ml-4'>{curText?.text}</p>
		</div>
	);
}
export default HeroTextCarousel;
