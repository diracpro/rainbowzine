import React, { useState } from 'react';

function Comments() {
    const [activeSection, setActiveSection] = useState('com1'); // Initial active section
    const handleClick = (section) => {
    setActiveSection(section);
    };  

    return (
<form action="#" className="space-y-5 mt-20">
    {activeSection === 'com1' && (
        <section id="com1" className='mx-auto items-center justify-center'>
            <div className="mx-auto justify-center items-center text-center overflow-hidden w-full md:w-1/2">
                <h1 className='font-pop font-bold text-2xl md:text-4xl py-7 w-3/4 justify-center items-center text-center mx-auto'>Leave us your comment</h1>
                <textarea id="message" rows="6" className="block p-2.5 mx-auto w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your comment here" required></textarea>
                <button onClick={() => handleClick('com2')} className="w-1/4 min-w-32 ml-3 mt-7 bg-gray-300 dark:bg-gray-900 disabled:opacity-50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                { 'Send'} 
                </button>
            </div>
        </section>
    )}
    {activeSection === 'com2' && (
        <section id="com2" className='mx-auto items-center justify-center'>
            <div className="mx-auto w-full md:w-1/2 justify-center items-center text-center rounded overflow-hidden shadow-md bg-gray-400 dark:bg-gray-700">
                <h1 className='font-pop font-bold md:text-4xl py-7 justify-center items-center text-center mx-auto'>stay tuned!</h1>
                <div className="flex flex-wrap mx-auto w-2/3 pb-8 justify-center items-center text-center">
                    <input type="email" id="email" className="w-1/2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your@email.com" required />
                    <button onClick={() => handleClick('com1')} type="submit" className="w-1/3 min-w-32 ml-3 bg-gray-300 dark:bg-gray-900 disabled:opacity-50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    { 'Subscribe'} 
                    </button>
                </div>
            </div>
        </section>
    )}
</form>
    );
}
export default Comments;