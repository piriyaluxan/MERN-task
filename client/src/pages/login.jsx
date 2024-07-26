import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Login = () => {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()

    axios.defaults.withCredentials=true;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        axios.post('http://localhost:3001/login', {email, password})
          .then(res => {console.log(res)
            if (res.data === 'success'){
                navigate('/dash')
            }
          
          })
          .catch(err => console.log(err));
      };
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main>
            <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Empowering Your Productivity!.</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At Tasky, we focus on delivering innovative solutions that streamline your workflow and enhance productivity. Our app is designed to help you stay organized and achieve more with less effort.</p>
            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Learn more about Tasky 
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
    </a>
</div>
              <div>
                  <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Sign in to tasky
                      </h2>
                      <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#">
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                          </div>
                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" name="password" id="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div>
                          
                           <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login to your account
                           </button>
                        </form>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                              Not registered yet?
                              <Link to='/register' className="text-blue-600 hover:underline dark:text-blue-500">Create account</Link>
                          </div>
                  </div>
              </div>
          </div>
      </section>
      <div>
        <Footer/>
      </div>
        </main>
    </div>
      
  )
}

export default Login
