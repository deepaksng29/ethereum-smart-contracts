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

let lottery;
let accounts;

/* --- Unit Testing --- */
beforeEach(async () => { 
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery Contract", () => {
    it("Deploys a contract", () => {
        assert.ok(lottery.options.address);
    });

    it("Allows an account to enter", async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei("1.1", "ether")
        });
        
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });

    it("Allows multiple accounts to enter", async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei("1.1", "ether")
        });

        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei("2.1", "ether")
        });

        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei("1.4", "ether")
        });
        
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length);
    });

    it("Requires a minimum amount of ether", async () => {
        try {
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 0
            });
            assert(false);
        } catch (exception) {
            assert(exception);    
        }
    });

    it("Only a manager can pick a winner", async () => {
        try {
            await lottery.methods.pickWinner().send({ 
                from: accounts[1] 
            });
            assert(false);
        } catch (exception) {
            assert(exception);    
        }
    });

    it("Picks a winner and transfers funds", async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei("2", "ether")
        });

        const initialBalance = await web3.eth.getBalance(accounts[0]);

        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });

        const finalBalance = await web3.eth.getBalance(accounts[0]);

        const difference = finalBalance - initialBalance;

        assert(difference > web3.utils.toWei("1.8", "ether"));
    });

    it("Lottery is reset after picking a winner", async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei("2", "ether")
        });

        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei("2", "ether")
        });

        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert(players.length == 0);
    });

});