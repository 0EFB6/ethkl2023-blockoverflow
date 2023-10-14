import { useState } from "react";
import { ethers } from "ethers";
// Import ABI Code to interact with smart contract
import DIS from "./artifacts/DIS.json";
import "./App.css";
import { utils, BigNumber } from "ethers" 
// The contract address
const greeterAddress = "0x4e25F10b3C81cf474E4361C109dbF7901B3dDBA8";

function App() {
  // Property Variables
  const [totalFund, setTotalFund] = useState(0);

  //Helper Functions

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }  

  async function getTotalFunds() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        DIS.abi,
        provider
      );
      try {
        // Call DIS.greet() and display current greeting in `console`
        /* 
          function greet() public view returns (string memory) {
            return greeting;
          }
        */
        const data = await contract.fundBalance();
        // const data = await contract.getExchangeName("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
        // BigNumber and utils from ethers help convert hex to decimal
        // data also return an object so to get value use ._hex
        const largeNumber = BigNumber.from(data._hex)
        const toDecimal = utils.formatEther(largeNumber);
        console.log(toDecimal)
        setTotalFund(toDecimal);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Return
  return (
    <div className="App">
      <div className="App-header">
        {/* DESCRIPTION  */}
        <div className="description">
          <h1>DIS.sol</h1>
          <h3>Full stack dapp using ReactJS and Hardhat</h3>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={getTotalFunds} style={{ backgroundColor: "green" }}>
            Fetch Fund
          </button>
          <button onClick={setGreeting} style={{ backgroundColor: "red" }}>
            Set Greeting
          </button>
        </div>
        {/* INPUT TEXT - String  */}
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Set Greeting Message"
        />

        {/* Current Value stored on Blockchain */}
        <h2 className="greeting">Fund: {totalFund}</h2>
      </div>
    </div>
  );
}

export default App;
