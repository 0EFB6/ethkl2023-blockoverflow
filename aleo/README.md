# CryptoSafe - Deposit Insurance System for Crypto Exchange (Aleo Track)

![Aleo Logo](https://aleo.org/social.png)

CryptoSafe is a groundbreaking project that ensures the safety of funds for both crypto exchanges and users. In an era where crypto investments are on the rise, protecting crypto exchange and users' assets is crucial. This deposit insurance system guarantees that, even in the event of a crypto exchange crash, your funds remain safe secure.

## Table of Contents
- [Introduction](#blockchain-deposit-insurance-for-web-3-aleo-track)
  - [Problem](#problem)
  - [Solution](#solution)
  - [How it Works](#how-it-works)
- [Getting Started](#getting-started)
  - [Running the Frontend](#running-the-frontend)
  - [Testing the Backend](#testing-the-backend)
- [Crytocurrency Code Table](#cryptocurrency-code-table)
- [Functions & Parameters Description](#functions--parameters-description)
- [Demo](#demo)
- [Author](#author)

## Introduction

### Problem

In the rapidly evolving world of Web 3 and blockchain technologies, the security of cryptocurrency investments is of paramount concern. As crypto investments continue to gain popularity, the risks associated with these investments have also grown. One of the most significant challenges is the potential loss of funds due to issues such as exchange crashes. For instance, FTX had bankrupted recently. This event resulted in the loss of millions of dollars in crypto assets. This is a significant problem that needs to be addressed.

### Solution

**Cryptosafe** is a groundbreaking project that addresses the critical issue of protecting both crypto exchanges and users' assets. It offers a unique solution to the problem of safeguarding digital assets in the Web 3 ecosystem. This project introduces a deposit insurance system that guarantees the safety of funds, even in the event of a crypto exchange crash or other unforeseen circumstances.

### How it Works

**Cryptosafe** operates by providing a robust and reliable insurance mechanism for cryptocurrency investments. It works by:

- **Frontend**: The frontend component of the application allows crypto exchanges to access and manage their deposits. Crypto exchanges can interact with the platform to view their insured deposits.

- **Backend**: The backend component of the application, powered by the Leo programming language, facilitates various operations. It allows users to retrieve details about their insured deposits, check the funds in the Deposit Insurance.

- **Cryptocurrency Code Table (For Demo Purposes Only)**: The application uses a cryptocurrency code table to identify and manage different cryptocurrencies within the Web 3 ecosystem. This table provides a standardized approach for handling various digital assets and streamlining operations.

- **Claiming of Fund Due To Exchange Crash**: In the event of an exchange crash, the funds are transferred back to the exchange, and then disburse back to the users. This ensures that the funds are safe and secure, even in the event of an exchange crash.

The **Deposit Insurance for Web 3 (Aleo Track)** is a vital addition to the Web 3 ecosystem, ensuring the safety of funds and providing peace of mind for crypto investors and exchanges. By offering a reliable insurance solution, it contributes to the overall security and trustworthiness of the blockchain space.

For a more in-depth understanding of how to use this application and its various features, please refer to the sections on getting started, running the frontend, and testing the backend in this README.

## Getting Started

### Running the Frontend

To get started with the **Deposit Insurance For Web 3** frontend, follow these steps:

1. Navigate to the 'aleo' folder.

    ```bash
    cd aleo
    ```

2. Install the required dependencies:

   ```bash
   npm i
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Your web application should now be running at [localhost](http://localhost:5173/) at port **5173**.

### Testing the Backend

#### Prerequisites

To test the backend separately, you'll need to install the Leo programming language. Follow these steps:

1. Install Git on your system. You can find instructions for your operating system [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Install Rust using the following command on **Unix-like** operating systems:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

3. Clone the Leo repository:

   ```bash
   git clone https://github.com/AleoHQ/leo && cd leo
   ```

4. Install Leo using Cargo:

   ```bash
   cargo install --path .
   ```

Now, you can run the application with the `leo` command followed by the options and arguments.

#### Running the Application

##### Get Crypto Exchange Details

You can get a crypto exchange details using the following command. Replace the placeholders with your specific values:

```bash
leo run get_exchange_details <receiver_address> <amount_u64> <currency_code_u8>
```

For example, to add 69000 u64 of a currency with a code of 6u8 (refer to the Crypto Code Table [here](#cryptocurrency-code-table)) to the account with address `aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0`, you would run:

```bash
leo run et_exchange_details aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0 69000u64 6u8
```

##### Getting Insured Deposit (Funds with us) Details

To retrieve details about our Web 3 Deposit Insurance funds, you can use the `get_pool_details` command. Replace the placeholders with the managing address, records of 3 exchanges (for Demo purposes) and the cryptocurrency code:

```bash
leo run get_pool_details <address> <record_exchange1> <record_exchange1> <record_exchange1> <cryptocurrency_code>
```

For instance, to get details for the funds with the address `aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p`, using the provided group configurations, and currency code `6u8`, you would run:

```bash
leo run get_pool_details aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p
"{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private,
exchange_address: aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0.private,
fund: 69000u64.private, premium: 6900u64.private, currency_code: 6u8.private,
_nonce: 3916169204053756397953964047609467896674325248096542236261703897058293504919group.public}"
"{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private,
exchange_address: aleo17glkn35dkjhydrwc3e3jk7whaeh6w0pj7uqvm46x8suhcds2dcqs2uukjj.private, 
fund: 10000u64.private, premium: 1000u64.private, currency_code: 6u8.private,
_nonce: 8205598280580267840349480744491524683047813897336639756885163903263549349091group.public}"
"{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private,
exchange_address: aleo1zsx8k893f5ev4xm4vcgmp0njatmnnyd7un04m46y725w2gqk2y9sf8y4s6.private,
fund: 8000u64.private, premium: 800u64.private, currency_code: 6u8.private,
_nonce: 13056099085925649919730763373885359736129542801904442979921845496992022719group.public}" 6u8
```

Please ensure you have `Leo` installed and configured properly to run these commands.

For further information and more detailed documentation, please refer to the Aleo programming language documentation provided on the official Aleo website.

## Cryptocurrency Code Table

Below is a table containing cryptocurrency codes used in the Aleo network:

| Cryptocurrency | Code  |
| -------------- | ----  |
| Ethereum (ETH) | 6u8   |
| Bitcoin (BTC)  | 3u8   |
| Tether (USDT)  | 5u8   |

These codes are used for **demo purposes** to identify and manage different cryptocurrencies. Please use the appropriate code when interacting with this applications.

## Data Structures

### `Funds`
- **Description**: A record containing information about the funds for each exchange according to the currency code.

#### Fields:
1. `owner` (Type: `address`) - The owner's address.
2. `exchange_address` (Type: `address`) - The exchange's address.
3. `fund` (Type: `u64`) - The total deposited amount of a currency the exchange has.
4. `premium` (Type: `u64`) - The premium amount payable to Deposit Insutance for Web 3.
5. `currency_code` (Type: `u8`) - The currency code tied to cryptocurrency.

### `Pool`
- **Description**: A record for the Web 3 Deposit Insurance pool, which holds the total deposit insured for a specific currency.

#### Fields:
1. `owner` (Type: `address`) - The owner's address.
2. `total_deposit_insured` (Type: `u64`) - The total amount of premium received (deposit insured with Deposit Insurance for Web 3).
3. `currency_code` (Type: `u8`) - The currency code tied to cryptocurrency.

## Functions & Parameters Description

### `get_exchange_details`
- **Description**: This transition is used to get the details of an exchange, including its address, the total deposit, and the currency code.

#### Parameters:
1. `exchange` (Type: `address`) - The address of the exchange.
2. `totalDeposit` (Type: `u64`) - The total deposit to be insured.
3. `currency` (Type: `u8`) - The currency code for the deposit tied to cryptocurrency.

#### Finalize
- **Description**: Responsible for finalizing the storage of currency code, fund, and premium on the blockchain.

#### Parameters (Finalize):
1. `addr` (Type: `address`) - Act as key (key/value pair)
2. `totalDeposit` (Type: `u64`) - The total deposit to be added.
3. `insured` (Type: `u64`) - The premium insured, given to the Deposit Insurance.

### `get_pool_details`
- **Description**: This transition is used to get the details of the amount of deposit insured in the Web 3 Deposit Insurance for a specific currency and finalize the storage on the blockchain.

#### Parameters:
1. `manager` (Type: `address`) - The address of the owner.
2. `exchange_a` (Type: `Funds`) - Details of the first exchange.
3. `exchange_b` (Type: `Funds`) - Details of the second exchange.
4. `exchange_c` (Type: `Funds`) - Details of the third exchange.
5. `currency` (Type: `u8`) - The cryptocurrency code for the deposit.

#### Finalize
- **Description**: This function is responsible for finalizing the storage of the currency and total deposit insured on the blockchain.

#### Parameters (Finalize):
1. `insured_amount` (Type: `u64`) - The total amount of deposit insured.
2. `currency` (Type: `u8`) - The currency code for which the deposit is insured.


## Demo

You may access the demo video [here](). Do note that the demo for Aleo Track starts from 00.00 and ends on 00.00.

In the demo, we will be using the following addresses:

**Exchange 1 (Binance):**
```
aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0
```

**Exchange 2 (Kucoin):**
```
aleo17glkn35dkjhydrwc3e3jk7whaeh6w0pj7uqvm46x8suhcds2dcqs2uukjj
```

**Exchange 3 (Huobi):**
```
aleo1zsx8k893f5ev4xm4vcgmp0njatmnnyd7un04m46y725w2gqk2y9sf8y4s6
```

**Owner:**
```
aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p
```

These addresses are used to execute the application.

First, we will be getting the details of the exchange of all three exchanges with ETH as cryptocurrency (Code: 6u8). We will be using the following command:

```bash
leo run get_exchange_details aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0 69000u64 6u8

leo run get_exchange_details aleo17glkn35dkjhydrwc3e3jk7whaeh6w0pj7uqvm46x8suhcds2dcqs2uukjj 10000u64 6u8

leo get_exchange_details aleo1zsx8k893f5ev4xm4vcgmp0njatmnnyd7un04m46y725w2gqk2y9sf8y4s6 8000u64 6u8
```

Next, we will be getting the details of the pool with the owner's address, the three exchanges' details, and the currency code. We need to pass in the all the output generated in the previous command and pass it as argument. We will be using the following command:

```bash
leo run get_pool_details aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p "{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private, exchange_address: aleo12h9ncv5cz3kfcfvx8t2f49njthdftrq5mpnlv5vkvgda56t04gxqf8ffh0.private, fund: 69000u64.private, premium: 207u64.private, currency_code: 6u8.private, _nonce: 4403650493061247815348129289270424367431427874521413612333525955189094676725group.public}" "{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private, exchange_address: aleo17glkn35dkjhydrwc3e3jk7whaeh6w0pj7uqvm46x8suhcds2dcqs2uukjj.private, fund: 10000u64.private, premium: 30u64.private, currency_code: 6u8.private, _nonce: 7979292738304938876701708147935296134721345558009966023405928542625422690856group.public}" "{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private, exchange_address: aleo1zsx8k893f5ev4xm4vcgmp0njatmnnyd7un04m46y725w2gqk2y9sf8y4s6.private, fund: 8888u64.private, premium: 26u64.private, currency_code: 6u8.private, _nonce: 7455470763340093542915997461287016408750616591094972293558781609150799032548group.public}" 6u8
```

You will be able to view the total fund insured with CryptoSafe and it is the fund we will store and manage it.

**Last but not least,** you may checkout `sample.sh` for the demo script which works on Unix-like OS.

## Author

This project was developed by the `BlockOverflow` team.