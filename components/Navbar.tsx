import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between mr-auto w-2/3 gap-4">
      <Link href="/" className="text-lg text-black font-semibold">
        Home
      </Link>
      <Link href="contact" className="text-lg text-black font-semibold">
        Contact
      </Link>
      <Link href="about" className="text-lg text-black font-semibold">
        About
      </Link>
      <Link href="profile" className="text-lg text-black font-semibold">
        Profile
      </Link>
    </nav>
  );
}
export default Navbar;
