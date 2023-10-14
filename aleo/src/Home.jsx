import blockchainLogo from "./assets/blocks.png"
import reactLogo from "./assets/react.svg";
import aleoLogo from "./assets/aleo.svg";
import tailwindLogo from "./assets/tailwind.webp"
import viteLogo from "./assets/vite.png"

export default function Home() {
    return(
      <>
        <section className="py-14 px-[10%] bg-gradient-to-br from-purple-500 to-pink-500 grid grid-cols-[3fr_1fr] gap-4">
          <div className="flex items-center justify-center">
            <div>
            <h1 className="font-bold text-3xl">CryptoSafe.</h1>
            <p className="text-justify lg:text-xl">
              At CryptoSafe, we've revolutionized the world of cryptocurrency 
              exchange insurance. Our platform is designed to safeguard your digital
              assets, ensuring that you can trade with confidence on the blockchain. 
              We understand the dynamic and rapidly evolving nature of the crypto market,
                and we're here to provide you with the security and liquidity you need.
            </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={blockchainLogo} className="max-h-[200px]"/>
          </div>
        </section>
        <div className="bg-gray-900 p-8 pb-16">
        <h1 className="font-bold text-4xl text-center m-8">Why Choose CryptoSafe as Your Crypto Exchange Insurance:</h1>
        <section className="grid grid-cols-4 gap-8 mx-14">
          <div className="rounded-lg border-2 p-4 border-cyan-300">
            <h1 className="font-bold text-3xl p-2">1.</h1>
            <h1 className="font-semibold text-2xl">Stablecoin Deposit Protection</h1>
            <p className="text-justify">
              We store a portion of the deposits of stablecoins from participating 
              exchanges as insurance funds. Your assets are safe and sound, protected
               against unforeseen circumstances.
            </p>
          </div>
          <div className="rounded-lg border-2 p-4 border-cyan-300">
            <h1 className="font-bold text-3xl p-2">2.</h1>
            <h1 className="font-semibold text-2xl">Liquidity Support</h1>
            <p className="text-justify">
            We don't just stop at insurance. CryptoSafe can also provide liquidity 
            to participating exchanges, ensuring that you have the resources you need 
            to meet market demands, no matter how volatile the crypto space becomes.
            </p>
          </div>
          <div className="rounded-lg border-2 p-4 border-cyan-300">
            <h1 className="font-bold text-3xl p-2">3.</h1>
            <h1 className="font-semibold text-2xl">Web 3.0 Security</h1>
            <p className="text-justify">
            Powered by the latest advancements in blockchain technology, we offer 
            state-of-the-art security features to keep your assets secure, providing
             you with peace of mind while trading in the crypto world.
            </p>
          </div>
          <div className="rounded-lg border-2 p-4 border-cyan-300">
            <h1 className="font-bold text-3xl p-2">4.</h1>
            <h1 className="font-semibold text-2xl">Transparent and Trustworthy</h1>
            <p className="text-justify">
            We prioritize transparency and trust. Our smart contracts and protocols 
            are open for all to audit, ensuring that your assets are handled with 
            utmost integrity.            
            </p>
          </div>
        </section>
        </div>
        <h1 className="font-bold text-5xl text-center m-8">Technologies</h1>
        <section className="grid grid-cols-4 gap-8 m-8">
          <div className="flex justify-center">
            <a href="https://react.dev/">
              <img className="h-full max-h-[150px] aspect-square" alt="react" src={reactLogo}/>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://aleo.org/">
              <img className="h-full max-h-[150px] aspect-square" alt="aleo" src={aleoLogo}/>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://tailwindcss.com/">
              <img className="max-h-[150px] object-scale-down aspect-square" alt="tailwindcss" src={tailwindLogo}/>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://vitejs.dev/">
              <img className="max-h-[150px] aspect-square" alt="vite" src={viteLogo}/>
            </a>
          </div>
        </section>
      </>
)}