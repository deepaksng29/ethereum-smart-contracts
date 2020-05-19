pragma solidity ^0.6.8;

contract Faucet {
    function withdraw(uint256 withdraw_amount) public {
        require(withdraw_amount <= 0.1 ether);
        msg.sender.transfer(withdraw_amount);
    }

    receive() external payable {}
}