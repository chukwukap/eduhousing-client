import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";

function Header() {
	return (
		<header className='h-16 w-full px-2 py-8 flex items-center border-b-2 border-solid'>
			<Logo />
			<Navbar />
		</header>
	);
}
export default Header;
