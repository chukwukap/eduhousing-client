"use client";
import React, { useState } from "react";
import Image from "next/image";

import LoginForm from "./login-form";

const LoginSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen py-5">
      <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <Image
          src={"/images/login-image.jpg"}
          alt="Login Image"
          width={500}
          height={500}
          className="object-cover h-full"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginSection;
