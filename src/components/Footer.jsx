import React, { useEffect, useState } from 'react'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Footer = () => {
  const [footer, setFooter]=useState(false)

  
  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/user/order"||
      location.pathname === "/dashboard/seller/order"||
      location.pathname === "/dashboard/seller/product"||
      location.pathname === "/dashboard/seller/addproduct"

    
    )  {
      setFooter(true);
    } else {
      setFooter(false);
    }
  }, [location.pathname]);




  return (
    <footer className={`bg-gray-900 ${footer ? "pl-[300px]" : ""}  py-10 px-4 bg-black/50 text-white mt-[40px] `}>
      {/* Top Section */}
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className=" w-full flex justify-between">
          <Link className='text-3xl font-bold ' to={"/"}>BookCycle </Link>
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/books" className="hover:text-primary">Books</a></li>
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer