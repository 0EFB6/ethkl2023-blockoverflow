import React from 'react';
const Header = () => {
    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-8 py-4 border-b-2 border-cyan-300">
            <a href='/'><h1 className="text-xl font-extrabold">BlockOverflow.</h1></a>
            <nav>
                <ul className="flex space-x-8">
                    <li><a href="/" className="hover:text-gray-300 font-bold">Home</a></li>
                    <li><a href="/funds" className="hover:text-gray-300 font-bold">Total Funds</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
