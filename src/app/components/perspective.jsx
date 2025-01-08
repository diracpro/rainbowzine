import React, { useState } from 'react';

function Perspective() { 

    return (
        <div className='mt-18'>
            <h2 className="font-pop font-bold text-3xl py-9 text-center text-gray-800 dark:text-gray-200">Perspective</h2>

            <div className="mx-8 grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="p-8 rounded overflow-hidden shadow-md bg-gray-400 dark:bg-gray-700">
                <div className="team-member flex flex-col items-center p-2">
                <img src="https://play-lh.googleusercontent.com/_n3qKcBYHSOzKL0b-7ZPaBF6nX4KqhzQiNJ_tgOeikXOGyiGfHNEwQTiDAyk9gwqzg" alt="Team member" className="h-40 w-40 rounded-full object-cover transition duration-300 hover:border" />
                <h3 className="text-xl py-9 font-semibold text-gray-800 dark:text-gray-200">José</h3>
                <p className="font-pop text-gray-600 dark:text-gray-400">Freedom begins within us | Freedom is a concept that must be expressed initially from within, the most complex prison is that of thought.</p>
                </div>
            </div>

            <div className="p-8 rounded overflow-hidden shadow-md bg-gray-400 dark:bg-gray-700">
                <div className="team-member flex flex-col items-center p-2">
                <img src="https://play-lh.googleusercontent.com/_n3qKcBYHSOzKL0b-7ZPaBF6nX4KqhzQiNJ_tgOeikXOGyiGfHNEwQTiDAyk9gwqzg" alt="Team member" className="h-40 w-40 rounded-full object-cover transition duration-300 hover:border" />
                <h3 className="text-xl py-9 font-semibold text-gray-800 dark:text-gray-200">Paul</h3>
                <p className="font-pop text-gray-600 dark:text-gray-400">Financial failure in the system | I think there are pieces that are missing and others that are not well positioned.</p>
                </div>
            </div>

            <div className="p-8 rounded overflow-hidden shadow-md bg-gray-400 dark:bg-gray-700">
                <div className="team-member flex flex-col items-center p-2">
                <img src="https://play-lh.googleusercontent.com/_n3qKcBYHSOzKL0b-7ZPaBF6nX4KqhzQiNJ_tgOeikXOGyiGfHNEwQTiDAyk9gwqzg" alt="Team member" className="h-40 w-40 rounded-full object-cover transition duration-300 hover:border" />
                <h3 className="text-xl py-9 font-semibold text-gray-800 dark:text-gray-200">Cristofer</h3>
                <p className="font-pop text-gray-600 dark:text-gray-400">It's about deciding | In life you will always have 2 options: black or white, red or blue, you choose if you can.</p>
                </div>
            </div>

            <div className="p-8 rounded overflow-hidden shadow-md bg-gray-400 dark:bg-gray-700">
                <div className="team-member flex flex-col items-center p-2">
                <img src="https://play-lh.googleusercontent.com/_n3qKcBYHSOzKL0b-7ZPaBF6nX4KqhzQiNJ_tgOeikXOGyiGfHNEwQTiDAyk9gwqzg" alt="Team member" className="h-40 w-40 rounded-full object-cover transition duration-300 hover:border" />
                <h3 className="text-xl py-9 font-semibold text-gray-800 dark:text-gray-200">Cleibert</h3>
                <p className="font-pop text-gray-600 dark:text-gray-400">"The poor love bread more than freedom."</p>
                </div>
            </div>

            </div>
        </div>
    );
}
export default Perspective;