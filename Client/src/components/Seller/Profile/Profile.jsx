import React, { useContext, useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoCameraOutline } from "react-icons/io5";
import Freelancer1 from "../Profile/Modals/Freelancer1";
import Freelancer2 from "../Profile/Modals/Freelancer2";
import Freelancer3 from "../Profile/Modals/Freelancer3";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null); // State to store preview image
  const [activeProfile, setActiveProfile] = useState("Freelancer1"); // Active tab state
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get selected file
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create preview URL
      setImagePreview(previewUrl); // Update state for preview
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click(); // Trigger file input on icon click
  };

  return (
    <>
      <div className="bg-bgmain w-[81vw] h-screen flex flex-col justify-center sm:flex-row">
        {/* Sidebar */}
        <aside className="w-full sm:w-[400px] flex justify-center p-5 m-3">

          <div className="bg-white shadow-lg w-full max-w-[380px] h-[400px] flex flex-col justify-center items-center rounded-lg p-4">

            <div className="sm:w-1/2 flex justify-center sm:justify-start">

              <div className="flex flex-col items-center relative">
                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-black flex justify-center items-center">
                  <input
                    type="file"
                    name="profilePicture"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange} // Handle file change
                  />

                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="rounded-full"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (

                    <div
                      onClick={handleIconClick}
                      className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center cursor-pointer"
                    >
                      <IoCameraOutline className="bg-white rounded-lg text-3xl sm:text-4xl" />
                    </div>
                  )}
                </div>

                {/* "+" Button Outside the Div */}
                {imagePreview && (
                  <button
                    onClick={handleIconClick}
                    className="mt-3 bg-maincolor text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                    title="Update Photo"
                  >
                    +
                  </button>
                )}
              </div>


            </div>
            <h1 className="text-2xl">{username}</h1>
            <div className="flex items-center">
              <IoLocationOutline className="mr-2" /> India
            </div>
            <hr className="w-full h-[2px] bg-bgmain my-4" />
            <div className="flex justify-between w-full">
              <h1>Member since</h1>
              <h1>June 2024</h1>
            </div>
            <div className="flex justify-between w-full">
              <h1>Rating</h1>
              <h1 className="text-[10px]">⭐️⭐️⭐️⭐️⭐️</h1>
            </div>
          </div>
        </aside>
        {/* TopSideNavbar */}
        <div className="flex flex-col w-full sm:w-2/3">
          <nav className="bg-white lg:text-xl lg:w-[90%] lg:mx-auto rounded shadow-lg mt-8 flex-shrink-0 h-16 flex items-center justify-around">
            <button
              className={`text-black ${activeProfile === "Freelancer1" ? "underline" : ""}`}
              onClick={() => setActiveProfile("Freelancer1")}
            >
              ProfileInfo
            </button>
            <button
              className={`text-black ${activeProfile === "Freelancer2" ? "underline" : ""}`}
              onClick={() => setActiveProfile("Freelancer2")}
            >
              Portfolio
            </button>
            <button
              className={`text-black ${activeProfile === "Freelancer3" ? "underline" : ""}`}
              onClick={() => setActiveProfile("Freelancer3")}
            >
              PreviousWork/Review
            </button>
          </nav>
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
