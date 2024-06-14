const EmailVerificationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md rounded-lg shadow-md p-8 bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">
          Verify Your Email Address
        </h1>
        <p className="text-gray-700 text-base mb-8">
          A verification link has been sent to your email address:{" "}
          {/* Display user email here */}
          <br />
          Please check your inbox (and spam folder) and click the link to
          activate your account.
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 mr-4">
            Verify Now
          </button>
          <button className="text-blue-500 hover:underline font-bold py-2 px-4 disabled:opacity-50">
            Resend Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
