import * as React from 'react'
import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from 'wagmi' 
import { Address } from "viem";
import { wagmiConfig } from './artifacts/wagmiABI'; 

export function BuyJaiTokens() {
  const { 
    data: hash, 
    error,
    isPending,
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    // const to = formData.get('to') as string
    const tokenId = formData.get('tokenId') as string 
    // const uri = formData.get('uri') as string
    writeContract({ 
      address: wagmiConfig.address as Address,
      abi: wagmiConfig.abi, 
      functionName: 'buyTokens', 
      args: [BigInt(tokenId)], 
    }) 
  }
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
  }) 

  return (
    <div className='ml-8'>
    <form onSubmit={submit} className="flex flex-col space-y-2">  
        <div className="flex items-center my-3">
            <span className="text-gray-700 dark:text-gray-200">USDC Amount:</span>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="flex items-center my-6">
            <input name="tokenId" placeholder="100" required className="my-3 flex-grow rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>
        <div className="flex items-center my-3">
            <button disabled={isPending} type="submit" className="my-3 flex-grow disabled:opacity-50 rounded-md bg-indigo-600 py-2 px-4 text-white font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {isPending ? 'Confirmando...' : 'Buy JAI'} 
            </button>
            {hash && <div className="text-gray-700 dark:text-gray-200">Transaction Hash: {hash}</div>} 
            {isConfirming && <div className="text-gray-700 dark:text-gray-200">Esperando confirmación...</div>} 
            {isConfirmed && <div className="text-green-500">Transacción confirmada.</div>} 
            {error && ( 
                <div className="text-red-500">{error && (error as BaseError).shortMessage || error.message}</div> 
            )} 
        </div>
    </form>
    </div>
  )
}
