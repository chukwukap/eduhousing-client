import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className='flex items-center justify-between mr-12 w-1/2 gap-4'>
			<NavLink
				to='/'
				className='text-xs md:text-sm text-black font-semibold'>
				Home
			</NavLink>
			<NavLink
				to='contact'
				className='text-xs md:text-sm text-black font-semibold'>
				Contact
			</NavLink>
			<NavLink
				to='about'
				className='text-xs md:text-sm text-black font-semibold'>
				About
			</NavLink>
			<NavLink
				to='profile'
				className='text-xs md:text-sm text-black font-semibold'>
				Profile
			</NavLink>
		</nav>
	);
}
export default Navbar;
