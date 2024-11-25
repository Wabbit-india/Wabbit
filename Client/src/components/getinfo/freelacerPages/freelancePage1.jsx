
import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";
import { FaArrowLeftLong } from "react-icons/fa6";

const RegisterStep4_freelancePage = () => {
  const { setgetInfostep, userData, setUserData } = useContext(Mycontext);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      label: "A side hustle",
      description: "A project for the company you work for or your own business",
    },
    {
      id: 2,
      label: "Solo freelancer",
      description: "Anything you're working on apart from your main job, like a side hustle",
    },
    {
      id: 3,
      label: "Agency Employee",
      description: "Services that are for your own growth or enjoyment, outside of work",
    },
    {
      id: 4,
      label: "Agency owner",
      description: "Services that are for your own growth or enjoyment, outside of work",
    },
  ];

  const handleOptionClick = (optionId) => {
    // Set the selected option
    setSelectedOption(optionId);

    // Find the selected option's label
    const selectedLabel = options.find((option) => option.id === optionId)?.label || "";

    // Update the user data immediately
    setUserData({
      ...userData,
      sellingPurpose: selectedLabel,
    });
  };

  const handleNext = () => {
    setgetInfostep(3);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="flex flex-col gap-3 h-[100%] font-nunito">
      <div className="h-[100%] flex flex-col gap-3 overflow-scroll overflow-x-hidden">
        <div className="text-[20px] md:text-xl text-center font-nunito font-bold">
          What do you plan to use Wabbit for?
        </div>
        <div className="text-[14px] text-gray-600 text-center">
          There's something for everyone.
        </div>
        <div className="flex flex-row w-full h-[100%] justify-evenly items-center gap-5">
          {options.map((option) => (
            <div
              key={option.id}
              className={`w-[80%] h-[50%] rounded-xl shadow-lg border relative flex items-start justify-end pl-3 pb-2 cursor-pointer overflow-hidden flex-col ${
                selectedOption === option.id ? "border-maincolor" : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <input
                className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
                type="checkbox"
                checked={selectedOption === option.id}
                readOnly
              />
              <p className="text-sm font-semibold">{option.label}</p>
              <div className="text-[12px] w-[70%]">
                {selectedOption === option.id ? option.description : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] items-center justify-between">
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-black bg-white font-semibold"
          onClick={() => {
            setgetInfostep(1);
          }}
        >
          back
        </button>
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-white bg-maincolor font-semibold"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default RegisterStep4_freelancePage;
