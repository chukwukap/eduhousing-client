import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";

function Header() {
	return (
		<header className=' w-full  h-16 shadow-md p-4 flex items-center'>
			<div className='w-5/6 mx-auto flex items-center d justify-between'>
				<Logo />
				<Navbar />
			</div>
		</header>
	);
}
export default Header;
