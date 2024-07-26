import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            
            <section className="bg-gray-900 text-white flex flex-col justify-center items-center min-h-screen py-12 md:py-20">
                <div className="text-center px-4 md:px-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Tasky</h1>
                    <p className="text-base md:text-lg lg:text-xl mb-8">
                        Streamline your workflow and boost your productivity with our innovative app.
                    </p>
                    <Link 
                        to="/login" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
