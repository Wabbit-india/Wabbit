import React, { useContext, useState, useRef } from "react"; // Ensure useContext is imported
import { IoCameraOutline } from "react-icons/io5";
import { Mycontext } from "../../../context/Mycontext";

function Personalinfo({ setIndex }) {
  const fileInputRef = useRef(null);
  const { profileData, setProfileData } = useContext(Mycontext);
  console.log(profileData);
  if (!profileData.languages) {
    setProfileData((prev) => ({
      ...prev,
      languages: [],
    }));
  }
  

  const moveToNextStep = () => {
    setIndex(1); // Move to next step or any desired action
  };

  // States for selected language and proficiency
  const [selectedLanguage, setSelectedLanguage] = useState(""); 
  const [selectedProficiency, setSelectedProficiency] = useState(""); 
  const [imagePreview, setImagePreview] = useState(null); // State to store the image preview

  // Handle icon click to open file input
  const handleIconClick = () => {
    fileInputRef.current.click(); // Triggers the file input when icon is clicked
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      setProfileData((prev) => ({
        ...prev,
        profilePicture: file, // Store the file object
      }));

      // Create an object URL for the selected file to show a preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Set the image preview
    }
  };

  // Handle adding selected language and proficiency
  const handleAddLanguage = () => {
    if (selectedLanguage && selectedProficiency) {
      setProfileData((prev) => ({
        ...prev,
        languages: [
          ...prev.languages,
          { language: selectedLanguage, proficiency: selectedProficiency },
        ],
      }));
      setSelectedLanguage(""); // Clear selected language
      setSelectedProficiency(""); // Clear selected proficiency
    }
  };
  console.log("hiii");

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

        {/* Full Name Input */}
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Full Name</h1>
            <p className="text-[13px] sm:text-[15px]">Ex. John Smith</p>
          </div>
          <div className="sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-5">
            <input
              type="text"
              name="firstname"
              value={profileData.firstname}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  firstname: e.target.value,
                }))
              }
              placeholder="First Name"
              className="border p-1 px-3 rounded-md border-black lg:h-auto sm:h-[30px]"
            />
            <input
              type="text"
              name="lastname"
              value={profileData.lastname}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }))
              }
              placeholder="Last Name"
              className="border p-1 px-3 rounded-md border-black lg:h-auto sm:h-[30px]"
            />
          </div>
        </div>

        {/* Profile Picture Upload */}
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
                name="profilePicture"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              {imagePreview && (
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
              )}

              {!imagePreview && (
                <div
                  onClick={handleIconClick}
                  className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center cursor-pointer">
                  <IoCameraOutline className="bg-white rounded-lg text-3xl sm:text-4xl" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description Input */}
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Description</h1>
          </div>
          <div className="sm:w-1/2">
            <textarea
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  description: e.target.value, // Update description
                }))
              }
              className="w-full rounded-md h-[180px] sm:h-[220px] border border-black p-2"
              name="description"
              placeholder="Share a brief overview of your previous work..."></textarea>
          </div>
        </div>
        
        {/* Location */}
        <div className="flex sm:justify-between">
          <div className="text-lg sm:text-2xl">Location</div>
          <div className="flex items-start flex-wrap gap-6 sm:w-1/2">
            <input
              className="rounded-md border border-black p-2 sm:w-auto w-[150px]"
              name="region"
              value={profileData.region}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  region: e.target.value,
                }))
              }
              type="text"
              placeholder="Region"
            />
            <input
              name="city"
              value={profileData.city}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
              className="rounded-md border border-black p-2"
              type="text"
              placeholder="City"
            />
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div>
            <h1 className="text-lg sm:text-2xl">Language</h1>
            <p className="text-sm">Select your languages and proficiency</p>
          </div>
          <div className="sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <select
              name="languages"
              className="w-full sm:w-1/3 px-1 py-1 border border-black rounded-md"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Urdu">Urdu</option>
            </select>
            <select
              value={selectedProficiency}
              onChange={(e) => setSelectedProficiency(e.target.value)}
              className="w-full sm:w-1/3 px-1 py-1 border border-black rounded-md"
            >
              <option value="">Select Proficiency</option>
              <option value="Basic">Basic</option>
              <option value="Conversational">Conversational</option>
              <option value="Fluent">Fluent</option>
              <option value="Native/Bilingual">Native/Bilingual</option>
            </select>

            <button
              className="w-full sm:w-auto text-white py-1 bg-green-600 rounded-md px-6 text-lg"
              onClick={handleAddLanguage}
            >
              <b>Add</b>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl">Added Languages:</h2>
          <ul className="list-disc ml-6">
            {profileData.languages.map((entry, index) => (
              <li key={index}>
                {entry.language} - {entry.proficiency}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <button
        onClick={moveToNextStep}
        className="bg-green-600 mx-auto sm:mx-20 text-white p-2 px-4 rounded-md block">
        <b> Continue </b>
      </button>
    </>
  );
}

export default Personalinfo;
