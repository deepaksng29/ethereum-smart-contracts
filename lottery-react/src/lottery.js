import web3 from "./web3";

/* ---- Contract address and ABI ---- */
const contractAddress = "0x0DF055b0d5dcD91269EcCcc75470B56D13999742";
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, 
    {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, 
    {
        "inputs": [],
        "name": "getPlayers",
        "outputs": [
            {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, 
    {
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }, 
    {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, 
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "players",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

/* ---- Local contract instance ---- */
export default new web3.eth.Contract(contractABI, contractAddress);