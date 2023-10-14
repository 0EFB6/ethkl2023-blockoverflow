// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DepositInsuranceSystem {
    address public owner;
    uint256 public totalFunds;
    // 10 percent
    uint256 public constant COVERAGE_PERCENTAGE = 10;
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

    function deposit() external payable {
        uint256 totalFund = 10e18;
        uint256 tempFund = totalFund * COVERAGE_PERCENTAGE / 100;
        require(msg.value > 0, "Deposit amount must be greater than 0");
        require(msg.value >= tempFund, "Deposit amount must be greater than 10% of exchange's fund");
        
        insuredBalances[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function claimInsurance() external {
        require(insuredBalances[msg.sender] > 0, "No insured balance");
        uint256 claimAmount = insuredBalances[msg.sender];
        insuredBalances[msg.sender] -= claimAmount;
        totalFunds -= claimAmount;
        payable(msg.sender).transfer(claimAmount);
        emit InsuranceClaim(msg.sender, claimAmount);
    }

    function fundBalance() public view returns (uint256) {
        return address(this).balance;
    }
}