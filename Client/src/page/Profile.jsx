import React, { useContext, useEffect, useState } from "react";
import img from "../assets/Home/Cards/webDeveloper.png";
import { IoLocationOutline } from "react-icons/io5";
import Navbar from "../components/Home/Navbar/Navbar";
import Freelancer1 from "../components/Profile/Modals/Freelancer1";
import Freelancer2 from "../components/Profile/Modals/Freelancer2";
import Freelancer3 from "../components/Profile/Modals/Freelancer3";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeProfile, setActiveProfile] = useState("Freelancer1"); // Initial state to display Profile1
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);



  // Helper function to set the underline for the active button
  const getButtonStyle = (Freelancer1) => {
    return activeProfile === Freelancer1
      ? "underline underline-offset-4 decoration-2 decoration-maincolor px-4" // Underline with main color
      : "px-4"; // Regular padding for non-active buttons
  };

  return (
    <>
      
      <div className="bg-bgmain w-full h-screen flex flex-col justify-center sm:flex-row">

        {/* Sidebar */}

        <aside className="w-full sm:w-[400px] flex justify-center p-5 m-3">
          {/* Responsive inner div */}

          <div className="bg-white shadow-lg w-full max-w-[380px] h-[400px] flex flex-col justify-center items-center rounded-lg p-4">
            <img
              className="w-28 rounded-full max-w-full"
              src={img}
              alt="Profile"
            />
            <h1 className="text-2xl">{username}</h1>
            <div className="flex items-center">
              <IoLocationOutline className="mr-2" /> India
            </div>
            <button
              className="bg-maincolor w-full rounded-lg p-2 mt-4 text-white font-semibold"

            >
              Preview wabbit profile
            </button>
            <hr className="w-full h-[2px] bg-bgmain my-4" />
            <div className="flex justify-between w-full">
              <h1>Member since</h1>
              <h1>June 2024</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Rating</h1>
              <h1 className="text-[10px]">⭐️⭐️⭐️⭐️⭐️</h1>{" "}
              {/* Use actual star rating here */}
            </div>
          </div>
        </aside>

        {/* TopSideNavbar */}
        
        <div className="flex flex-col w-full sm:w-2/3">
          {/* Navbar always at the top */}
          <nav className="bg-white lg:text-xl  lg:w-[90%] lg:mx-auto rounded shadow-lg my-8 flex-shrink-0 h-16 flex items-center justify-around">
            <button
              className={`text-black ${getButtonStyle("Freelancer1")}`}
              onClick={() => setActiveProfile("Freelancer1")}
            >
              ProfileInfo
            </button>
            <button
              className={`text-black ${getButtonStyle("Freelancer2")}`}
              onClick={() => setActiveProfile("Freelancer2")}
            >
              Portfolio
            </button>
            <button
              className={`text-black ${getButtonStyle("Freelancer3")}`}
              onClick={() => setActiveProfile("Freelancer3")}
            >
              PreviousWork/Review
            </button>
          </nav>

          {/* Main content always below the navbar */}
          <main className="p-4 flex-grow overflow-y-auto mx-4 sm:mx-8">
            {activeProfile === "Freelancer1" && <Freelancer1 />}
            {activeProfile === "Freelancer2" && <Freelancer2 />}
            {activeProfile === "Freelancer3" && <Freelancer3 />}
          </main>
        </div>
      </div>
    </>
  );
}
