import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="min-h-16 w-full  border-b-2 border-solid">
      <div className="container w-full px-2 py-3 flex items-center justify-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
