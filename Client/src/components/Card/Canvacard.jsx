import { useLocation } from "react-router-dom";
import {useEffect} from "react";
import Navbar from "../Home/Navbar/Navbar";

    export default function Canvacard() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      const elements = [];
    
      // Use a regular for loop instead of a while loop
      for (let canva = 0; canva < 8; canva++) {
        elements.push(
          <div key={canva} className="w-64 h-80 bg-white shadow-lg rounded-lg  m-6">
            {/* Card Content */}
          </div>
        );
      }
        
      return (
        <>
        <div className="my-10">
          <Navbar/>
        </div>
        <div className="w-full min-h-screen bg-gray-100 sm:p-8 md:p-10 font-nunito ">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-nunito text-left mx-6">
              Canva Experts
            </h1>
            <p className="text-lg md:text-xl text-left mt-2 mx-6">
              Work with a Canva expert to create stunning, professional designs that elevate your brand.
            </p>
    
            {/* Example Canva Design Section */}
            <div className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-10 mx-6 bg-white shadow-lg rounded-lg flex justify-center items-center m-2">
              <h1 className="text-center text-sm md:text-base">Canva Design's</h1>
            </div>
    
            {/* Dynamically Generated Elements */}
            <div className="flex flex-wrap">
              {elements}
            </div>
          </div>
        </div>
        </>
      );
    }
    
