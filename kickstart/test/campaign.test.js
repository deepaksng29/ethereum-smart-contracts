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
        for (let i = 1; i < accounts.length-1; i++) {
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

    it("Allows manager to make a payment request", async () => {
        await campaigns[0].methods
            .createRequest("Buy batteries", web3.utils.toWei("4", "ether"), accounts[5])
            .send({
                from: accounts[0],
                gasLimit: "5000000"    
            });
        const request = await campaigns[0].methods.requests(0).call();

        assert.equal("Buy batteries", request.description);
    });

    it("Processes requests", async () => {
        await campaigns[0].methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei("10", "ether")
        });

        await campaigns[0].methods
            .createRequest("A", web3.utils.toWei("5", "ether"), accounts[9])
            .send({ from: accounts[0], gasLimit: "1000000" 
        });

        await campaigns[0].methods.approveRequest(0).send({
            from: accounts[0],
            gasLimit: "1000000"
        });
        
        await campaigns[0].methods.finaliseRequest(0).send({
            from: accounts[0],
            gasLimit: "1000000"
        });

        let balance = await web3.eth.getBalance(accounts[9]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        assert(balance > 104)
    });
});

