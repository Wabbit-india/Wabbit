import React from 'react';

function Freelancer1() {
  return (
    <div className="flex w-full min-h-screen 320:p-0 p-4">
      <div className="w-full sm:w-full lg:w-full flex flex-col   p-6   rounded-lg shadow-lg">
        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row justify-between  mb-4">
          <div className="w-full sm:w-[48%] mb-4  sm:mb-0">
            <label htmlFor="firstName" className="block mb-2 text-sm sm:text-base lg:text-lg">First Name</label>
            <input type="text" id="firstName" className="w-full lg:h-10 sm:h-8 p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="w-full sm:w-[48%]">
            <label htmlFor="lastName" className="block mb-2 text-sm sm:text-base lg:text-lg">Last Name</label>
            <input type="text" id="firstName" className="w-full lg:h-10 sm:h-8 p-2 border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* Occupation */}
        <div className="mb-4">
          <label htmlFor="occupation" className="block mb-2 text-sm sm:text-base lg:text-lg">Occupation</label>
          <input 
            type="text" 
            id="occupation" 
            placeholder="Ex: Senior Designer, Art Director, Student" 
            className="w-full p-2 border border-gray-300 rounded-md" 
          />
        </div>

        {/* University */}
        <div className="mb-4">
          <label htmlFor="university" className="block mb-2 text-sm sm:text-base lg:text-lg">University</label>
          <input type="text" id="university" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-sm sm:text-base lg:text-lg">Location</label>
          <select id="location" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2 text-sm sm:text-base lg:text-lg">City</label>
          <select id="city" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select City</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
          </select>
        </div>

        {/* Website URL */}
        <div className="mb-4">
          <label htmlFor="website" className="block mb-2 text-sm sm:text-base lg:text-lg">Website URL</label>
          <input type="text" id="website" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm sm:text-base lg:text-lg">Description</label>
          <textarea id="description" className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Skills</h1>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center w-[140px] gap-2 bg-gray-200 p-2 rounded-md">
              <span>Video Editing</span>
              <button className="text-red-500 ">x</button>
            </div>
            <div className="flex items-center gap-2 w-[140px] bg-gray-200 p-2 rounded-md">
              <span>Graphic Design</span>
              <button className="text-red-500">x</button>
            </div>
            <div className="flex items-center gap-2 w-[140px] bg-gray-200 p-2 rounded-md">
              <span>UI/UX Design</span>
              <button className="text-red-500">x</button>
            </div>
            <button className="text-white bg-maincolor px-4 rounded-lg">+ ADD</button>

          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
        <label htmlFor="languages" className="block mb-2 text-sm sm:text-base lg:text-lg">Languages</label>
          <button className="mt- text-blue-500">+ Add Languages</button>
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm sm:text-base lg:text-lg">Phone Number</label>
          <input id="description" className="w-full p-2 border border-gray-300 rounded-md "></input>
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block  text-sm sm:text-base lg:text-lg">Email</label>
          <input id="description" className="w-full p-2 border border-gray-300 rounded-md "></input>
          <button className='bg-maincolor text-white px-5 py-2 rounded-lg mt-2'>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default Freelancer1;
