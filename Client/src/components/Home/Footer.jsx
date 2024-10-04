import React from "react";
import logo from "../../../src/assets/Home/navlogo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-wrap gap-6 items-center justify-center p-8 w-full">
        <div className="px-[50px]  text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul>
            <li>
              <b>Help and Support</b>
            </li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
          </ul>
        </div>
        <div className="px-[50px]  text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul>
            <li>
              <b>Help and Support</b>
            </li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
          </ul>
        </div>
        <div className="px-[50px]  text-base sm:text-lg md:text-xl lg:text-2xl">
          <ul>
            <li>
              <b>Help and Support</b>
            </li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
            <li>success line</li>
          </ul>
        </div>
        <div className="w-[270px]  p-[20px] flex flex-col items-center justify-center">
          <div>
            <img className="" src={logo} alt="" />
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
