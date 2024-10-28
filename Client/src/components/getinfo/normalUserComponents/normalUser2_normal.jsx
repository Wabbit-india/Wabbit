import React, { useContext, useState, useEffect } from "react";
import { Mycontext } from "../../../context/Mycontext";

const RegisterStep4_normal = () => {
  const { setgetInfostep, userData, setUserData } = useContext(Mycontext);
  const [selectedOptions, setSelectedOptions] = useState({
    primaryJob: false,
    sideProject: false,
    personalUse: false,
  });

  // Initialize selectedOptions based on userData.freelancingPurpose
  useEffect(() => {
    const initialSelectedOptions = {
      primaryJob: userData.freelancingPurpose?.includes("primary job"),
      sideProject: userData.freelancingPurpose?.includes("side project"),
      personalUse: userData.freelancingPurpose?.includes("personal use"),
    };
    setSelectedOptions(initialSelectedOptions);
  }, [userData.freelancingPurpose]);

  const handleOptionChange = (optionKey, optionLabel) => {
    const updatedSelectedOptions = {
      ...selectedOptions,
      [optionKey]: !selectedOptions[optionKey],
    };
    setSelectedOptions(updatedSelectedOptions);

    const updatedFreelancingPurpose = [...(userData.freelancingPurpose || [])];

    if (updatedSelectedOptions[optionKey]) {
      // Add the selected option if not already included
      if (!updatedFreelancingPurpose.includes(optionLabel)) {
        updatedFreelancingPurpose.push(optionLabel);
      }
    } else {
      // Remove the option if deselected
      const index = updatedFreelancingPurpose.indexOf(optionLabel);
      if (index !== -1) {
        updatedFreelancingPurpose.splice(index, 1);
      }
    }

    setUserData({
      ...userData,
      freelancingPurpose: updatedFreelancingPurpose,
    });
  };

  // Use effect to console log userData whenever it changes
  useEffect(() => {
    console.log("Updated userData:", userData);
  }, [userData]);

  return (
    <div className="flex flex-col gap-3 h-[100%]">
      <div className="h-[100%] flex flex-col gap-3 overflow-scroll overflow-x-hidden">
        <div className="text-[20px] md:text-xl text-center font-nunito font-bold">
          What do you plan to use Wabbit for?
        </div>
        <div className="text-[14px] text-gray-600 text-center">
          There's something for everyone.
        </div>
        <div className="flex flex-row w-full h-[100%] justify-evenly items-center gap-5">
          <div
            className={`w-[80%] h-[70%] rounded-xl shadow-lg border relative flex items-start justify-end pl-3 pb-2 cursor-pointer overflow-hidden flex-col ${
              selectedOptions.primaryJob ? "border-maincolor" : ""
            }`}
            onClick={() => handleOptionChange("primaryJob", "primary job")}
          >
            <input
              className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
              type="checkbox"
              checked={selectedOptions.primaryJob}
              readOnly
            />
            <p className="text-sm font-semibold">My primary job or business</p>
            <div className="text-[12px] w-[70%]">
              {selectedOptions.primaryJob
                ? "A project for the company you work for or your own business"
                : ""}
            </div>
          </div>
          <div
            className={`w-[80%] h-[70%] rounded-xl shadow-lg border relative flex items-start justify-end pl-3 pb-2 cursor-pointer overflow-hidden flex-col ${
              selectedOptions.sideProject ? "border-maincolor" : ""
            }`}
            onClick={() => handleOptionChange("sideProject", "side project")}
          >
            <input
              className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
              type="checkbox"
              checked={selectedOptions.sideProject}
              readOnly
            />
            <p className="text-sm font-semibold">A side project or business</p>
            <div className="text-[12px] w-[70%]">
              {selectedOptions.sideProject
                ? "Anything you're working on apart from your main job, like a side hustle"
                : ""}
            </div>
          </div>
          <div
            className={`w-[80%] h-[70%] rounded-xl shadow-lg border relative flex items-start justify-end pl-3 pb-2 cursor-pointer overflow-hidden flex-col ${
              selectedOptions.personalUse ? "border-maincolor" : ""
            }`}
            onClick={() => handleOptionChange("personalUse", "personal use")}
          >
            <input
              className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
              type="checkbox"
              checked={selectedOptions.personalUse}
              readOnly
            />
            <p className="text-sm font-semibold">Personal use</p>
            <div className="text-[12px] w-[70%]">
              {selectedOptions.personalUse
                ? "Services that are for your own growth or enjoyment, outside of work"
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] items-center justify-between">
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-black bg-white font-semibold"
          onClick={() => {
            setgetInfostep(1);
            setUserData({
              freelancerType: "buying",
              freelancingPurpose: [],
              companySize: "",
              purpose: "",
              sellingPurpose: "",
              experienceMode: "",
            })
          }}
        >
          back
        </button>
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-white bg-maincolor font-semibold disabled:cursor-not-allowed"
          onClick={() => {
            setgetInfostep(3);
          }}
          disabled={userData.freelancingPurpose.length === 0}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default RegisterStep4_normal;
