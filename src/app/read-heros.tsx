import React, { useEffect, useState } from 'react';
import { type BaseError, useReadContracts } from 'wagmi'
import { SendTransaction } from './send-transaction';
import { ReadContract } from './read-contract';
import { BuyJaiTokens } from './jaiHandler';

export function ReadHeros() {
    
    return (
      <>
      <div className="flex flex-col items-center text-center justify-center pb-6">
        <div className=''>
          <ReadContract />
        </div>
        <div className='border'>
          <SendTransaction />
        </div>
        <div className='border'>
          <BuyJaiTokens />
        </div>
      </div>
      </>
    );
      
}