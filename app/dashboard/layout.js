"use client";
<<<<<<< HEAD

=======
>>>>>>> a171a4f (Dashboard)
import Image from 'next/image';
import React from 'react';
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import constants from '../_components/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children }) => {
    const pathname = usePathname();

    return (
<<<<<<< HEAD
        <main className='h-screen bg-gray-100 flex md:p-6 p-4 md:gap-6 gap-4'>
            <aside className='bg-white md:p-3 p-1 md:w-72 rounded-xl'>
                <ul className='space-y-3'>
                    <li className='pb-3 flex items-center gap-3 border-b'>
                        <Image src="https://placehold.co/50x50" width={50} height={50} unoptimized alt='profile' className='rounded-full md:p-0 p-1'></Image>
=======
        <section className="bg-gray-100 h-screen md:p-6 p-4 flex md:gap-6 gap-4">
            <aside className="bg-white md:w-72 w-full h-full rounded-xl p-4">
                <ul className="space-y-4">
                    <li className="flex lg:flex-row flex-col items-center gap-4 pb-4 border-b border-gray-200">
                        <Image
                            src="https://placehold.co/60x60"
                            width={50}
                            height={50}
                            alt="Profile"
                            unoptimized
                            className="border rounded-full"
                        />
>>>>>>> a171a4f (Dashboard)
                        <div className='md:block hidden'>
                            <p>Agon Kadriu</p>
                            <span className='text-sm text-grey'>agon@email.com</span>
                        </div>
                    </li>
<<<<<<< HEAD
                    {constants.sidebarItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 p-3 ${pathname === item.href ? 'bg-gray-100' : 'hover:bg-gray-100'} transition rounded-lg`}
                            >
                                <div className={`w-fit p-1 rounded ${pathname === item.href ? 'bg-dark text-white' : 'bg-gray-100'} text-lg`}>
                                    {item.icon}
                                </div>
                                <span className={`md:block hidden ${pathname === item.href ? 'text-dark font-medium' : 'text-grey'}`}>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className='flex flex-col w-full md:space-y-6 space-y-4'>
                <nav className='flex justify-between items-center bg-white md:p-6 p-4 w-full rounded-xl h-fit'>
                    <Image src="/brand/logo.svg" width={100} height={100} alt='logo' />
                    <div className='flex gap-3'>
                        <IoMdSettings />
                        <FaBell />
                    </div>
                </nav>
                <div className='h-full md:space-y-6 space-y-4 scrollbar-hidden overflow-auto'>
                    {children}
                </div>
            </section>
        </main>
=======
                    {
                        constants.sidebarItems.map((item, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-4 rounded-md p-2 ${pathname === item.href ? 'bg-gray-100' : ''
                                        }`}
                                >
                                    <span className={`w-8 h-8 flex justify-center items-center text-xl rounded-lg ${pathname === item.href ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                                        {item.icon}
                                    </span>
                                    <p className={`${pathname === item.href ? 'text-black' : 'text-gray-500'} transition md:block hidden`}>
                                        {item.text}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </aside>
            <div className="flex-1 flex flex-col md:gap-6 gap-4">
                <nav className="bg-white p-4 rounded-xl flex justify-between items-center">
                    <Image
                        src="/brand/logo.svg"
                        width={120}
                        height={40}
                        alt="Company Logo"
                    />
                    <ul className="flex gap-4 text-xl">
                        <li>
                            <CiSettings />
                        </li>
                        <li>
                            <CiBellOn />
                        </li>
                    </ul>
                </nav>
                <div className="flex-1 box-border overflow-auto">
                    {children}
                </div>
            </div>
        </section>
>>>>>>> a171a4f (Dashboard)
    );
}

export default Layout;
