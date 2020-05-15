pragma solidity ^0.6.4;

contract Faucet {
    function withdraw(uint256 withdraw_amount) public {
        require(withdraw_amount <= 100000000000000000);
        msg.sender.transfer(withdraw_amount);
    }

    receive() external payable {}
}
