/* --- Module for unit testing --- */
const assert = require("assert");

/* --- Module for local ethereum test network --- */
const ganache = require("ganache-cli");

/* --- Module for handling of blockchain operations --- */
const Web3 = require("web3");
const provider = ganache.provider();
const web3 = new Web3(provider);

/* --- ABI and Bytecode for contract deployment in test network --- */
const { abi, bytecode } = require("../compile");

