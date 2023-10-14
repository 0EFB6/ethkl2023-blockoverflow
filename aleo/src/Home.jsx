import blockchainLogo from "./assets/blocks.png"
import reactLogo from "./assets/react.svg";
import aleoLogo from "./assets/aleo.svg";
import tailwindLogo from "./assets/tailwind.webp"
import viteLogo from "./assets/vite.png"

export default function Home() {
    return(
      <>
        <section className="p-14 bg-gradient-to-br from-purple-500 to-pink-500 grid grid-cols-[3fr_1fr] gap-4">
          <div className="flex items-center justify-center">
            <div>
            <h1 className="font-bold text-3xl">BlockOverflow.</h1>
            <p className="text-justify lg:text-xl">
              At BlockOverflow, we've revolutionized the world of cryptocurrency 
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