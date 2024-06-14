import Header from "../layout/Header";

function Home() {
	return (
		<main className='flex items-start flex-wrap w-full h-screen relative'>
			<div className='w-full lg:w-1/2 flex items-center flex-col'>
				<Header />
				<div className='px-2 w-full'>
					<h1 className='text-7xl leading-normal font-extrabold'>
						GET YOUR DREAM{" "}
						<span className='bg-gray-900 rounded-tr-3xl rounded-bl-3xl text-white px-4'>
							LODGE
						</span>{" "}
						WITH EASE
					</h1>
				</div>
			</div>
			<div className='w-1/2 hidden lg:block'>
				<img
					src='/Hero_bg.jpg'
					className='object-cover w-full'
					alt='Hero Image'
				/>
			</div>
		</main>
	);
}
export default Home;
