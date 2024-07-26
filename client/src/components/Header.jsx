import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 dark:bg-gray-800 py-4">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
                <Link to="#" className="text-white text-2xl font-bold">
                    Tasky
                </Link>
                
            </div>
        </header>
    );
};

export default Header;
