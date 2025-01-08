import React, { useContext, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Freelancer1 from "../Profile/Modals/Freelancer1";
import Freelancer2 from "../Profile/Modals/Freelancer2";
import Freelancer3 from "../Profile/Modals/Freelancer3";
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
      <div className="bg-bgmain w-[81vw] h-screen flex flex-col justify-center sm:flex-row">

        {/* Sidebar */}

        <aside className="w-full sm:w-[400px] flex justify-center p-5 m-3">
          {/* Responsive inner div */}

          <div className="bg-white shadow-lg w-full max-w-[380px] h-[400px] flex flex-col justify-center items-center rounded-lg p-4">

            <div className="sm:w-1/2 flex justify-center sm:justify-start bg-yellow-600">
              <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-black flex justify-center items-center">
                
                {/* <input
                  type="file"
                  name="profilePicture"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileChange}
                /> */}

                {/* {imagePreview && (
                  <div className="">
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )} */}

                {/* {!imagePreview && (
                  <div
                    onClick={handleIconClick}
                    className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center cursor-pointer">
                    <IoCameraOutline className="bg-white rounded-lg text-3xl sm:text-4xl" />
                  </div>
                )} */}
              </div>
            </div>

            <h1 className="text-2xl">{username}</h1>
            <div className="flex items-center">
              <IoLocationOutline className="mr-2" /> India
            </div>

            {/* <button
              className="bg-maincolor w-full rounded-lg p-2 mt-4 text-white font-semibold"

            >
              Preview wabbit profile
            </button> */}

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

          <nav className="bg-white lg:text-xl  lg:w-[90%] lg:mx-auto rounded shadow-lg mt-8  flex-shrink-0 h-16 flex items-center justify-around">
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

          <main className="p-4 flex-grow overflow-y-auto sm:mx-8">
            {activeProfile === "Freelancer1" && <Freelancer1 />}
            {activeProfile === "Freelancer2" && <Freelancer2 />}
            {activeProfile === "Freelancer3" && <Freelancer3 />}
          </main>
        </div>
      </div>
    </>
  );
}
