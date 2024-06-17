"use client";

import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface University {
  value: string;
  label: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  university: null | University;
}

function Form() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    university: null, // Initialize with null
  });
  const universityOptions = [
    { value: "university-of-lagos", label: "University of Lagos" },
    { value: "university-of-ibadan", label: "University of Ibadan" },
    { value: "university-of-benin", label: "University of Nigeria" },
    // Add more universities as needed
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUniversityChange = (selectedOption: any) => {
    setFormData({
      ...formData,
      university: selectedOption,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://obeisant-ear-ordinary-selection-production.pipeops.app/api/v1/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      console.log(res);
      if (res.ok) {
        // router.push("/auth/verify-email");
        login(formData.email, formData.password);
      }
    } catch (err) {
      setError("An error occurred during sign-up. Please try again.");
      console.error("Sign-up error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="mb-4 md:mb-0 flex-1">
            <label htmlFor="firstName" className="block mb-2 font-bold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-2 font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 font-bold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <label htmlFor="university" className="block mb-2 font-bold">
            University
          </label>
          <Select
            id="university"
            name="university"
            value={formData.university}
            onChange={(option) => handleUniversityChange(option)}
            options={universityOptions}
            placeholder="Select your university"
            className="w-full"
            classNamePrefix="react-select"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-xl transition-colors duration-300 "
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
          <button
            type="button"
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-xl transition-colors duration-300"
          >
            <img
              src="/icons/google.svg"
              alt="Google Icon"
              className="w-5 h-5 rounded-xl"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
    </>
  );
}

export default Form;
