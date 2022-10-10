import React from 'react';
import { MdOutlineCancel, MdCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
    const { currentColor, setThemeSettings } = useStateContext();

    return (
        <div className='nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 ' >
            <div className='flex justify-between items-center' >
                <div className='flex gap-3' >
                    <p className='font-semibold text-lg dark:text-gray-200  ' >  Messages          </p>
                    <button
                        className='text-white text-xs rounded p-1 px-2 bg-fuchsia-300 '
                        type='button'
                    >
                        7 new
                    </button>
                </div>
                <Button
                    icon={<MdOutlineCancel />}
                    color='rgb(153, 171, 180) '
                    bgHoverColor='light-gray'
                    size='2xl'
                    borderRadius='50%'
                />
                <button
                    type="button"
                    onClick={() => setThemeSettings(false)}
                    style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
                    className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdCancel />
                    </button>
            </div>
            <div className='mt-5' >
                {chatData.map((item, index) => (
                    <div key={index} className='flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer' >
                        <div className='relative' >
                            <img
                                className='rounded-full h-10 w-10'
                                src={item.image}
                                alt={item.message}
                            />
                            <span
                                style={{ background: item.dotColor }}
                                className='absolute inline-flex rounded-full h-2 w-2 right-0 -top-1 '
                            />
                        </div>
                        <div>
                            <p className='dark:text-gray-200  font-semibold' > {item.message}</p>
                            <p className='dark:text-gray-400 text-gray-500 text-sm ' > {item.desc}</p>
                            <p className='dark:text-gray-400 text-xs text-gray-500 ' > {item.time}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};
export default Chat;