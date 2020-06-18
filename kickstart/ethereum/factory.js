import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

/* ---- Create instance of the factory contract from the Rinkeby blockchain ---- */
const contract = new web3.eth.Contract(
    CampaignFactory.abi,
    "0x56c680546c1D9cbEE9B011796C4E1C0EE441E29A"
);

export default contract;