import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";

const FreelancePage2 = () => {
  const { setgetInfostep, userData, setUserData } = useContext(Mycontext);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      id: 1,
      label: "I'm just getting started",
      description:
        "Explore opportunities and build your portfolio as you begin freelancing.",
    },
    {
      id: 2,
      label: "Freelancing online",
      description:
        "Find remote work and connect with clients from all over the world.",
    },
    {
      id: 3,
      label: "Freelancing offline",
      description:
        "Work with local clients and establish in-person connections for your projects.",
    },
    {
      id: 4,
      label: "Both online and offline",
      description:
        "Balance between remote projects and in-person engagements to diversify your work.",
    },
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    const selectedLabel = options.find((option) => option.id === optionId)?.label || "";
    setUserData({
      ...userData,
      experienceMode: selectedLabel,
    });
  };

  const handleNext = () => {
    setgetInfostep(4);
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
                selectedOption === option.id ? "border-maincolor" : "border-gray-300"
              }`} // Change border color based on selection
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
            setgetInfostep(2);
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

export default FreelancePage2;
