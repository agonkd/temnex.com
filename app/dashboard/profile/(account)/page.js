"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSpotify } from 'react-icons/fa';

const Account = () => {
    // State to track which item is expanded
    const [expandedItem, setExpandedItem] = useState(null);

    // Toggle the expanded state
    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <div className='flex flex-col md:gap-6 gap-4'>
            <Link href="/dashboard/profile/cv" className='bg-white w-fit text-primary px-6 py-2 rounded-lg '>View CV</Link>
            <div className='bg-white flex md:flex-row flex-col justify-between md:items-center gap-6 p-6 rounded-xl'>
                <div className='flex items-center md:gap-6 gap-4'>
                    <Image src="https://placehold.co/75x75" width={75} height={75} unoptimized className="rounded-xl" />
                    <div>
                        <p className='text-xl font-bold'>Filan Fisteku</p>
                        <p className='text-gray-500'>filanfisteku@email.com</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <p className='text-gray-500 text-sm'>Switch to passive</p>
                    <div className='relative w-10 h-5 rounded-full bg-gray-600'>
                        <span className='absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white'></span>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-xl p-6 space-y-6'>
                <p className='text-xl'>Basic Info</p>
                <form className='grid lg:grid-cols-4 gap-6'>
                    <div className='col-span-2 grid gap-2'>
                        <label className='text-sm'>First Name</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='First Name'></input>
                    </div>
                    <div className='col-span-2 grid gap-2'>
                        <label className='text-sm'>Last Name</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='Last Name'></input>
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm'>Gender</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='Gender'></input>
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm'>Birth Date</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='First Name'></input>
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm'>Day</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='1'></input>
                    </div>
                    <div className='grid gap-2'>
                        <label className='text-sm'>Year</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='2002'></input>
                    </div>
                    <div className='col-span-2 grid gap-2'>
                        <label className='text-sm'>Email</label>
                        <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder='example@email.com'></input>
                    </div>
                    <div className='col-span-2 mt-auto'>
                        <button type='button' className='w-full py-2 px-6 rounded-xl border border-black'>Update Profile</button>
                    </div>
                </form>
            </div>
            <div className='bg-white rounded-xl p-6 space-y-6'>
                <p className='text-xl'>Change Password</p>
                <form className='grid gap-6'>
                    {/* Password inputs */}
                    {['Current Password', 'New Password', 'Confirm new Password'].map((label, i) => (
                        <div key={i} className='grid gap-2'>
                            <label className='text-sm'>{label}</label>
                            <input type="text" className='rounded-xl py-2 px-3 outline-none border' placeholder={label}></input>
                        </div>
                    ))}
                    <div className='mt-auto'>
                        <button type='button' className='w-full py-2 px-6 rounded-xl border border-black'>Update Profile</button>
                    </div>
                </form>
            </div>
            <div className='bg-white rounded-xl p-6 space-y-6'>
                <div className='flex justify-between'>
                    <p className='text-xl'>Two-factor authentication</p>
                    <span className='bg-green-200 text-green-700 text-xs rounded py-1 px-3 font-semibold leading-loose'>ENABLED</span>
                </div>
                <div className='divide-y'>
                    {/* Security details */}
                    {[
                        { label: 'Security keys', value: 'No Security Keys', button: 'ADD' },
                        { label: 'SMS number', value: '+4012374423', button: 'EDIT' },
                        { label: 'Authenticator app', value: 'Not Configured', button: 'SET UP' }
                    ].map((item, index) => (
                        <div key={index} className='py-6 flex justify-between items-center'>
                            <p>{item.label}</p>
                            <div className='flex items-center gap-3'>
                                <span className='text-gray-500 font-light'>{item.value}</span>
                                <button type='button' className='py-2 px-6 rounded border border-black text-xs'>{item.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-white rounded-xl p-6 space-y-6'>
                <div className='space-y-2'>
                    <p className='text-xl'>Authenticator app</p>
                    <p className='text-gray-500'>Here you can setup and manage your integration settings.</p>
                </div>
                <ul className='divide-y'>
                    {[0, 1].map((item, index) => (
                        <li key={index} className='transition-all duration-300 ease-in-out'>
                            <div
                                className='bg-white flex flex-col cursor-pointer'
                                onClick={() => toggleExpand(index)}
                            >
                                <div className='flex justify-between items-center p-4'>
                                    <div className='relative flex items-center gap-4'>
                                        <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center'>
                                            <FaSpotify className='text-white' />
                                        </div>
                                        <div>
                                            <p className='text-2xl'>Spotify</p>
                                            <p className='text-gray-500'>Music</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6'>
                                        <p className='text-gray-500 text-sm'>Enabled</p>
                                        <div className='relative w-10 h-5 rounded-full bg-gray-500'>
                                            <span
                                                className='absolute top-0.5 transition-transform duration-300 ease-in-out right-0.5 w-4 h-4 rounded-full bg-white shadow'
                                            ></span>
                                        </div>
                                        {expandedItem === index ? <FaChevronUp className='text-gray-500' /> : <FaChevronDown className='text-gray-500' />}
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${expandedItem === index ? 'max-h-75' : 'max-h-0'}`}
                                >
                                    <form className='p-6 space-y-6'>
                                        <p className='text-gray-500 mb-4'>You haven't added your Slack yet or you aren't authorized. Please add our Slack Bot to your account by clicking on here. When you've added the bot, send your verification code that you have received.</p>

                                        <div className='bg-gray-100 w-full flex md:flex-row flex-col rounded-xl outline-none p-2'>
                                            <label className='w-full p-2 text-grey'>Verification Code</label>
                                            <input type="text" className='p-2 bg-white border rounded-lg' placeholder='Enter code here'></input>
                                        </div>
                                        <div className='bg-gray-100 w-full flex md:flex-row flex-col md:items-center rounded-xl outline-none p-2'>
                                            <label className='w-full p-2 text-grey'>Connected account</label>
                                            <div className='flex items-center gap-3'>
                                                <input type="text" value="hello@creative-tim.com" className='p-2 bg-transparent text-dark'></input>
                                                <button type='button' className='py-2 px-6 rounded-lg text-white bg-red-500'>Delete</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='bg-white rounded-xl p-6 space-y-6'>
                <div className='space-y-2'>
                    <p className='text-xl'>Detele Account</p>
                    <p className='text-grey'>Once you delete your account, there is no going back. Please be certain.</p>
                </div>
                <div className='flex md:flex-row flex-col gap-6 justify-between md:items-center'>
                    <div className='flex items-center gap-3'>
                        <div className='relative w-10 h-5 rounded-full bg-gray-200'>
                            <span
                                className='absolute top-0.5 transition-transform duration-300 ease-in-out left-0.5 w-4 h-4 rounded-full bg-white shadow'
                            ></span>
                        </div>
                        <div>
                            <p>Confirm</p>
                            <p className='text-sm font-light text-grey'>I want to delte my account.</p>
                        </div>
                    </div>
                    <div className='flex sm:flex-row flex-col gap-3'>
                        <button type='button' className='md:w-fit w-full py-2 px-6 rounded-lg text-grey border border-grey'>Deactivate</button>
                        <button type='button' className='md:w-fit w-full py-2 px-6 rounded-lg text-white bg-red-500'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
