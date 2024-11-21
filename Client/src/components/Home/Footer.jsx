import React from "react";
import logo from "../../assets/Home/Nav/navlogo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-black text-white font-nunito cursor-pointer">
      <div className="flex flex-wrap gap-6 items-start justify-center p-8 w-full">
        {/* Category Section */}
        <div className="flex  w-[300px] flex-col  px-[50px] text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul className="space-y-1">
            <li><strong>Category</strong></li>
            <li>Video Editor</li>
            <li>Photo Editor</li>
            <li>Logo Designer</li>
            <li>Mockups</li>
            <li>Animator</li>
            <li>Content Writer</li>
            <li>Invitation Card</li>
          </ul>
        </div>

        {/* For Client and Freelancer Section */}
        <div className="flex  w-[300px] flex-col items-center px-[50px] text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul className="space-y-1">
            <li><strong>For Client</strong></li>
            <li>Find Freelancer</li>
            <li>Helpdesk for Client</li>
            <li><strong>For Freelancer</strong></li>
            <li className="text-[17px]">Become a Wabbit Freelancer</li>
            <li className="text-[17px]">Join as an Agency</li>
            <li className="text-[17px]">Helpdesk for Freelancer</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex w-[300px] flex-col px-[50px] text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul className="space-y-1">
            <li><strong>Help</strong></li>
            <li>About</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Logo and Social Media Icons Section */}
        <div className="w-[270px] p-[20px] flex flex-col items-center justify-center">
          <div>
            <img className="" src={logo} alt="Logo" />
          </div>

          <div className="flex text-2xl gap-5 cursor-pointer mt-4">
            <i className="transition-all duration-300 ease-in-out hover:text-blue-500">
              <FaLinkedinIn />
            </i>
            <i className="transition-all duration-300 ease-in-out hover:text-red-500">
              <FaYoutube />
            </i>
            <i className="transition-all duration-300 ease-in-out hover:text-blue-700">
              <FaFacebookF />
            </i>
            <i className="transition-all duration-300 ease-in-out hover:text-gray-500">
              <FaXTwitter />
            </i>
            <i className="transition-all duration-300 ease-in-out hover:text-pink-500">
              <FaInstagram />
            </i>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm sm:text-base md:text-lg lg:text-xl">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
