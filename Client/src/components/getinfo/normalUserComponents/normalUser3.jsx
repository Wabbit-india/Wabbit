import React, { useContext} from "react";
import { Mycontext } from "../../../context/Mycontext";

const NormalUserstep3 = () => {
  const { setgetInfostep, userData, setUserData } = useContext(Mycontext);

  const handleCompanySizeSelection = (size) => {
    setUserData({ ...userData, companySize: size });
  };
  

  return (
    <div className="flex flex-col gap-3 h-[100%]">
      <div className="h-[100%] flex flex-col gap-3 overflow-scroll overflow-x-hidden">
        <div className="text-[20px] md:text-xl text-center font-nunito font-bold">
          How many people work at your company
        </div>
        <div className="flex flex-col lg:flex-row w-full h-[100%] justify-evenly items-center gap-2">
          {["Just me", "2-10", "11-50", "51-500", "500+"].map((size, index) => (
            <div
              key={index}
              className={`w-[80%] h-[50%] lg:w-[20%] lg:h-[50%] rounded-xl shadow-lg border relative flex items-end pl-3 pb-2 cursor-pointer overflow-hidden ${
                userData.companySize === size ? "border-maincolor" : ""
              }`}
              onClick={() => handleCompanySizeSelection(size)}
            >
              <input
                className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
                type="checkbox"
                checked={userData.companySize === size}
                readOnly
              />
              <p className="text-lg mb-4">
                {size} {size === "Just me" ? "🧑🏼" : size === "2-10" ? "🧑‍🤝‍🧑" : size === "11-50" ? "🚌" : size === "51-500" ? "🚄" : "🌍"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] items-center justify-between">
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-black bg-white font-semibold"
          onClick={() => setgetInfostep(2)}
        >
          Back
        </button>
        <button
          className="border w-fit py-1 px-4 rounded-lg uppercase text-white bg-maincolor font-semibold"
          onClick={() => setgetInfostep(4)}
          disabled={!userData.companySize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NormalUserstep3;
