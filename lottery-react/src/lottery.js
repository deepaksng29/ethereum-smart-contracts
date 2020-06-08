import web3 from "./web3";

/* ---- Contract address and ABI ---- */
const contractAddress = "0x5Ed98557EfA75163bcCce0F7Aa0074B76244CBA2";
const contractABI = [ 
    { 
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
        constant: undefined,
        payable: undefined,
        signature: 'constructor' 
    },
    { 
        inputs: [],
        name: 'enter',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        constant: undefined,
        payable: true,
        signature: '0xe97dcb62' 
    },
    { 
        inputs: [],
        name: 'getPlayers',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
        payable: undefined,
        signature: '0x8b5b9ccc' 
    },
    { 
        inputs: [],
        name: 'manager',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
        payable: undefined,
        signature: '0x481c6a75' 
    },
    { 
        inputs: [],
        name: 'pickWinner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        constant: undefined,
        payable: undefined,
        signature: '0x5d495aea' 
    },
    { 
        inputs: [ [Object] ],
        name: 'players',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
        payable: undefined,
        signature: '0xf71d96cb' 
    }
];

/* ---- Local contract instance ---- */
export default new web3.eth.Contract(contractABI, contractAddress);

