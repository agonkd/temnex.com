"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const Account = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const items = [
        { id: 1, name: 'Slack', info: "You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received." },
        { id: 2, name: 'Discord', info: "You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received." },
        { id: 3, name: 'Zoom', info: "You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received." },
    ];

    return (
        <>
            <form className='bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                <p className='text-xl font-medium'>Basic Info</p>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 md:gap-6 gap-4'>
                    <div className='md:col-span-2 justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>First Name</label>
                        <input type="text" placeholder='First Name' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='md:col-span-2 justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>Last Name</label>
                        <input type="text" placeholder='Last Name' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <label for="" className='text-sm font-medium'>Gender</label>
                        <input type="text" placeholder='Gender' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <label for="" className='text-sm font-medium'>Birth Date</label>
                        <input type="text" placeholder='Birth Date' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <input type="text" placeholder='1' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='flex flex-col justify-end gap-2'>
                        <input type="text" placeholder='2024' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='md:col-span-2 justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>Email</label>
                        <input type="text" placeholder='Email' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='md:col-span-2 justify-end flex flex-col gap-2'>
                        <button className='w-full py-2 rounded-lg border border-black bg-black text-white hover:bg-white hover:text-black transition font-semibold'>Save</button>
                    </div>
                </div>
            </form>
            <form className='bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                <p className='text-xl font-medium'>Change Password</p>
                <div className='md:space-y-6 space-y-4'>
                    <div className='justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>Current Password</label>
                        <input type="text" placeholder='Current Password' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>New Password</label>
                        <input type="text" placeholder='New Password' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='justify-end flex flex-col gap-2'>
                        <label for="" className='text-sm font-medium'>Confirm New Password</label>
                        <input type="text" placeholder='Confirm New Password' className='px-3 py-2 border rounded-lg outline-none'></input>
                    </div>
                    <div className='md:col-span-2 justify-end flex flex-col gap-2'>
                        <button className='w-full py-2 rounded-lg border border-black bg-black text-white hover:bg-white hover:text-black transition font-semibold'>Save</button>
                    </div>
                </div>
            </form>
            <form className='bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                <div className='flex md:flex-row flex-col md:justify-between md:items-center'>
                    <p className='text-xl font-medium'>Two-factor Authentication</p>
                    <span className='text-xs font-medium text-green-600 border border-green-600 bg-green-200 p-1.5 rounded'>ENABLED</span>
                </div>
                <div className='divide-y'>
                    <div className='flex justify-between items-center pb-4'>
                        <p className='text-lg text-grey'>Security Keys</p>
                        <div className='flex items-center md:gap-6 gap-4'>
                            <span className='text-grey'>No Security Keys</span>
                            <button className='py-2 px-6 border border-black text-sm rounded hover:bg-black hover:text-white transition'>Add</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-lg text-grey'>SMS number</p>
                        <div className='flex items-center md:gap-6 gap-4'>
                            <span className='text-grey'>+4012374423</span>
                            <button className='py-2 px-6 border border-black text-sm rounded hover:bg-black hover:text-white transition'>Edit</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                        <p className='text-lg text-grey'>Authenticator app</p>
                        <div className='flex items-center md:gap-6 gap-4'>
                            <span className='text-grey'>Not Configured</span>
                            <button className='py-2 px-6 border border-black text-sm rounded hover:bg-black hover:text-white transition'>Setup</button>
                        </div>
                    </div>
                </div>
            </form>
            <form className='bg-white md:p-6 p-4 rounded-xl md:space-y-6 space-y-4'>
                <div className='space-y-2'>
                    <p className='text-xl font-medium'>Account</p>
                    <p className='text-grey'>Here you can setup and manage your integration settings.</p>
                </div>
                <ul className='divide-y'>
                    {items.map((item, index) => (
                        <li key={item.id} className='py-4'>
                            <div className='flex justify-between items-center cursor-pointer' onClick={() => handleToggle(index)}>
                                <div className='flex items-center md:gap-6 gap-4'>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" unoptimized width={30} height={30} alt={item.name}></Image>
                                    <div>
                                        <p className='text-xl font-medium'>{item.name}</p>
                                        <span className='text-sm text-grey'>{expandedIndex === index ? 'Show less' : 'Show more'}</span>
                                    </div>
                                </div>
                                <div className='flex items-center md:gap-6 gap-4'>
                                    <p className='text-grey'>Enabled</p>
                                    <div className='w-10 h-6 border bg-grey p-0.5 flex justify-end items-center rounded-full'>
                                        <span className='block h-full aspect-square rounded-full bg-white'></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'max-h-20' : 'max-h-0'}`}
                                style={{ opacity: expandedIndex === index ? 1 : 0 }}
                            >
                                <p className='mt-2 text-sm text-grey'>{item.info}</p>
                                <form>
                                    <div>
                                        <input></input>
                                    </div>
                                </form>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    )
}

export default Account
