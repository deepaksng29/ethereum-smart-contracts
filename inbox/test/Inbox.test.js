/* --- Module for unit testing using mocha --- */
const assert = require('assert');

/* --- Module for implementation of local ethereum test network using ganache --- */
const ganache = require('ganache-cli');

/* --- Module for interfacing with ethereum node --- */
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

/* --- Get ABI and Bytecode from compiled Solidity contract --- */
const { abi, bytecode } = require('../compile');

const INITIAL_MESSAGE = "Hi There"
let accounts;
let inbox;

beforeEach(async () =>  {
    /* Get a list of all accounts */
    accounts = await web3.eth.getAccounts();

    /* Deploy contract */
    inbox = await new web3.eth.Contract(abi)
      .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
      .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
      console.log("Address: " + inbox.options.address);
      assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
      let message = await inbox.methods.GetMessage().call();
      assert.equal(message, INITIAL_MESSAGE);
    });

    it('changes the message', async () => {
      const NEW_MESSAGE = "Bye";
      await inbox.methods.SetMessage(NEW_MESSAGE).send({ from: accounts[0], gas: '1000000' });
      let message = await inbox.methods.GetMessage().call();
      assert.equal(message, NEW_MESSAGE);
    });
});
