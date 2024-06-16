import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Phone,
  Mail,
  Search,
  Linkedin,
  Facebook,
  Twitter,
  InstagramIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-200 text-stone-700 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="EDU.HOUSING Logo"
              width={150}
              height={50}
            />
            <p className="text-sm">
              Providing quality student housing solutions since 2010. Your
              comfort is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-stone-700 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-stone-700 transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-stone-700 transition"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-stone-700 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-stone-700 text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block hover:text-stone-700 transition"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block hover:text-stone-700 transition"
              >
                Our Services
              </Link>
              <Link
                href="/faq"
                className="block hover:text-stone-700 transition"
              >
                FAQ
              </Link>
              <Link
                href="/privacy-policy"
                className="block hover:text-stone-700 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block hover:text-stone-700 transition"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-stone-700 text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> + 234 9130718322
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> + 234 9130718322
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> support@eduHousing.com
              </p>
              <p className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                <a
                  href="https://www.uni-housing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-700 transition"
                >
                  www.eduHousing.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-stone-700 text-lg font-semibold mb-4">
              Stay Updated
            </h2>
            <p className="text-sm mb-2">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-stone-300 border-stone-700 text-stone-800"
              />
              <Button className="w-full bg-stone-600 hover:bg-stone-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Edu.HOUSING. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/?utm_source=website&utm_medium=cta&utm_campaign=student_housing"
              className="hover:text-stone-700 transition"
            >
              Home
            </Link>
            <Link href="/about" className="hover:text-stone-700 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-stone-700 transition">
              Contact
            </Link>
            <Link href="/sitemap" className="hover:text-stone-700 transition">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
