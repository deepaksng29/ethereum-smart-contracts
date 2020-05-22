// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.8;

contract Inbox {
    string private message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function SetMessage(string memory newMessage) public {
        message = newMessage;
    }

    function GetMessage() public view returns (string memory) {
        return message;
    }
}