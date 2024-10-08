"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { RiToolsFill } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import constants from '@/app/_components/constants';
import Button from '@/app/_components/utils/Button';

export const getUserMessages = (chats, userId) => {
    const user = chats.find(chat => chat.id === userId);
    return user ? user.messages : [];
};

const Chat = () => {
    const { chat } = useParams();
    const userId = parseInt(chat); // Ensure chat is an integer
    const messages = getUserMessages(constants.chats, userId);

    const user = constants.chats.find(chat => chat.id === userId);

    if (!user) {
        return <div>User not found</div>; // Handle invalid user case
    }

    return (
        <div className='h-full flex flex-col scrollbar-hidden rounded-xl'>
            <div className='bg-white md:p-6 p-4 flex justify-between items-center sticky top-0 shadow'>
                <div className='flex items-center md:gap-6 gap-4'>
                    <Image
                        src="https://placehold.co/50x50"
                        unoptimized
                        width={50}
                        height={50}
                        alt='profile'
                        className='rounded-lg'
                    />
                    <div>
                        <p className='text-lg font-semibold text-dark'>{user.user}</p>
                        <span className='text-sm text-grey'>last seen {user.lastSeen}</span>
                    </div>
                </div>
                <button className='text-xl'>
                    <RiToolsFill />
                </button>
            </div>
            <ul className='h-full md:p-6 p-4 md:space-y-6 space-y-4 font-light text-black/75 scrollbar-hidden overflow-auto'>
                {messages ? (
                    messages.map((msg, index) => (
                        <li className={`p-3 rounded-lg max-w-[60%] shadow ${msg.m_id == chat ? 'bg-slate-50' : 'ml-auto bg-slate-200'}`} key={msg.index}>
                            {msg.message}
                            <span className='flex items-center text-sm text-grey font-extralight'><IoIosCheckmark className='text-xl' />{msg.sent_at}</span>
                        </li>
                    ))
                ) : (
                    <span className='text-grey'>No messages found.</span>
                )}
            </ul>
            <form className='md:p-6 p-4 bg-white flex md:gap-6 gap-4'>
                <input type='text' className='w-full px-3 py-2 border rounded-lg' placeholder='Type here...'></input>
                <Button>Send</Button>
            </form>
        </div>
    );
}

export default Chat;
