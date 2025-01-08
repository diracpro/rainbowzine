"use client"
import React, { useState } from 'react';
// import Link from 'next/link';
import ThemeToggle, { Logo, Hero } from './components/themeIcon';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, type UseAccountParameters, useConnect, useDisconnect, useBalance, type BaseError, useReadContracts } from 'wagmi';
import { wagmiConfig } from './artifacts/wagmiABI';
import { Address } from 'viem';
import Modal from './components/modal';
import { motion } from "framer-motion";
// import { ReadHeros } from './read-heros';
// import Footer from './footer'

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance, isLoading, isError } = useBalance({
    address: account.address,
  });

  const [message, setMessage] = useState('Loading');
  const [activeSection, setActiveSection] = useState('home'); 
  const handleClick = (section) => {
      setActiveSection(section);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function ReadContract() {
    const account = useAccount();
    if (account.status === 'connected') {
      address: Address;
    }
    const { 
      data,
      error,
      isPending
    } = useReadContracts({ 
      contracts: [{ 
          ...wagmiConfig,
          functionName: 'name',
      },{ 
          ...wagmiConfig,
          functionName: 'balanceOf',
          args: [account.address as Address],
      }, { 
          ...wagmiConfig, 
          functionName: 'owner', 
        }, { 
          ...wagmiConfig, 
          functionName: 'symbol', 
        } 
      ] 
    });
  
    const [name, balance, owner, symbol] = data || [] 
    console.log('balance', balance);
    // console.log('owner', owner);
  
    if (isPending) return <div>Loading...</div>
  
    if (error)
      return (
        <div>
          Error: {(error as BaseError).shortMessage || error.message}
        </div>
      ) 

      if (balance.result > 0) {
        return (
          <>
            <button onClick={() => handleClick('magazine')}>
              <img className='mt-3' src='https://newcryptorder.com/img/logos/TheRainbowZinev4.svg' alt='The Rainbow Zine'/>
            </button>
          </>
        )
      } else {
        return (
          <>
            <button onClick={() => setIsModalOpen(true)}>
              <img className='mt-3' src='https://newcryptorder.com/img/logos/TheRainbowZinev4.svg' alt='The Rainbow Zine'/>
            </button>
          </>
        )
      }
  }

  return (
    <>
    <header className='mx-auto flex items-center justify-between'></header>

    {activeSection === 'home' && (
      <section id="home" className='mx-auto items-center justify-center font-kumbh'>
        
          <div className="w-full flex flex-wrap ">
            <motion.div
              className="z-40 fixed top-32 left-8 cloud2b"
              initial={{ backgroundSize: "40%", opacity: 0 }}
              animate={{ backgroundSize: "45%", opacity: 1 }}
              transition={{
                backgroundSize: { 
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.9,
                 },
                 opacity: { delay:6, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-30 fixed top-32 left-8 cloud2"
              initial={{ backgroundSize: "40%" }}
              animate={{ y:360 }}
              transition={{
                y: { delay: 3.1, duration: 3, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-40 fixed top-0 left-32 cloud1b"
              initial={{ backgroundSize: "70%", opacity: 0 }}
              animate={{ backgroundSize: "75%", opacity: 1 }}
              transition={{
                backgroundSize: { 
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.9,
                 },
                 opacity: { delay:6, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-30 fixed top-0 left-32 cloud1"
              initial={{ backgroundSize: "65%" }}
              animate={{ y:550, backgroundSize: "70%" }}
              transition={{
                y: { delay: 3.1, duration: 3, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-30 fixed top-36 right-0 character w-1/3"
              initial={{ backgroundSize: "90%", opacity: 0, }}
              animate={{ backgroundSize: "95%", opacity: 1, }}
              transition={{
                opacity: { delay:3.3, duration: 3, ease: "easeOut" },
                backgroundSize: {
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                  repeat: 1,
                  repeatType: "mirror",
                }
              }}
            />
            <motion.div
              className="z-20 fixed top-0 right-0 printmarks"
              initial={{ backgroundSize: "110%" }}
              animate={{ backgroundSize: "90%" }}
              transition={{
                backgroundSize: { delay:3, duration: 3, ease: "easeOut" }
              }}
            />

            {/* SPLATS */}
            <motion.div
              className="z-0 fixed top-0 left-0 psplat"
              initial={{ backgroundSize: "100%" }}
              animate={{ y: 500 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
                delay: 3,
              }}
            />
            <motion.div
              className="z-10 fixed top-0 left-1/4 ysplat"
              initial={{ backgroundSize: "100%" }}
              animate={{ y:500 }}
              transition={{
                y: { delay: 3.1, duration: 3, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-10 fixed top-0 right-0 gsplat"
              initial={{ backgroundSize: "100%" }}
              animate={{ y:400 }}
              transition={{
                y: { delay: 3.1, duration: 1, ease: "easeOut" }
              }}
            />
            <motion.div
              className="z-0 fixed bottom-0 left-1/3 bsplat"
              initial={{ backgroundSize: "100%" }}
              animate={{ y:-500 }}
              transition={{
                y: { delay: 3.5, duration: 2, ease: "easeOut" }
              }}
            />
          </div>
          <div className='z-40 fixed top-1/4 grid grid-cols-3 text-center justify-center'>
            <div className=''>
              
            </div>
            <div className='font-kumbh'>
            <ReadContract />
              
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button onClick={openConnectModal} type="button">
                              <img className='transition ease-in-out delay-150 hover:scale-110 duration-300 mt-3' src='https://newcryptorder.com/img/logos/Wallet_Connect.svg' alt='Wallet Connect'/>
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button onClick={openChainModal} type="button">
                              Wrong network
                            </button>
                          );
                        }

                        return (
                          <div style={{ display: 'flex', gap: 12 }}>
                            <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center', color: 'black', }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button onClick={openAccountModal} style={{ color: 'black' }} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
              <img className='mt-6' src='https://newcryptorder.com/img/logos/InkubatorBlack.svg' alt='Inkubator'/>
            </div>
            <div className=''>
              
            </div>
          </div>
        
      </section>
    )}
    {activeSection === 'magazine' && (
      <section id="magazine" className='mx-auto items-center justify-center font-kumbh'>
        <div className="static flex items-center justify-center flex-col p-8 bg-no-repeat bg-contain bg-[url('https://newcryptorder.com/img/logos/ReaderBG.svg')] ">
          <div className="w-full flex flex-wrap ">
          <button className="w-1/4" onClick={() => handleClick('home')}>
            <img src='https://newcryptorder.com/img/logos/spinelockBlack.svg' alt='Rainbow Magazine'/>
          </button>
          <div className='w-1/2'></div>
          <div className="w-1/4">
            <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                          border: '2px'
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button onClick={openConnectModal} type="button">
                              <img className='mt-3' src='https://newcryptorder.com/img/logos/Wallet_Connect.svg' alt='Wallet Connect'/>
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button onClick={openChainModal} type="button">
                              Wrong network
                            </button>
                          );
                        }

                        return (
                          <div style={{ display: 'flex', gap: 12  }}>
                            <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center', color: 'purple', fontWeight: 'bold' }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button onClick={openAccountModal} style={{ color: 'purple', fontWeight: 'bold' }} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>

          <div className='mt-5 items-center justify-center w-5/6 rounded-lg'>
            <iframe className='w-full mx-auto rounded-lg' height={500} src="https://e.issuu.com/embed.html?u=edcasal&d=the_rainbow_zine_insides_draft_12_16"  allow="clipboard-write,allow-top-navigation,allow-top-navigation-by-user-activation,allow-downloads,allow-scripts,allow-same-origin,allow-popups,allow-modals,allow-popups-to-escape-sandbox,allow-forms"></iframe>
          </div>
          <div className='mt-4 flex columns-4'>
            <div min-w-72>
              
            </div>
            <div>
              <h1 className='mt-4 font-bold'>The Doodle Zine - Issue #1</h1>
            </div>
            <div className='px-6 max-w-sm text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna arcu, sagittis vel euismod at, maximus sit amet sapien.</div>
            <div>
              <img className='w-4/5' src='https://newcryptorder.com/img/logos/Inkubator_lock_BLACK.svg' alt='Inkubator'/>
            </div>
          </div>
          <div><img className="z-10 fixed top-6 left-200" src='https://newcryptorder.com/img/logos/worm.svg' alt='Worm'/></div>
          <div><img className="z-10 fixed top-80 left-0 scale-75" src='https://newcryptorder.com/img/logos/clouds1.png' alt='Clouds'/></div>
          <div><img className="z-10 fixed top-20 right-10 scale-75" src='https://newcryptorder.com/img/logos/clouds2.png' alt='Clouds'/></div>
          <div><img className="z-10 fixed bottom-10 right-10 scale-75" src='https://newcryptorder.com/img/logos/clouds3.png' alt='Clouds'/></div>
        </div>
      </section>
    )}
    {/* Render the modal component conditionally */}
    {isModalOpen && (
      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    )}

    </>
  );
}

export default App;
