import * as React from 'react'
import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from 'wagmi' 
import { Address } from "viem";
import { herosConfig } from './artifacts/herosABI';

export function MintNFT() {
  const { 
    data: hash, 
    error,
    isPending,
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('to') as string
    const tokenId = formData.get('tokenId') as string 
    const uri = formData.get('uri') as string
    writeContract({ 
      address: herosConfig.address as Address,
      abi: herosConfig.abi, 
      functionName: 'safeMint', 
      args: [String(to), BigInt(tokenId), String(uri)], 
    }) 
  }
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
  }) 

  return (
    <form onSubmit={submit} className="flex flex-col space-y-2">
      <div className="flex items-center">
        <span className="text-gray-700 dark:text-gray-200">To:</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="to" placeholder="0xA0Cf...251e" required className="flex-grow rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 dark:text-gray-200">ID:</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <input name="tokenId" placeholder="69420" required className="flex-grow rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 dark:text-gray-200">URI:</span>&nbsp;&nbsp;
        <input name="uri" placeholder="https://..." required className="flex-grow rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
      </div>
      <button disabled={isPending} type="submit" className="disabled:opacity-50 rounded-md bg-indigo-600 py-2 px-4 text-white font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {isPending ? 'Confirmando...' : 'Mint'} 
      </button>
      {hash && <div className="text-gray-700 dark:text-gray-200">Transaction Hash: {hash}</div>} 
      {isConfirming && <div className="text-gray-700 dark:text-gray-200">Esperando confirmación...</div>} 
      {isConfirmed && <div className="text-green-500">Transacción confirmada.</div>} 
      {error && ( 
        <div className="text-red-500">{error && (error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}

 
//   return (
//     <form onSubmit={submit}>
//       A:&nbsp;<input name="to" placeholder="0xA0Cf…251e" required />&nbsp;&nbsp;
//       ID:&nbsp;<input name="tokenId" placeholder="69420" required />&nbsp;&nbsp;
//       URI:&nbsp;<input name="uri" placeholder="https://..." required />&nbsp;&nbsp;
//       <button disabled={isPending} type="submit">
//         {isPending ? 'Confirmando...' : 'Mint'} 
//       </button>
//       {hash && <div>Transaction Hash: {hash}</div>} 
//       {isConfirming && <div>Esperando confirmación...</div>} 
//       {isConfirmed && <div>Transacción confirmada.</div>} 
//       {error && ( 
//         <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
//       )} 
//     </form>
//   )