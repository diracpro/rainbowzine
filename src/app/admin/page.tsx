"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle, { Logo } from '../components/themeIcon';
import { MintNFT } from '../mint-nft' 

function Admin() {
    return (
        <>
        <header className='max-w-7xl mx-auto flex items-center justify-between'>
          <Link href={''}>
            <Logo />
          </Link>
          <nav className='flex gap-5 p-5 text-gray-500 font-semibold'>
            {/* <button onClick={() => handleClick('home')}>Inicio</button>
            <button onClick={() => handleClick('market')}>Colección</button> */}
            {/* <Link href={''} className='bg-gray-200 rounded-full px-6'>Mint</Link> */}
            <ThemeToggle/>
          </nav>
        </header>

        <section id="admin" className='max-w-7xl mx-auto items-center justify-center'>

            <div className="flex flex-col sm:grid sm:grid-cols-4 sm:gap-4">
                <div className="col-span-1 p-3">
                  <h2 className='pb-3'>Mint NFT</h2>
                  <h2 className='pb-3'>Users</h2>
                  <h2 className='pb-3'>Transactions</h2>
                </div>
                <div className="col-span-3 mx-auto w-3/4 py-10">
                    <h2 className="text-3xl py-9 font-bold text-center text-gray-800 dark:text-gray-200">Mint</h2>
                    <MintNFT /> 
                </div>
            </div>
    
        </section>
        </>
  );
}

export default Admin;