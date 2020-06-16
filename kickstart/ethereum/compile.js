const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

/* ---- Build path to 'build' folder and remove all contents ---- */
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

/* ---- Read Solidity contract source-code ---- */
const contractPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const sourcecode = fs.readFileSync(contractPath, "utf-8");

const solJSONOutput = {
    language: "Solidity",
    sources: {
        "Campaign.sol" : {
            content: sourcecode
        }
    },
    settings: {
        outputSelection: {
            "Campaign.sol" : {
                "CampaignFactory" : [ "abi", "evm.bytecode" ],
                "Campaign" : ["abi", "evm.bytecode"]
            }
        }
    }
}

/* ---- Compiling contract ---- */
const contracts = JSON.parse(solc.compile(JSON.stringify(solJSONOutput))).contracts["Campaign.sol"];

/* ---- Ensure that 'build' folder is existent ---- */
fs.ensureDirSync(buildPath);

for (let contract in contracts) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract + ".json"),
        contracts[contract]
    );
}