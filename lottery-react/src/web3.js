import Web3 from "web3";

/* --- Initiate Web3 using provider from Metamask extension --- */
const web3 = new Web3(window.web3.currentProvider); 

export default web3;