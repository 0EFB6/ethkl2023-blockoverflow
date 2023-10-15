import { useState } from "react";
import { ethers } from "ethers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Funds from "./Funds";
// Import ABI Code to interact with smart contract
import DIS from "./artifacts/DIS.json";
import { utils, BigNumber } from "ethers" 
// The contract address
const greeterAddress = "0x4e25F10b3C81cf474E4361C109dbF7901B3dDBA8";

function App() {
  // Property Variables

  const [currencyCode, setCurrencyCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [exTotalFund, setExTotalFund] = useState("");
  const [totalFund, setTotalFund] = useState(null);

  //Helper Functions

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }


  async function callPayPremium() {
    if (!exTotalFund || !companyName || !currencyCode) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(greeterAddress, DIS.abi, signer);
      try {
        // Call contract function
        const transaction = await contract.payPremium(exTotalFund, companyName, currencyCode, {value: 2});
        // value are in wei, 1 ether is 1e18 wei
        // console.log(transaction)
        // Clear value after user call the function so user can set again
        setCompanyName("");
        setCurrencyCode("");
        setExTotalFund("");

        await transaction.wait();
      } catch (error) {
        console.log("Error: ", error);
      
      }
    }
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
 
        const data = await contract.fundBalance();
 
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
      <Header requestAccount={requestAccount}/>      
      <article className="min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funds" element={<Funds exTotalFund={exTotalFund} companyName={companyName} currencyCode={currencyCode} totalFund={totalFund} setCurrencyCode={setCurrencyCode} setCompanyName={setCompanyName} setExTotalFund={setExTotalFund} callPayPremium={callPayPremium}/>} />
        </Routes>
      </article>
      <Footer/>
      <div className="App-header">
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={getTotalFunds} style={{ backgroundColor: "green" }}>
            Fetch Fund
          </button>
          <button onClick={callPayPremium} style={{ backgroundColor: "red" }}>
            Pay Premium
          </button>
        </div>

        {/* INPUT TEXT - String  */}
        <input
          onChange={(e) => setCurrencyCode(e.target.value)}
          value={currencyCode}
          placeholder="Set Currency Code"
        />
        <input
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          placeholder="Set Company Name"
        />
        <input
          onChange={(e) => setExTotalFund(e.target.value)}
          value={exTotalFund}
          placeholder="Set Total fund"
        />
      </div>
    </div>
  );
}

export default App;