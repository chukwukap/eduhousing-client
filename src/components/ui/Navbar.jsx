import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className='flex items-center justify-between'>
			<NavLink to='/' className='text-sm text-black font-semibold'>
				Home
			</NavLink>
			<NavLink to='/' className='text-sm text-black font-semibold'>
				Contact
			</NavLink>
			<NavLink to='/' className='text-sm text-black font-semibold'>
				About
			</NavLink>
			<NavLink to='/' className='text-sm text-black font-semibold'>
				Profile
			</NavLink>
		</nav>
	);
}
export default Navbar;
