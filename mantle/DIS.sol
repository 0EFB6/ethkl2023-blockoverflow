// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DepositInsuranceSystem {
    address public owner; // contract owner (DIS)
    uint256 public totalFunds; // DIS total fund
    uint256 public constant MAX_COVERAGE_PERCENTAGE = 25; // 25 percent of totalFunds
    uint256 public constant PREMIUM_PERCENTAGE = 10; // 10 percent of exchangeTotalFund
    // storing DEX data onchain
    mapping(address => uint256) public exchangeTotalFund; 
    mapping(address => uint256) public insuredBalances; 


    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount);
    event InsuranceClaim(address indexed account, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function payPremium(uint256 totalFund) external payable {
        exchangeTotalFund[msg.sender] = totalFund;
        uint256 premium = totalFund * PREMIUM_PERCENTAGE / 100;
        // require(msg.value > 0, "Premium amount must be greater than 0");
        require(msg.value >= premium, "Premium amount must be greater than 10% of exchange's fund");
        
        insuredBalances[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function claimInsurance() external {
        require(insuredBalances[msg.sender] > 0, "No insured balance");
        uint256 coverageLimit = totalFunds * MAX_COVERAGE_PERCENTAGE / 100;
        uint256 claimAmount = insuredBalances[msg.sender] > coverageLimit ? coverageLimit : insuredBalances[msg.sender];
        insuredBalances[msg.sender] -= claimAmount;
        totalFunds -= claimAmount;
        payable(msg.sender).transfer(claimAmount);
        emit InsuranceClaim(msg.sender, claimAmount);
    }


    function fundBalance() public view returns (uint256) {
        return totalFunds;
    }
}
