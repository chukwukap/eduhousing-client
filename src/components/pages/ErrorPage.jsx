import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
	const navigate = useNavigate();

	return (
		<div className='w-full flex items-center justify-center h-screen'>
			<Link
				onClick={() => navigate(-1)}
				className='absolute top-10 left-10 hover:text-gray-500 transition-colors duration-200'>
				Go Back &larr;
			</Link>
			<img
				className='w-full object-cover'
				src='/errorPage_bg.jpg'
				alt='Error: not Found'
			/>
		</div>
	);
}
export default ErrorPage;
