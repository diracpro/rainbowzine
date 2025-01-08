import { type BaseError, useReadContracts } from 'wagmi'
import { wagmiConfig } from './artifacts/wagmiABI';
import { Address } from 'viem';

export function ReadContract() {
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
        args: ['0x7Af53A6599628AE87F77A4F7a4bA82fE999CE0BA' as Address],
    }, { 
        ...wagmiConfig, 
        functionName: 'owner', 
      }, { 
        ...wagmiConfig, 
        functionName: 'symbol', 
      } 
    ] 
  });
  
  // console.log('wagmiConfig:', wagmiConfig); // Log the entire configuration object
  // console.log('Object passed to useReadContracts:', // Log specific properties
  // { 
  //   address: wagmiConfig.address,
  //   abi: wagmiConfig.abi,
  // });

  const [name, balance, owner, symbol] = data || [] 
  // console.log('balance', balance);
  // console.log('owner', owner);

  if (isPending) return <div>Loading...</div>

  if (error)
    return (
      <div>
        Error: {(error as BaseError).shortMessage || error.message}
      </div>
    ) 

  return (
    <>
      <div>Name: {name?.result?.toString()}&nbsp;&nbsp;Symbol: {symbol?.result?.toString()}</div>
      <div>Balance: {balance?.result?.toString()}</div>
      {/* <div>Owner: {owner?.result?.toString()}</div>  */}
      {/* <div>Total Supply: {totalSupply?.toString()}</div>  */}
    </>
  )
}