const Footer = () => {
    return (
        <div className='bg-gray-900 p-4 text-white flex'>
            <div className="justify-center">
                <h1 className='font-bold text-xl'>BlockOverflow.</h1>
                <p>Made with love, by BlockOverflow {new Date().getFullYear()}. Built with React, Vite and Tailwind.</p>
            </div>
        </div>
    );
};

export default Footer;
