"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch, CiGrid41 } from "react-icons/ci";
import React from "react";
import Button from "../utils/Button";
import constants from "../constants";

const Navbar = () => {
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
  return null;
};

export default Navbar;
