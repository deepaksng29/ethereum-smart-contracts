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
    
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.abi))
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0], gas: "1000000" });

    await factory.methods.createCampaign(web.utils.toWei("1", "ether")).send({
        from: accounts[0],
        gas: "1000000"
    });

    await factory.methods.createCampaign(web.utils.toWei("0.5", "ether")).send({
        from: accounts[1],
        gas: "1000000"
    });

    await factory.methods.createCampaign(web.utils.toWei("1.5", "ether")).send({
        from: accounts[2],
        gas: "1000000"
    });

    await factory.methods.createCampaign(web.utils.toWei("5", "ether")).send({
        from: accounts[3],
        gas: "1000000"
    });

    const deployedCampaigns = factory.methods.getDeployedCampaigns().call();

    for (let campaign in deployedCampaigns) {
        contract = await new web3.eth.Contract(JSON.parse(campaignContract.abi), campaign);
        compaigns.push();
    }
});

