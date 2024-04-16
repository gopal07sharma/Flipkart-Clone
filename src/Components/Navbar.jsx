import React from "react";
import './navbar.css'
import { BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
export const Navbar = () => {
  return (
    <div>
    <nav className=" bg-white border-gray-20">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center"> 
            <img
              src="./src/assets/flipkart.svg"
              className="h-full mr-4"  
              alt="Flipkart Logo"
            />
            <input
              type="text"
              id="search-navbar"
              className="block w-full md:w-48 p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
          <a className=" flex hover:bg-blue-600 p-2 hover:text-white border border-white rounded-xl transition-colors duration-300 ease-in-out justify-center gap-1 items-center">
          <CgProfile /> <span className=" font-semibold">Login</span>
          
          </a>
           &nbsp; &nbsp;
           <a className=" flex  p-2  border border-white rounded-xl transition-colors duration-300 ease-in-out justify-center gap-1 items-center">
          <BsCartCheck/><span className=" font-semibold">Cart</span>
          
          </a>
          &nbsp; &nbsp;
          <a className=" flex p-2  border border-white rounded-xl transition-colors duration-300 ease-in-out justify-center gap-1 items-center">
          <img src="../src/assets/seller.svg" alt="" /> <span className=" font-semibold">Become a Seller</span>
          
          </a>
        </div>
      </div>
    </nav>
  </div>
  );
};
