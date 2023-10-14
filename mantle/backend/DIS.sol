// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DepositInsuranceSystem {
    address private owner; // contract owner (DIS)
    uint256 private totalFund; // DIS total fund
    uint256 private constant MAX_COVERAGE_PERCENTAGE = 25; // 25 percent of totalFund
    uint256 private constant PREMIUM_PERCENTAGE = 10; // 10 percent of exchangetotalFund
    // storing DEX data onchain
    mapping(address => string) private exchangeName;
    mapping(address => uint256[]) private exchangeTotalFunds;
    mapping(address => uint256) private exchangePremium;
    mapping(address => string[]) private exchangeCurrencyCodes;
    


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

    function payPremium(uint256 _totalFund, string memory companyName, string memory currencyCode) external payable {
        uint256 premium = _totalFund * PREMIUM_PERCENTAGE / 100;
        require(msg.value >= premium, "Premium amount must be greater than 10% of exchange's fund");
        
        exchangeTotalFunds[msg.sender].push(_totalFund);
        exchangeName[msg.sender] = companyName;
        exchangeCurrencyCodes[msg.sender].push(currencyCode);
        exchangePremium[msg.sender] += msg.value;
        totalFund += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function claimInsurance(address _exchangeAddress) external onlyOwner{
        require(exchangePremium[_exchangeAddress] > 0, "Haven't paid premium");
        uint256 coverageLimit = totalFund * MAX_COVERAGE_PERCENTAGE / 100;
        uint256 claimAmount = exchangePremium[_exchangeAddress] > coverageLimit ? coverageLimit : exchangePremium[_exchangeAddress];
        exchangePremium[_exchangeAddress] -= claimAmount;
        totalFund -= claimAmount;
        payable(_exchangeAddress).transfer(claimAmount);
        emit InsuranceClaim(_exchangeAddress, claimAmount);
    }


    function fundBalance() public view returns (uint256) {
        return totalFund;
    }

    function getExchangeName(address exchangeAddress) public view returns (string memory) {
        return exchangeName[exchangeAddress];
    }

    function getexchangeTotalFunds(address exchangeAddress) public view returns (uint256[] memory) {
        return exchangeTotalFunds[exchangeAddress];
    }

    function getExchangePremium(address exchangeAddress) public view returns (uint256) {
        return exchangePremium[exchangeAddress];
    }

    function getCurrencyCode(address exchangeAddress) public view returns (string[] memory) {
        return exchangeCurrencyCodes[exchangeAddress];
    }
}
