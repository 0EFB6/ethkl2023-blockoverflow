import { useEffect } from "react"
import binanceLogo from "./assets/binanceLogo.png"
import kucoinLogo from "./assets/kucoinLogo.png"
import HuobiLogo from "./assets/huobiLogo.png"
import CoinbaseLogo from "./assets/coinbaseLogo.png"
import KrakenLogo from "./assets/KrakenLogo.png"

const total = 1912391

export default function Funds() {
    const digits = "0123456789"
    useEffect(() => {
        const target = document.querySelector('.roulette');
        if (target) {
            let interval_iterations = 0;
            const interval = setInterval(() => 
            {
                if (!target.textContent) return;
                if (!target.dataset.value) target.dataset.value = target.textContent;
                target.textContent = target.textContent.split('').map((digit, index) => {
                    if (!target.dataset.value) return;
                    if(index < interval_iterations) return `${target.dataset.value[index]}`
                    if (digit !== ' ') {
                        return `${digits[Math.floor(Math.random() * 10)]}`
                    } else {
                        return `${digits}`
                    }
                }).join('') 
                
                if (interval_iterations >= target.dataset.value.length) {
                    clearInterval(interval)
                }

                interval_iterations += 1/5;
            }, 45)
            return () => clearInterval(interval)
        }
    }, [])
    return (
        <>  
            <section className="m-8">
                <div>
                    <h1 className="font-bold text-5xl">Total Funds</h1>
                    <div className="font-semibold text-5xl mt-8">
                        <span className="roulette font-semibold text-5xl mt-8">{total}</span> $USD
                    </div>
                </div>
            </section>
            <section className="mx-8 pb-14">
                <h1 className="font-bold text-3xl">Add Funds</h1>
                <input className="rounded-full pl-4 py-1 border-2 my-4 border-cyan-300 text-black bg-gray-100 w-64"/> 
                <span className="mx-4 ml-2 mr-8 font-bold text-xl">$USD</span>
                <button className="px-4 py-2 border-2 border-cyan-300 rounded-full hover:border-cyan-500">Add Funds</button>
            </section>
            <section className="p-14 bg-gray-900">
                <h1 className="font-bold text-3xl m-4">Participating Exchanges</h1>
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative m-4">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search exchanges..." required/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div className="grid grid-cols-5 gap-8 text-black m-4 p-8">
                    <div className="flex justify-center items-center bg-gray-200 rounded-md border-2 border-cyan-300 p-4">
                        <img className="aspect-square max-w-[100px] m-4" src={binanceLogo} alt="binance"/>
                        <h1 className="font-bold text-3xl">Binance</h1>
                    </div>
                    <div className="flex justify-center items-center bg-gray-200 rounded-md border-2 border-cyan-300 p-4">
                        <img className="aspect-square max-w-[100px] m-4" src={kucoinLogo} alt="KuCoin"/>
                        <h1 className="font-bold text-3xl">KuCoin</h1>
                    </div>
                    <div className="flex justify-center items-center bg-gray-200 rounded-md border-2 border-cyan-300 p-4">
                        <img className="aspect-square max-w-[100px] m-4" src={HuobiLogo} alt="Huobi"/>
                        <h1 className="font-bold text-3xl">Huobi</h1>
                    </div>
                    <div className="flex justify-center items-center bg-gray-200 rounded-md border-2 border-cyan-300 p-4">
                        <img className="aspect-square max-w-[100px] m-4" src={CoinbaseLogo} alt="Coinbase"/>
                        <h1 className="font-bold text-3xl">Coinbase</h1>
                    </div>
                    <div className="flex justify-center items-center bg-gray-200 rounded-md border-2 border-cyan-300 p-4">
                        <img className="aspect-square max-w-[100px] m-4" src={KrakenLogo} alt="Kraken"/>
                        <h1 className="font-bold text-3xl">Kraken</h1>
                    </div>
                </div>
            </section>
        </>
)};