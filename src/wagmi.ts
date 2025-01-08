import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, bsc, bscTestnet } from 'wagmi/chains' // Import BSC chains
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, bsc, bscTestnet],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http('https://bsc-dataseed1.binance.org'), // Add BSC RPC URL
    [bscTestnet.id]: http('https://data-seed-prebsc1.binance.org:8545'), // Add BSC Testnet RPC URL
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
