const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

/* ---- Initiate web3 interface with ganache testnet provider ---- */
const web3 = new Web3(ganache.provider());

/* ---- Collect compiled information from contracts ---- */
const campaignFactoryContract = require("../ethereum/build/CampaignFactory.json");
const campaignContract = require("../ethereum/build/Campaign.json");

let accounts
let factory; 
let campaignAddress;
let campaigns = [];

/* ---- Runs before each test ---- */
beforeEach(async () => {
    campaigns = [];

    accounts = await web3.eth.getAccounts();
    
    factory = await new web3.eth.Contract(campaignFactoryContract.abi)
        .deploy({ data: campaignFactoryContract.evm.bytecode.object })
        .send({ from: accounts[0], gasLimit: "5000000" });

    await factory.methods.createCampaign(web3.utils.toWei("1", "ether")).send({
        from: accounts[0],
        gasLimit: "5000000"
    });

    await factory.methods.createCampaign(web3.utils.toWei("0.5", "ether")).send({
        from: accounts[1],
        gasLimit: "5000000"
    });

    await factory.methods.createCampaign(web3.utils.toWei("1.5", "ether")).send({
        from: accounts[2],
        gasLimit: "5000000"
    });

    await factory.methods.createCampaign(web3.utils.toWei("5", "ether")).send({
        from: accounts[3],
        gasLimit: "5000000"
    });

    const deployedCampaigns = await factory.methods.getDeployedCampaigns().call();
        
    for (let i = 0; i < deployedCampaigns.length; i++) {
        contract = await new web3.eth.Contract(campaignContract.abi, deployedCampaigns[i]);
        campaigns.push(contract);
    }
});

describe("Campaigns", () => {
    it("Deploys a factory contract", () => {
        assert.ok(factory.options.address);
    });

    it("Deploys all campaigns", () => {
        assert.ok(campaigns.length == 4);
    });

    it("Address for the manager are correctly set for each campaign", async () => {
        for (let i = 0; i < campaigns.length; i++) {
            const manager = await campaigns[i].methods.manager().call();
            assert.equal(manager, accounts[i]);
        }
    });

    it("Allows people to contribute money and marks them as contributors", async () => {
        let areContributors = true;
        for (let i = 1; i < accounts.length; i++) {
            await campaigns[0].methods.contribute().send({
                value: web3.utils.toWei("2", "ether"),
                from: accounts[i]
            });
            areContributors = await campaigns[0].methods.approvers(accounts[i]).call();
        }
        assert(areContributors);
    });

    it("Requires a minimum contribution", async () => {
        try {
            await campaigns[0].methods.contribute().send({
                value: web3.utils.toWei("0.2", "ether"),
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });
});

