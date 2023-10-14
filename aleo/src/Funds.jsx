import { useEffect } from "react"

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
            <section className="mx-8">
                <h1 className="font-bold text-3xl">Add Funds</h1>
                <input className="rounded-full px-4 py-2 border-2 border-cyan-300 text-black bg-gray-100 w-64"/> 
                <span className="mx-4 font-bold text-xl">$USD</span>
                <button className="px-4 py-2 border-2 border-cyan-300 rounded-full hover:border-cyan-500">Add Funds</button>
            </section>
        </>
)};