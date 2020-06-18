import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

/* ---- Create instance of the factory contract from the Rinkeby blockchain ---- */
const contract = new web3.eth.Contract(
    CampaignFactory.abi,
    "0x03A50758a87CB5C91C85b10d45Ad80C72d4541f0"
);

export default contract;