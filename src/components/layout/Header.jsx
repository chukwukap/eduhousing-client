import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";

function Header() {
  return (
    <header className="h-16 w-full  border-b-2 border-solid">
      <div className="container w-full px-2 py-3 flex items-center ">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
