import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-800 text-gray-400 dark:text-gray-500">
            <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Tasky. All rights reserved.
                </p>
                <div className="mt-4 flex space-x-4">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
