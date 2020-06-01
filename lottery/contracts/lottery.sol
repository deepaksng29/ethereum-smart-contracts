// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.8;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(
            msg.value > 1 ether,
            "Insufficient amount of Ether"
        );
        players.push(msg.sender);
    }
}