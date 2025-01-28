import React, { useContext, useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoCameraOutline } from "react-icons/io5";
import Freelancer1 from "../Profile/Modals/Freelancer1";
import Freelancer2 from "../Profile/Modals/Freelancer2";
import Freelancer3 from "../Profile/Modals/Freelancer3";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../../context/Mycontext";

export default function Profile() {
  const { setImageUrl } = useContext(Mycontext);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeProfile, setActiveProfile] = useState("Freelancer1"); // Active tab state
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setImagePreview(previewUrl); // Update the state for the preview

      // Create FormData object
      const data = new FormData();
      data.append("file", file); // Append the actual file object
      data.append("upload_preset", "ProfilePhoto"); // Your Cloudinary upload preset
      data.append("cloud_name", "dvnrzuumg"); // Your Cloudinary cloud name

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvnrzuumg/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!res.ok) {
          throw new Error("Failed to upload image");
        }

        const result = await res.json();
        // console.log("Uploaded Image URL:", result.url); // Log the uploaded image URL
        setImageUrl(result.url);
        console.log('52',result.url)
      } catch (error) {
        console.error("Error uploading the image:", error.message);
      }
    }
  };

  // const handleIconClick = () => {
  //   fileInputRef.current.click(); // Trigger file input on icon click
  // };

  return (
    <>
      <div className=" lg:w-[81vw] bg-bgmain w-[100vw] h-screen flex flex-col justify-center sm:flex-row">
        
        {/* Sidebar */}
        <aside className="w-full sm:w-[400px] flex justify-center p-5 m-3">

          <div className="bg-white shadow-lg w-full max-w-[380px] h-[400px] flex flex-col justify-center items-center rounded-lg p-4">

            <div className="sm:w-1/2 flex justify-center sm:justify-start">

              <div className="flex flex-col items-center relative">
                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border-2 border-black flex justify-center items-center">

                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />

                  <div onClick={() => fileInputRef.current.click()}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Profile Preview" className="w-full h-[200px] rounded-full" />
                    ) : (
                      <IoCameraOutline />
                    )}
                  </div>
                </div>
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
          <nav className="bg-white text-[13px] md:text-lg lg:w-[90%] lg:mx-auto rounded shadow-lg mt-8 flex-shrink-0 h-16 flex items-center justify-around">
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
