import { useState } from "react";
import program from "../depositinsurance/build/main.aleo?raw";
import { AleoWorker } from "./workers/AleoWorker.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Funds from "./Funds";

const aleoWorker = AleoWorker();
function App() {
  const [count, setCount] = useState(0);
  const [executing, setExecuting] = useState(false);
  const [deploying, setDeploying] = useState(false);
  const [account, setAccount] = useState(null);

  const generateAccount = async () => {
      const key = await aleoWorker.getPrivateKey();
      setAccount(await key.to_string());
  };

  async function execute() {
    setExecuting(true);
    const result = await aleoWorker.localProgramExecution(
      program,
      "main",
      ["5u32", "5u32"],
    );
    setExecuting(false);

    alert(JSON.stringify(result));
  }

  async function deploy() {
    setDeploying(true);
    try {
      const result = await aleoWorker.deployProgram(program);
      console.log("Transaction:")
      console.log("https://explorer.hamp.app/transaction?id=" + result)
      alert("Transaction ID: " + result);
    } catch (e) {
      console.log(e)
      alert("Error with deployment, please check console for details");
    }
    setDeploying(false);
  }

  return (
    <>
      <Header account={account} generateAccount={generateAccount}/>      
      <article className="min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </article>
      <Footer/>
    </>
  );
}

export default App;
