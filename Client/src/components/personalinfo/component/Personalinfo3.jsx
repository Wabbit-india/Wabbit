import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Personalinfo3() {
  return (
    <div className='w-full min-h-screen p-4 sm:p-8 md:p-16 lg:p-20'>
      <div>
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-4">Professional Info</h1>
        <p className="text-sm md:text-base">
          Trust and safety is a big deal in our community. Please verify your email and phone number so
        </p>
        <p className="text-sm md:text-base">
          that we can keep your account secured 
        </p>
      </div>
      
      <div className='border border-gray-400 my-4 md:my-8'></div>
      
      {/* Email Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
        <div>
          <h1 className="text-lg md:text-xl flex items-center">
            <MdEmail className='inline mx-2' /> Email
          </h1>
          <p className='text-gray-500 text-sm md:text-base'>Private</p>
        </div>
        <div className='mt-2 md:mt-0'>
          <button className='px-4 md:px-5 320:w-[185px] sm:w-full md:w-[200px] py-1 text-base md:text-lg bg-green-600 text-white rounded-md'>
           <b> Verified </b>
          </button>
        </div>
      </div>
      
      {/* Phone Number Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
        <div>
          <h1 className="text-lg md:text-xl flex items-center">
            <FaPhoneAlt className='inline mx-2' /> Phone Number
          </h1>
          <p className='text-gray-500 text-sm md:text-base'>Private</p>
          <p className="text-xs md:text-sm text-gray-400">We'll never share your phone number.</p>
        </div>
        <div className='mt-2 md:mt-0'>
          <button className='px-4 md:px-5 py-1 text-base md:text-lg bg-green-600 text-white rounded-md'>
         <b>   Add Phone Number</b>
          </button>
        </div>
      </div>
      
      <div className='border border-gray-400 my-4 md:my-8'></div>
      
      {/* Submit Button */}
      <div className='flex justify-end'>
        <button className='bg-green-600 text-white w-full md:w-[120px] py-2 text-sm md:text-base rounded-md'>
         <b> Submit</b>
        </button>
      </div>
    </div>
  )
}

export default Personalinfo3;
