# Deposit Insurance System (DIS) for Crypto Exchange

## Table of Contents


  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Backend](#backend)
    - [Ethereum](#ethereum)
    - [Mantle](#mantle)
    - [Frontend](#frontend)
      - [Automatically](#automatically)
      - [Manually](#manually)
  - [Usage](#usage)
  - [Author](#author)

## Project Overview

This is a project is developed for the ETHKL 2023 hackathon Ethereum and Mantle tracks. It is a Deposit Insurance System (DIS) for Crypto Exchange which aims to reduce the risk of bankruptcy of both exchanges and investors. The DIS provides a mechanism for cryptocurrency exchanges to pay premiums and claim insurance based on a set of rules.

## Features

- Deposit funds as premiums from cryptocurrency exchanges.
- Maintain a total fund for the DIS.
- Record exchange data on-chain, such as company name, premium paid, total funds, and type of currencies.
- Calculate premiums based on a fixed percentage.
- Claim insurance based on a coverage limit.
- Event logging for deposits, withdrawals, and insurance claims.

## Getting Started

### Backend

### Ethereum

To get started with the project, follow these steps:

1. Go to [Remix IDE](https://remix.ethereum.org/)
2. Click on the `File Explorer` on the left side bar
3. Copy the code from [mantle/backend/DIS.sol](https://raw.githubusercontent.com/0EFB6/ethkl2023-blockoverflow/main/mantle/backend/DIS.sol) in the repo and paste it in a new file in the contract folder that ends with `.sol` extension
4. Select `Solidity Compiler` from the sidebar and choose the new file to compile
5. Click on `Deploy and Run Transactions` and click `deploy`.
6. You can now interact with the deployed contract.

### Mantle

1. Do Step 1 to 4 of [Ethereum](#ethereum)
2. Make sure `Metamask` or any preferred wallet extensions are installed
3. Add `Mantle Testnet` network in Metamask following this [guide](https://www.mantle.xyz/blog/developers/zero-to-hero-getting-started-on-mantle-testnet)
4. Visit [Mantle Faucet](https://www.incepthink.com/mantle/faucet) and get some MNT tokens to deploy the contract.
5. Click on `Deploy and Run Transactions` and select `Injected Provided - Metamask` or equivalent for `environment` then click `deploy`
6. That's it! You're ready to use the contract.

Note: The smart contract link deployed on mantle explorer is [here](https://explorer.testnet.mantle.xyz/address/0x4e25F10b3C81cf474E4361C109dbF7901B3dDBA8).

### Frontend

#### Automatically

You could run `script.py` or `script.ps1` to automatically see the frontend
- Run python script from mantle directory
```shell
  python script.py
```

`or`

- Run powershell script with powershell from mantle directory
```shell
  .\script.ps1
```
- If error such as `The script will not execute on the system` occur. You might need to run powershell as administrator and type
```shell
  Get-ExecutionPolicy RemoteSigned
```
For more information click [here](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3)

#### Manually

1. Firstly, get into the frontend directory

```shell
  cd frontend
```

2. Install all the required dependencies

```shell
  npm i
```

3. Run the following line to load up the website

```shell
  npm run start
```

## Usage

1. Deploy the smart contract on the Ethereum / Mantle testnet using Remix IDE.
2. Register cryptocurrency exchanges by calling `payPremium` with the required parameters.
3. Only the contract owner can call `claimInsurance` to distribute insurance based on the coverage limit.

## Author

This project was developed by the `BlockOverflow` team.
