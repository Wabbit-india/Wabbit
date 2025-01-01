import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";

function Personalinfo2({ setIndex }) {
  const moveToNextStep = () => {
    console.log("Updated Profile Data:", profileData1);
    setIndex(2); // Move to the next step
  };

  const { profileData1, setProfileData1 } = useContext(Mycontext);

  const skillschoose = [
    { skillsname: "Affiliate Marketing" },
    { skillsname: "Music Promotion" },
    { skillsname: "Book & eBook Marketing" },
    { skillsname: "Search Engine (SEM)" },
    { skillsname: "Community Management" },
    { skillsname: "Social Media Marketing" },
    { skillsname: "Influencer Marketing" },
    { skillsname: "Web Analytics" },
    { skillsname: "Marketing Strategy" },
    { skillsname: "E-Commerce Marketing" },
    { skillsname: "Podcast Marketing" },
    { skillsname: "Text Message Marketing" },
    { skillsname: "Search Engine Optimization (SEO)" },
    { skillsname: "Web Traffic" },
    { skillsname: "Crowdfunding" },
    { skillsname: "Email Marketing" },
    { skillsname: "Local SEO" },
    { skillsname: "Mobile App Marketing" },
    { skillsname: "Public Relations" },
    { skillsname: "Social Media Advertising" },
    { skillsname: "Video Marketing" },
    { skillsname: "Display Advertising" },
    { skillsname: "Guest Posting" },
    { skillsname: "Marketing Advice" },
  ];
  const skillwork=[
    {name:"Video Editor"},
    {name:"Photo Editor"},
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)

    setProfileData1((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (skill) => {
    setProfileData1((prev) => {
      const updatedSkills = prev.skillschoose.includes(skill)
        ? prev.skillschoose.filter((item) => item !== skill)
        : [...prev.skillschoose, skill];
  
      console.log("Updated skillschoose:", updatedSkills); // Log the updated array
  
      return {
        ...prev,
        skillschoose: updatedSkills,
      };
    });
  };
      
  return (
    <div className="w-full min-h-screen px-4 sm:px-10 md:px-20 py-10">
      {/* Heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl">Professional Info</h1>
        <p>This is your time to shine. Let potential buyers know what you do best.</p>
        <p>Highlight your skills, certifications, and experience.</p>
      </div>
      <div>
          <h1 className="text-right text-sm sm:text-base my-2">* Mandatory fields</h1>
          <div className="border border-gray-400"></div>
        </div>


      {/* Occupation */}
      <div className="flex flex-col sm:flex-row justify-between my-3">
        <div>
          <h1 className="text-lg sm:text-xl">Your Occupation*</h1>
        </div>
        <div className="w-full sm:w-1/2 flex flex-wrap gap-2">
          <input
            type="text"
            name="occuption"
            value={profileData1.occuption}
            onChange={handleInputChange}
            placeholder="Occupation"
            className="w-full sm:w-1/4 px-2 py-1 border border-black rounded"
          />
          <input
            type="text"
            name="fromdate"
            value={profileData1.fromdate}
            onChange={handleInputChange}
            placeholder="From (e.g., 2021)"
            className="w-1/3 px-2 py-1 border border-black rounded"
          />
          <input
            type="text"
            name="todate"
            value={profileData1.todate}
            onChange={handleInputChange}
            placeholder="To (e.g., 2024)"
            className="w-1/3 px-2 py-1 border border-black rounded"
          />
        </div>
      </div>

      {/* Skills Selection */}
      <div className="w-full my-4 flex justify-between">
        <div className="md:w-1/2 sm:block 320:hidden"></div>
        <div className="md:w-1/2">
          <h1>Choose two to five of your best skills in Digital Marketing</h1>
          <div className="p-2 flex sm:text-md 320:text-lg flex-wrap gap-6">
            {skillschoose.map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`skill-${index}`}
                  value={item.skillsname}
                  className="cursor-pointer w-4 h-4"
                  onChange={() => handleCheckboxChange(item.skillsname)}
                  checked={profileData1.skillschoose.includes(item.skillsname)}
                />
                <label htmlFor={`skill-${index}`} className="ml-2 cursor-pointer">
                  {item.skillsname}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 flex md:flex-row flex-col justify-between">
          <div className="py-2">
            <h1 className="text-lg sm:text-xl">Skills</h1>
            <p>List the skills related to the services you're offering and add your experience level.</p>
          </div>
          <div className="sm:w-1/2 text-center">
          <select
  onChange={(e) => {
    const selectedValue = e.target.value; // Get the selected value
    if (selectedValue) {
      setProfileData1((prev) => {
        const updatedSkillswork = Array.isArray(prev.skillswork)
          ? prev.skillswork.includes(selectedValue)
            ? prev.skillswork // Avoid duplicates
            : [...prev.skillswork, selectedValue] // Append the new value
          : [selectedValue]; // Initialize as an array if undefined

        console.log("Updated skillswork:", updatedSkillswork); // Log the updated array

        return {
          ...prev,
          skillswork: updatedSkillswork,
        };
      });
    }
  }}
  className="w-full px-1 py-1 border border-black rounded-md">


  <option value="">Select Proficiency</option> {/* Placeholder */}
  <option value="Video Editor">Video Editor</option>
  <option value="Photo Editor">Photo Editor</option>
  <option value="Canva Expert">Canva Expert</option>
  <option value="Invitation Card">Invitation Card</option>
  <option value="Web Developer">Web Developer</option>
  <option value="UI/UX Designer">UI/UX Designer</option>
  <option value="Mockups">Mockups</option>
  <option value="Graphic Designer">Graphic Designer</option>
</select>
          </div>
        </div>

 
      {/* University */}
      <div className="my-2 flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="text-lg sm:text-xl">University</h1>
        </div>
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            name="university"
            value={profileData1.university}
            onChange={handleInputChange}
            placeholder="Enter your university"
            className="w-full sm:w-1/2 border border-gray-500 rounded p-2"
          />
        </div>
      </div>

      {/* Portfolio */}
      <div className="my-4 flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="text-lg sm:text-xl">Portfolio</h1>
        </div>
        <div className="w-full sm:w-1/2">
        <input
  type="text"
  name="portfoliolinks" // Match this name with the state key
  value={profileData1.portfoliolinks || ""} // Ensure no uncontrolled input warning
  onChange={(e) => setProfileData1((prev) => ({
    ...prev,
    [e.target.name]: e.target.value, // Dynamically update the state based on the name attribute
  }))}
  placeholder="Enter portfolio link"
  className="w-full sm:w-1/2 border border-gray-500 rounded p-2"
/>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={moveToNextStep}
        className="bg-green-600 text-white p-2 px-4 rounded-md block mt-6"
      >
        <b>Continue</b>
      </button>
    </div>
  );
}

export default Personalinfo2;
