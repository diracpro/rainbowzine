import { Address } from "viem";

export const herosConfig = {
    address: '0x1e2742d0E8c24cD4524BCd277C54549169680d70' as Address,
    abi: [
        {"inputs":[],
        "name":"name",
        "outputs":[{
            "internalType":"string",
            "name":"",
            "type":"string"
        }],
        "stateMutability":"view",
        "type":"function"},
        {"inputs":[{
            "internalType":"address",
            "name":"to",
            "type":"address"
            },{
            "internalType":"uint256",
            "name":"tokenId",
            "type":"uint256"
            },{
            "internalType":"string",
            "name":"uri",
            "type":"string"
            }],
        "name":"safeMint",
        "outputs":[],
        "stateMutability":"nonpayable",
        "type":"function"},
        {"inputs":[{
            "internalType":"uint256",
            "name":"tokenId",
            "type":"uint256"
            }],
        "name":"tokenURI",
        "outputs":[{"internalType":"string","name":"","type":"string"}],
        "stateMutability":"view",
        "type":"function"}
    ],
};