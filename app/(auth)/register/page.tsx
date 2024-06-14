import Link from "next/link";
import Form from "./_components/form";

function Register() {
  return (
    <main className="min-h-screen ">
      <div className="container flex flex-col md:flex-row ">
        {/* Image Section */}
        <div className=" hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500  items-center justify-center">
          <img
            src="/images/signup-page.jpg"
            alt="Sign Up"
            className="max-w-full max-h-full object-cover"
          />
        </div>{" "}
        {/* Form Section */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16">
          <div className="mb-8  flex justify-between ">
            <h1 className="text-3xl font-bold text-center md:text-left">
              Create an account
            </h1>
            <Link href={"/auth/login"} className="text-sm underline">
              login instead
            </Link>
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}

export default Register;
