/* --- Path generator --- */
const path = require("path");
const fs = require("fs");

/* --- Solidity compiler --- */
const solc = require("solc");

/* --- Reading Solidity sourcecode --- */
const inboxPath = path.resolve(__dirname, "contracts", "lottery.sol");
const solSource = fs.readFileSync(inboxPath, "utf8");

const sol_json_input = {
    language: "Solidity",
    sources: {
        "Lottery.sol" : {
            content: solSource
        }
    },
    settings: {
        outputSelection: {
            "Lottery.sol" : {
                "Inbox" : [ "abi", "evm.bytecode" ]
            }
        }
    }
}

/* --- Compiling contract and extracting abi and bytecode --- */
const contract = JSON.parse(solc.compile(JSON.stringify(sol_json_input)));
const abi = contract.contracts["Lottery.sol"].Lottery.abi;
const bytecode = contract.contracts["Lottery.sol"].Inbox.evm.bytecode.object;

/* --- Exporting JSON Object --- */
module.exports = { abi, bytecode };