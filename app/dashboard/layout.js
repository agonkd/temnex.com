"use client";

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
        <main className='h-screen bg-gray-100 flex md:p-6 p-4 md:gap-6 gap-4'>
            <aside className='bg-white md:p-3 p-1 md:w-72 rounded-xl'>
                <ul className='space-y-3'>
                    <li className='pb-3 flex items-center gap-3 border-b'>
                        <Image src="https://placehold.co/50x50" width={50} height={50} unoptimized alt='profile' className='rounded-full md:p-0 p-1'></Image>
                        <div className='md:block hidden'>
                            <p>Adrian Koshi</p>
                            <span className='text-sm text-grey'>agon@email.com</span>
                        </div>
                    </li>
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
    );
}

export default Layout;
