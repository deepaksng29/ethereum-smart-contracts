/* --- Module for unit testing using mocha --- */
const assert = require('assert');

/* --- Module for implementation of local ethereum test network using ganache --- */
const ganache = require('ganache-cli');

/* --- Module for interfacing with ethereum node --- */
const Web3 = require('web3');

/* --- Get ABI and Bytecode from compiled Solidity contract --- */
const contract = require('../compile');

const { abi, bytecode } = require('../compile');

/* --- Initiating web3 --- */
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () =>  {
    /* Get a list of all accounts */
    accounts = await web3.eth.getAccounts();

    /* Deploy contract */
    inbox = await new web3.eth.Contract(abi)
      .deploy({ data: bytecode, arguments: ['Hi There'] })
      .send({ from: accounts[0], gas: '1000000' })


});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});
