"use client";
import React, { useState } from "react";
import Image from "next/image";

import LoginForm from "./login-form";
import { useAuth } from "@/contexts/AuthContext";

const LoginSection: React.FC = () => {
  useAuth();
  return (
    <div className="flex  h-screen py-5">
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
