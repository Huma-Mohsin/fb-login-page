import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-5xl px-5 lg:px-0">
        
        {/* Left Side */}
        <div className="text-center lg:text-left lg:w-1/2 px-5 mb-12 lg:mb-0">
          <div className="max-w-full">
            <Image src="/Facebook-Logo.png" alt="Fb Logo" width={300} height={100} />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        
        {/* Right Side */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col justify-between ">
          <div>
            <input 
              className="my-3 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="text" 
              placeholder="Email or Phone Number" 
            />
            <input 
              className="my-3 w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="password" 
              placeholder="Password" 
            />
            <button 
              className="bg-blue-600 w-full py-2 rounded-md text-lg font-bold text-white hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
            <a 
              className="text-blue-600 text-sm block text-center my-3 hover:underline cursor-pointer"
              href="https://www.facebook.com/recover/initiate"
            >
              Forgotten password?
            </a>
          </div>
          <hr className="my-4" />
          <button 
            className="bg-green-600 w-full py-2 rounded-md text-lg font-bold text-white hover:bg-green-700 transition-colors"
          >
            Create new account
          </button>
        </div>
    
      </div>
           {/* Footer */}
           <div className="flex justify-center items-center h-32 text-sm sm:text-base lg:text-xl text-gray-600 mt-6">
  <strong>Create a Page</strong> for a celebrity, brand, or business.
</div>

     
    </div>
  );
};

export default Home;
