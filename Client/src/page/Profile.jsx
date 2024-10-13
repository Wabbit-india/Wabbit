import React, { useState } from 'react';
import img from '../../src/assets/Home/webDeveloper.png';
import { IoLocationOutline } from "react-icons/io5";
import Profile1 from '../components/Profile/Profile1';
import Profile2 from '../components/Profile/Profile2';
import Profile3 from '../components/Profile/Profile3';
import Profile4 from '../components/Profile/Profile4';
import Navbar from '../components/Home/Navbar/Navbar';

export default function Profile() {
  const [activeProfile, setActiveProfile] = useState('Profile1'); // Initial state to display Profile1

  // Helper function to set the underline for the active button
  const getButtonStyle = (profile) => {
    return activeProfile === profile
      ? 'underline underline-offset-4 decoration-2 decoration-maincolor px-4' // Underline with main color
      : 'px-4'; // Regular padding for non-active buttons
  };

  return (
    <>
      {/* NavbarFor All Component */}

      <div className='w-full h-[70px]'>
        <Navbar />
      </div>

      {/* MainDiv */}

      <div className="bg-bgmain w-full min-h-[91vh] flex flex-col sm:flex-row">

        {/* The "aside-Bar */}

        <aside className="w-full sm:w-[400px] h-[50%] flex justify-center p-5 m-3">

          {/* Responsive inner div */}

          <div className="bg-white shadow-lg w-full max-w-[380px] h-[400px] flex flex-col justify-center items-center rounded-lg p-4 ">

            <img className="w-28 rounded-full max-w-full" src={img} alt="Profile" />
            <h1 className="text-2xl">Harsh Teja</h1>
            <div className="flex items-center">
              <IoLocationOutline className="mr-2" /> India
            </div>
            <button className="bg-maincolor w-full rounded-lg p-2 mt-4">Contact me</button>
            <hr className="w-full h-[2px] bg-bgmain my-4" />
            <div className="flex justify-between w-full">
              <h1>Member since</h1>
              <h1>June 2024</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Rating</h1>
              <h1 className='text-[10px]'>⭐️⭐️⭐️⭐️⭐️</h1> {/* Use actual star rating here */}
            </div>
          </div>
        </aside>

        {/* Datial-Div */}

        <div className="flex flex-col w-full sm:w-2/3">
          {/* Navbar always at the top */}
          <nav className="bg-white lg:text-xl  lg:w-[90%] lg:mx-auto rounded shadow-lg my-8 flex-shrink-0 h-16 flex items-center justify-around">
            <button
              className={`text-black ${getButtonStyle('Profile1')}`}
              onClick={() => setActiveProfile('Profile1')}
            >
              Portfolio
            </button>
            <button
              className={`text-black ${getButtonStyle('Profile2')}`}
              onClick={() => setActiveProfile('Profile2')}
            >
              Skills
            </button>
            <button
              className={`text-black ${getButtonStyle('Profile3')}`}
              onClick={() => setActiveProfile('Profile3')}
            >
              Trusted
            </button>
            <button
              className={`text-black ${getButtonStyle('Profile4')}`}
              onClick={() => setActiveProfile('Profile4')}
            >
              About
            </button>
          </nav>

          {/* Main content always below the navbar */}

          {/* Modal */}

          <main className="p-4 bg-bgmain flex-grow overflow-y-auto mx-4 sm:mx-8">
            {activeProfile === 'Profile1' && <Profile1 />}
            {activeProfile === 'Profile2' && <Profile2 />}
            {activeProfile === 'Profile3' && <Profile3 />}
            {activeProfile === 'Profile4' && <Profile4 />}
          </main>
        </div>
      </div>
    </>
  );
}
