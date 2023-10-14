# Blockchain Deposit Insurance for Web 3 (Aleo Track)

![Aleo Logo](https://aleo.org/social.png)

Deposit Insurance for Web 3 is a groundbreaking project that ensures the safety of funds for both crypto exchanges and users. In an era where crypto investments are on the rise, protecting crypto exchange and users' assets is crucial. This deposit insurance system guarantees that, even in the event of a crypto exchange crash, your funds remain safe secure.

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

## Introduction

### Problem

In the rapidly evolving world of Web 3 and blockchain technologies, the security of cryptocurrency investments is of paramount concern. As crypto investments continue to gain popularity, the risks associated with these investments have also grown. One of the most significant challenges is the potential loss of funds due to issues such as exchange crashes. For instance, FTX had bankrupted recently. This event resulted in the loss of millions of dollars in crypto assets. This is a significant problem that needs to be addressed.

### Solution

The **Deposit Insurance for Web 3 (Aleo Track)** is a groundbreaking project that addresses the critical issue of protecting both crypto exchanges and users' assets. It offers a unique solution to the problem of safeguarding digital assets in the Web 3 ecosystem. This project introduces a deposit insurance system that guarantees the safety of funds, even in the event of a crypto exchange crash or other unforeseen circumstances.

### How it Works

The **Deposit Insurance for Web 3 (Aleo Track)** operates by providing a robust and reliable insurance mechanism for cryptocurrency investments. It works by:

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
fund: 6969u64.private, premium: 20u64.private, currency_code: 6u8.private,
_nonce: 545656092158043748810204133041801387577521971740798770262951847460909874238group.public}"
"{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private,
exchange_address: aleo17glkn35dkjhydrwc3e3jk7whaeh6w0pj7uqvm46x8suhcds2dcqs2uukjj.private,
fund: 10000u64.private, premium: 30u64.private, currency_code: 6u8.private,
_nonce: 8089728916668796558923253162033273998867244818288803406199303298931990524264group.public}"
"{owner: aleo1sya4m2dhgnscll8ka932s442d74n2w0vhdwuens8v3w8007gxcfqmppk9p.private,
exchange_address: aleo1zsx8k893f5ev4xm4vcgmp0njatmnnyd7un04m46y725w2gqk2y9sf8y4s6.private,
fund: 8888u64.private, premium: 26u64.private, currency_code: 6u8.private,
_nonce: 2480492228953327343898988472002769215743408054504733805462410572850201988527group.public}"
6u8
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

## Functions & Parameters Description

## Demo
