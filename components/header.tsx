"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bitcoin, Menu, Search, Wallet, X } from "lucide-react";
// import { HiMenuAlt3, HiX, HiSearch, HiWallet } from 'react-icons/hi';
// import { FaEthereum } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky z-10 bg-slate-100/50 backdrop-blur-sm">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 opacity-75"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-md"></div> */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-stone-500 flex items-center"
            >
              <Bitcoin className="mr-2" /> My dApp
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-stone-500 hover:text-stone-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-stone-500 hover:text-stone-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-stone-500 hover:text-stone-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-stone-500 hover:text-stone-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="text-stone-500 hover:text-stone-400 transition-colors duration-300 mr-4"
              onClick={toggleSearch}
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-stone-500 hover:text-stone-400 transition-colors duration-300 mr-4 flex items-center"
            >
              <Wallet className="h-6 w-6 mr-2" />
              Connect Wallet
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-500 hover:text-stone-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-stone-500 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-stone-500 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-stone-500 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-16 bg-stone-700 p-4 shadow-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-stone-600 text-stone-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                className="text-stone-500 hover:text-stone-400 transition-colors duration-300"
                onClick={toggleSearch}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
