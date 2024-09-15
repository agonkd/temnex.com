<<<<<<< HEAD
"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import constants from '@/app/_components/constants'

const layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='relative h-full grid lg:grid-cols-3 md:gap-6 gap-4'>
            <button
                className='lg:hidden absolute top-0 left-0 z-[999] p-2 bg-blue-500 text-white rounded'
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? 'Close' : 'Open'} Sidebar
            </button>
            <aside className={`lg:relative z-50 absolute top-0 left-0 w-full h-full bg-white rounded-xl overflow-y-auto scrollbar-hidden overflow-auto transition-all ${isSidebarOpen ? '-translate-x-full' : ''}`}>
                <div className='bg-white md:p-6 p-4 space-y-2 sticky top-0'>
                    <p className='text-lg'>Friends</p>
                    <form>
                        <input className='w-full px-3 py-2 border rounded-lg' placeholder='Search Contact'></input>
                    </form>
                </div>
                <ul className='md:space-y-6 space-y-4 md:p-6 p-4'>
                    {
                        constants.chats.map((item, index) => (
                            <li key={index} className='hover:bg-gray-50 transition rounded-lg'>
                                <Link href={`/dashboard/messages/${item.id}`} className='flex items-center gap-3'>
                                    <Image src="https://placehold.co/50x50" unoptimized width={50} height={50} alt='profile' className='rounded-lg' />
                                    <div>
                                        <p className='text-dark font-semibold'>{item.user}</p>
                                        <span className='text-sm text-grey'>{item.lastSeen}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </aside>
            <div className='h-full col-span-2 bg-white rounded-xl flex flex-col scrollbar-hidden overflow-auto'>
                {children}
            </div>
        </div>
    )
}

export default layout
=======
"use client"

import Image from "next/image";
import constants from "@/app/_components/constants";
import Link from "next/link";
import { RiToolsLine } from "react-icons/ri";
import Button from "@/app/_components/utils/Button";

const Layout = ({ children }) => {
    return (
        <div className="h-full md:grid grid-cols-3 flex bg-white md:bg-transparent md:gap-6 gap-4 rounded-xl">
            <nav className="h-full bg-white p-6 rounded-xl space-y-6 static top-16">
                <form action="">
                    <p className="text-lg mb-2">Friends</p>
                    <input type="text" className="w-full px-3 py-2 rounded-xl border outline-none" placeholder="Search Contact"></input>
                </form>
                <ul className="space-y-6 overflow-y-auto">
                    {constants.messages.map((message, index) => (
                        <li key={index} className="flex items-center gap-3 hover:bg-gray-100 transition rounded-xl">
                            <Image src={message.profile} width={50} height={50} unoptimized className="rounded-xl" />
                            <Link
                                href={`/dashboard/messages/${message.id}`}
                                className="w-full flex flex-col -gap-1"
                            >
                                <p className="text-lg">{message.name}</p>
                                <p className="text-sm text-grey">{message.lastSeen}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="bg-white col-span-2 rounded-xl flex flex-col justify-between">
                <nav className="p-6 flex justify-between items-center border-b md:shadow-lg">
                    <div className="flex gap-3">
                        <Image src="https://placehold.co/50x50" width={50} height={50} unoptimized className="rounded-xl" />
                        <div>
                            <p className="text-lg">Agon Kadriu</p>
                            <p className="text-sm text-grey">last seen today at 1:53am</p>
                        </div>
                    </div>
                    <div>
                        <RiToolsLine className="text-xl" />
                    </div>
                </nav>
                <div className="h-full relative p-6">
                    {children}
                </div>
                <form action="" className="flex p-6 pt-0 gap-6">
                    <input type="text" className="w-full px-3 py-2 rounded-xl border outline-none" placeholder="Type Here"></input>
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div >
    );
};

export default Layout;
>>>>>>> a171a4f (Dashboard)
