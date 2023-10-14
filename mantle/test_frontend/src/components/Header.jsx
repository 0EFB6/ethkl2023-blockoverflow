import React from 'react';

export default function Header({requestAccount}) {
    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-8 py-4 border-b-2 border-cyan-300">
            <a href='/'><h1 className="text-xl font-extrabold">CryptoSafe.</h1></a>
            <nav>
                <ul className="flex space-x-8">
                    <li><a href="/" className="hover:text-gray-300 font-bold">Home</a></li>
                    <li><a href="/funds" className="hover:text-gray-300 font-bold">Total Funds</a></li>
                    <button className="bg-black border-2 border-cyan-300 rounded-full py-1 px-3 hover:border-cyan-500" onClick={requestAccount}>
                        Link Account
                    </button>
                </ul>
            </nav>
        </header>
    );
};