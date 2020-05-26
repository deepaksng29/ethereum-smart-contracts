/* --- This module generates a valid path regardless of OS --- */
const path = require('path');

/* --- This module is for file system access --- */
const fs = require('fs');

/* --- This module is for Solidity compilation --- */
const solc = require('solc');

/* --- Reading Solidity sourcecode --- */
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const solSource = fs.readFileSync(inboxPath, 'utf8');

/* --- Compiling Solidity sourcecode into bytecode version below 0.5.0 --- */
// const solBytecode = solc.compile(solSource, 1); // "1" is the number of contracts

/* --- Compiling Solidity sourcecode into bytecode version higher than 0.5.0 --- */
const sol_json_input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: solSource
        }
    },
    settings: {
        outputSelection: {
            'Inbox.sol': {
                'Inbox': [ "abi", "evm.bytecode" ] // selecting "inbox" contract, and only output abi and bytecode
            }
        }
    }
}

const contract = JSON.parse(solc.compile(JSON.stringify(sol_json_input)));
const abi = contract.contracts["Inbox.sol"].Inbox.abi;
const bytecode = contract.contracts["Inbox.sol"].Inbox.evm.bytecode.object;

/* --- Exporting JSON Object --- */
module.exports = { abi, bytecode };
