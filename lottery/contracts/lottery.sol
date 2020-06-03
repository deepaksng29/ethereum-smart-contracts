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
    
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        address payable winner = payable(players[index]);
        winner.transfer(address(this).balance);
        delete players;
    }
    
    modifier restricted() {
        require(msg.sender == manager, "Permission denied. Only the manager can run this operation.");
        _;
    }
    
    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}