import * as React from 'react';
import Link from 'next/link';

function StickyNav() {
    return (
   
        <nav className='sticky top-0 font-pop font-bold w-full flex justify-center items-center content-center mx-auto space-x-4 p-6 bg-white bg-opacity-60 backdrop-blur dark:bg-black dark:bg-opacity-60 dark:backdrop-blur text-gray-800'>
          <Link href={'#main'} className='bg-gray-200 rounded-lg py-2 px-5 flex justify-center content-center min-w-32'>Proyecto</Link>
          <Link href={'#scroll'} className='bg-gray-200 rounded-lg py-2 px-5 flex justify-center content-center min-w-32'>Roadmap</Link>
          <Link href={'#faq'} className='bg-gray-200 rounded-lg py-2 px-5 flex justify-center content-center min-w-32'>FAQ</Link>
        </nav>
      
    );
}
export default StickyNav;