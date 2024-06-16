"use client";
import React from "react";
import { TooltipProvider } from "./ui/tooltip";

import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { AuthProvider } from "@/contexts/AuthContext";
const INFURA_KEY = "";
const ethereumSepolia = {
  id: 11155111,
  token: "ETH",
  label: "Sepolia",
  rpcUrl: "https://rpc.sepolia.org/",
};
const chains = [ethereumSepolia];
const wallets = [injectedModule()];
const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "Web3-Onboard Demo",
    icon: "<svg>App Icon</svg>",
    description: "A demo of Web3-Onboard.",
  },
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <TooltipProvider>{children}</TooltipProvider>;
      </Web3OnboardProvider>
    </AuthProvider>
  );
}

export default Providers;
