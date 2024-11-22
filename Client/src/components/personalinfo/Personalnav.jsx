import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Personalinfo from './component/Personalinfo1';
import Personalinfo2 from './component/Personalinfo2';
import Personalinf3 from './component/Personalinfo3';
import { AiOutlineUser, AiOutlinePhone, AiOutlineAccountBook } from "react-icons/ai";

function Personalnav() {
  const [index, setIndex] = useState(2); // Default to "Account Info"

  // Handle index change
  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className='w-full min-h-screen'>
      <nav className="w-full h-[60px] bg-white shadow-lg flex items-center overflow-x-auto">
        <ul className="flex whitespace-nowrap">
          <li
            onClick={() => handleIndexChange(0)}
            className={`cursor-pointer flex items-center sm:mx-4 320:mx-1 320:text-[15px] sm:p-2 rounded-lg transition duration-200 
              ${index === 0 ? 'bg-green-600 text-white' : 'text-green-600'}`}
          >
            {/* Hide the icon and label if screen size is less than 'sm' */}
            <AiOutlineUser className="mr-2 hidden sm:inline" />
            <span className="hidden sm:inline">1. </span>
            <span>Personal Info</span>
            <MdOutlineKeyboardArrowRight className="ml-2" />
          </li>

          <li
            onClick={() => handleIndexChange(1)}
            className={`cursor-pointer flex items-center sm:mx-4 sm:p-2 320:text-[15px] rounded-lg transition duration-200 
              ${index === 1 ? 'bg-green-600 text-white' : 'text-green-600'}`}
          >
            {/* Hide the icon and label if screen size is less than 'sm' */}
            <AiOutlinePhone className="mr-2 hidden sm:inline" />
            <span className="hidden sm:inline">2. </span>
            <span>Professional Info</span>
            <MdOutlineKeyboardArrowRight className="ml-2" />
          </li>

          <li
            onClick={() => handleIndexChange(2)}
            className={`cursor-pointer flex items-center sm:mx-4 sm:p-2 320:text-[15px] rounded-lg transition duration-200 
              ${index === 2 ? 'bg-green-600 text-white' : 'text-green-600'}`}
          >
            {/* Hide the icon and label if screen size is less than 'sm' */}
            <AiOutlineAccountBook className="mr-2 hidden sm:inline" />
            <span className="hidden sm:inline">3. </span>
            <span>Account Info</span>
            <MdOutlineKeyboardArrowRight className="ml-2" />
          </li>
        </ul>
      </nav>

      <main className="p-4">
        {index === 0 && <Personalinfo setIndex={setIndex} />}
        {index === 1 && <Personalinfo2 setIndex={setIndex} />}
        {index === 2 && <Personalinf3 />}
      </main>
    </div>
  );
}

export default Personalnav;
