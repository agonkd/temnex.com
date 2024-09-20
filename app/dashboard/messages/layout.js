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
