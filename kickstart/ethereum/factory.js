import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

/* ---- Create instance of the factory contract from the Rinkeby blockchain ---- */
const contract = new web3.eth.Contract(
    CampaignFactory.abi,
    "0x77EbbCaeb1Da484Ad3bDfc4281cc9445b4a79834"
);

export default contract;