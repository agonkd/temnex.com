"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch, CiGrid41 } from "react-icons/ci";
import React, { useState } from "react";
import Button from "../utils/Button";
import constants from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  // Render Navbar based on pathname
  if (pathname !== "/") {
    return (
      <nav className="text-sm flex items-center border-b px-8 py-4 md:px-20 lg:px-24 xl:px-32 divide-x">
        <Link href="/" className="flex items-center justify-center mr-6">
          <Image
            src="/brand/logo.svg"
            alt="Logo"
            width={125}
            height={125}
            priority
          />
        </Link>
        <div className="w-full flex items-center divide-x">
          <div className="relative w-full flex justify-between px-6">
            <div>
              <Link href={"/categories"} className="flex items-center gap-1">
                <CiGrid41 className="text-xl" />
                Categories
              </Link>
            </div>
            <ul className="flex gap-6">
              {constants.navItems.map((item) => (
                <li className="group">
                  <div key={item.href} className="flex items-center">
                    <Link href={item.href} className="flex items-center gap-1">
                      {item.text}
                      {item.icon}
                    </Link>
                  </div>
                  {item.subItems && (
                    <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-11 w-full bg-white z-[999] border border-t-0 transition-all">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href} className="group">
                          <Link
                            href={subItem.href}
                            className="flex items-center gap-1 p-2 hover:bg-gray-100 transition"
                          >
                            {subItem.text}
                            {subItem.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ul className="pl-6 flex items-center gap-6 whitespace-nowrap">
            <li>
              <CiSearch className="text-xl" />
            </li>
            <li>
              <Link href="/sign-up">Become a Seller</Link>
            </li>
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
            <li>
              <Button size="small">Join</Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <div className="absolute z-20 w-full">
      <div className="flex items-center justify-around px-8 py-4 text-white">
        <div className="logo">
        <Link href="/" className="flex items-center justify-center mr-6">
          <img
            src="images/temnex_logo.png"
            alt="Temnex"
            className="w-32"
          />
          </Link>
        </div>

        {/* Burger Menu Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="py-2 px-4 bg-transparent hover:bg-gray-600 rounded-full">
            Categories
          </button>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Browse Jobs</li>
            <li>Users</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="bg-transparent text-white font-nasalization"><Link href="/sign-up">Become a Seller</Link></button>
          <button><Link href="/sign-in">Sign in</Link></button>
          <button className="bg-white text-black py-2 px-4 rounded-full"><Link href="/sign-up">Join</Link></button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-purple-900 text-white z-50 flex flex-col justify-center items-center space-y-6 md:hidden">
          <button
            className="absolute top-4 right-4 text-4xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="space-y-6 text-2xl">
            <li>Home</li>
            <li>Browse Jobs</li>
            <li>Users</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-col space-y-4">
            <button>Become a Seller</button>
            <button>Sign in</button>
            <button className="bg-gray-200 text-black py-2 px-4 rounded-full">Join</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
