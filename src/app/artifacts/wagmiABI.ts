import { Address } from "viem";

export const wagmiConfig = {
    address: '0xC1e9DB5F6Bc108A910CC9662AD85E774aFdDD1db' as Address,
    abi: [
        {"inputs":[],
        "name":"name",
        "outputs":[{"internalType":"string","name":"","type":"string"}],
        "stateMutability":"view",
        "type":"function"},
        {"inputs":[{"internalType":"address","name":"account","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
        "stateMutability":"view",
        "type":"function"},
        {"inputs":[],
        "name":"owner",
        "outputs":[{"internalType":"address","name":"","type":"address"}],
        "stateMutability":"view",
        "type":"function"},
        {"inputs":[],
        "name":"symbol",
        "outputs":[{"internalType":"string","name":"","type":"string"}],
        "stateMutability":"view",
        "type":"function"}
    ],
};