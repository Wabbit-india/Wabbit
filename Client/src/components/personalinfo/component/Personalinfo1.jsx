import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { useRef } from "react";
function Personalinfo({ setIndex }) {
  const moveToNextStep = () => {
    setIndex(1); // Move to next step or any desired action
  };
  const fileInputRef = useRef(null);

  // Handle icon click to open file input
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Here, you could add logic to display a preview or upload the file
    }
  }

  return (
    <>
      <div className="w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl text-left">Personal Info</h1>
          <p className="text-sm text-left">
            Tell us a bit about yourself. This information will appear on your
          </p>
          <p className="text-sm text-left">
            public profile, so that potential buyers can get to know you better
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Full Name</h1>
            <p className="text-[13px] sm:text-[15px]">Ex. John Smith</p>
          </div>
          <div className="sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="border p-1 px-3 rounded-md border-black lg:h-auto sm:h-[30px] "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-1 px-3 rounded-md border-black lg:h-auto sm:h-[30px]  sm:transform transition-transform duration-300 sm:focus:-translate-x-[227px]"
              />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Profile Picture</h1>
            <p className="text-sm">Add a profile picture so customers</p>
            <p className="text-sm">know who they'll be working with</p>
          </div>
          <div className="sm:w-1/2 flex justify-center sm:justify-start">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-black flex justify-center items-center">
            <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      
      {/* Camera icon triggers file input */}
      <div
        onClick={handleIconClick}
        className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center cursor-pointer"
      >
        <IoCameraOutline className="bg-white rounded-lg text-3xl sm:text-4xl" />
      </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Description</h1>
          </div>
          <div className="sm:w-1/2">
            <textarea
              className="w-full rounded-md h-[180px] sm:h-[220px] border border-black p-2"
              placeholder="Share a brief overview of your previous work..."
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Language</h1>
            <p className="text-sm">Select your languages and proficiency</p>
          </div>
          <div className="sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <select className="w-full sm:w-1/3 px-1 py-1 border border-black rounded-md">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Urdu</option>
            </select>
            <select className="w-full sm:w-1/3 px-1 py-1 border border-black rounded-md">
              <option value="">Basic</option>
              <option value="">Conversational</option>
              <option value="">Fluent</option>
              <option value="">Native/Bilingual</option>
            </select>
            <button className="w-full sm:w-auto text-white py-1 bg-green-600 rounded-md px-6 text-lg">
              <b>Add</b>
            </button>
          </div>
        </div>

      </div>
      <button
        onClick={moveToNextStep}
        className="bg-green-600  mx-auto sm:mx-20 text-white p-2 px-4 rounded-md block"
      >
       <b> Continue </b>
      </button>
    </>
  );
}

export default Personalinfo;
