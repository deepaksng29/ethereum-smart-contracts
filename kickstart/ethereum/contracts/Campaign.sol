pragma solidity ^0.6.10;
// SPDX-License-Identifier: UNLICENSED

/* --- Factory contract (manager for deploying new instances of 'Campaign') --- */
contract CampaignFactory {
    /* ---- Stores all deployed campaigns ---- */
    address[] public deployedCampaigns;
    
    /* ---- Deploys new campaign in blockchain ---- */
    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign.getAddress());
    }
    
    /* ---- Returns all deployed campaigns in blockchain ---- */
    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

/* --- Campaign contract --- */
contract Campaign {
    /* ---- Struct storing a request for approval for funds transfer ---- */
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    /* ---- Stores all funds requests made by the manager ---- */
    Request[] public requests;
    
    /* ---- Stores the EOA's address for the manager ---- */
    address public manager;
    
    /* ---- Stores the minimum contribution allowed ---- */
    uint public minimumContribution;
    
    /* ---- Stores in a hash table a list of contributors ---- */
    mapping(address => bool) public approvers;
    
    /* ---- Number of contributors ---- */
    uint public approversCount;
    
    /* ---- Modifier to restrict access only for the manager ---- */
    modifier restricted() {
        require(msg.sender == manager, "Access denied. Only the manager can access this function.");
        _;
    }
    
    /* ---- Constructor of class 'Campaign' ---- */
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    /* ---- Contribute to the campaign ---- */
    function contribute() public payable {
        require(msg.value > minimumContribution, "Value of transaction does not meet minimum contribution value.");
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    /* ---- Create a funds transfer request for approval ---- */
    function createRequest(string memory description, uint value, address payable recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    /* ---- Approve a request (for contributors) ---- */
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender], "Access denied. Only contributors can approve requests.");
        require(!request.approvals[msg.sender], "Access denied. You have already approved this request.");
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    /* ---- Finalise request (transfer funds) ---- */
    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(
            !request.complete, 
            "ERROR: Request has already been finalised."
        );
        require(
            request.approvalCount > (approversCount / 2), 
            "50% of contributors still haven't approved this request."
        ); 

        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    /* ---- Return address of contract ---- */
    function getAddress() public view returns (address) {
        return address(this);
    }
}