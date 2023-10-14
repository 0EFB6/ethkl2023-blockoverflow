import { useState } from "react";
import helloworld_program from "../depositinsurance/build/main.aleo?raw";
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
      helloworld_program,
      "main",
      ["5u32", "5u32"],
    );
    setExecuting(false);

    alert(JSON.stringify(result));
  }

  async function deploy() {
    setDeploying(true);
    try {
      const result = await aleoWorker.deployProgram(helloworld_program);
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
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          {/* Execute Aleo Script */}
          <p>
            <h1 className="font-bold text-2xl">Execute Aleo Script</h1>
            <button disabled={executing} onClick={execute}>
              {executing
                ? `Executing...check console for details...`
                : `Execute helloworld.aleo`}
            </button>
          </p>
        </div>

        {/* Advanced Section */}
        <div className="card">
          <h2>Advanced Actions</h2>
          <p>
            Deployment on Aleo requires certain prerequisites like seeding your
            wallet with credits and retrieving a fee record. Check README for more
            details.
          </p>
            <button className="px-4 py-2 border-2 border-cyan-300 rounded-full" disabled={deploying} onClick={deploy}>
              {deploying
                ? `Deploying...check console for details...`
                : `Deploy helloworld.aleo`}
            </button>
        </div>
      </article>
      <Footer/>
    </>
  );
}

export default App;
