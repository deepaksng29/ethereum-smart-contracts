// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.8;

contract Lottery {
    address private manager;
    address[] private players;
    
    constructor() public {
        manager = msg.sender;    
    }
    
    function GetManager() public view returns (address) {
        return manager;
    }
}
