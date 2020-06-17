import Web3 from "web3";

/* ---- Creating web3 instance using a provider based on where the JS code is loaded ---- */
let web3;

if (typeof window != "undefined" && window.web3 != "undefined") {
    // JS running in the browser and Metamask is running
    web3 = new Web3(window.web3.currentProvider); 
} else {
    // JS running in the server OR user not running Metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/b73cfce8d0f14c9580a6f63f5175157d"
    );
    web3 = new Web3(provider);
}

export default web3;