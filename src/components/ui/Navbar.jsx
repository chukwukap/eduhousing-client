import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className='flex items-center justify-between mr-auto w-2/3 gap-4'>
			<NavLink to='/' className='text-lg text-black font-semibold'>
				Home
			</NavLink>
			<NavLink to='contact' className='text-lg text-black font-semibold'>
				Contact
			</NavLink>
			<NavLink to='about' className='text-lg text-black font-semibold'>
				About
			</NavLink>
			<NavLink to='profile' className='text-lg text-black font-semibold'>
				Profile
			</NavLink>
		</nav>
	);
}
export default Navbar;
