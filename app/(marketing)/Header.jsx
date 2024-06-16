function Header() {
	return (
		<header className='w-full h-16'>
			<div className='w-5/6 mx-auto flex items-center justify-between'>
				<div>
					<img src='/Logo.png' alt='Logo' />
				</div>
				<nav className=''>
					<a href=''>Home</a>
					<a href=''>About Us</a>
					<a href=''>Properties</a>
					<a href=''>Services</a>
				</nav>
			</div>
		</header>
	);
}
export default Header;
