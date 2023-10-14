# Deposit Insurance System (DIS) for Decentralised Exchange (DEX)

## Table of Contents
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Backend](#backend)
      - [Ethereum](#ethereum)
      - [Mantle](#mantle)
  - [Usage](#usage)
  - [Author](#author)

## Project Overview

This is a project is developed for the ETHKL 2023 hackathon Ethereum and Mantle tracks. It is a Deposit Insurance System (DIS) for Decentralised Exchange (DEX) which aims to reduce the risk of bankruptcy of both exchanges and investors. The DIS provides a mechanism for cryptocurrency exchanges to pay premiums and claim insurance based on a set of rules.

## Features

- Deposit funds as premiums from cryptocurrency exchanges.
- Maintain a total fund for the DIS.
- Record exchange data on-chain, such as company name, premium paid, total funds, and type of currencies.
- Calculate premiums based on a fixed percentage.
- Claim insurance based on a coverage limit.
- Event logging for deposits, withdrawals, and insurance claims.

## Getting Started

### Backend

#### Ethereum
To get started with the project, follow these steps:
1. Go to [Remix IDE](https://remix.ethereum.org/)
2. Click on the `File Explorer` on the left side bar
3. Copy the code from `backend/DIS.sol` in the repo and paste it in a new file in the contract folder that ends with `.sol` extension
4. Select `Solidity Compiler` from the sidebar and choose the new file to compile
5. Click on `Deploy and Run Transactions` and click `deploy`.
6. You can now interact with the deployed contract.
#### Mantle
1. Do Step 1 to 4 of [Ethereum](#ethereum)
2. Make sure `Metamask` or any preferred wallet extensions are installed
3. Add `Mantle Testnet` network in Metamask following this [guide](https://www.mantle.xyz/blog/developers/zero-to-hero-getting-started-on-mantle-testnet)
4. Click on `Deploy and Run Transactions` and select `Injected Provided - Metamask` or equivalent for `environment` then click `deploy`
5. That's it! You're ready to use the contract.

## Usage

1. Deploy the smart contract on the Ethereum / Mantle testnet using Remix IDE.
2. Register cryptocurrency exchanges by calling `payPremium` with the required parameters.
3. Only the contract owner can call `claimInsurance` to distribute insurance based on the coverage limit.

## Author

This project was developed by the `BlockOverflow` team.
