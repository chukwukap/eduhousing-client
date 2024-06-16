import Link from "next/link";

function Logo() {
  return (
    <div className="w-lg lg:ml-4 mr-auto">
      <Link href="/">
        <img className="w-10 md:w-full" src="/logo.png" alt="Logo" />
      </Link>
    </div>
  );
}
export default Logo;
