/* --- Importing truffle HD Wallet --- */
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

/* --- Extracting EOA linked to mnemonic using Infura Rinkeby node --- */
const provider = new HDWalletProvider(
    "picture proof bottom exact media possible color law aim coin circle rotate",
    "https://rinkeby.infura.io/v3/b73cfce8d0f14c9580a6f63f5175157d"
);

/* --- Creating instance of a Web3 handler using account in the provider --- */
const web3 = new Web3(provider);

/* --- Deploying contract in Rinkeby blockchain using multithreading --- */
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying contract from account: " + accounts[0]);
    const result = await new web3.eth.Contract(abi) // initiating new contract
        .deploy({ data: "0x" + bytecode })
        .send({ from: accounts[0] })
    console.log("Contract deployed at: " + result.options.address);
}

deploy();
