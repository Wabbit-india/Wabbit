import React, { useContext, useState } from "react";
import { Mycontext } from "../context/Mycontext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const { setgetInfostep, freelance, setfreelance, normaluser, setnormaluser, setUserData } =
    useContext(Mycontext);
  const [freelancerType, setFreelancerType] = useState("buying");

  const chooserUser = () => {
    setnormaluser(!normaluser);
    setfreelance(false);
    setFreelancerType("buying");
  };
  const chooseFreelance = () => {
    setfreelance(!freelance);
    setnormaluser(false);
    setFreelancerType("selling");
  };
  const handleNext = () => {
    setUserData((prevData) => ({
      ...prevData,
      freelancerType: freelancerType, // Update the freelancer type in userData
    }));
    setgetInfostep(2);
  };

  return (
    <div className="flex flex-col  gap-3 h-[90vh]">

      {/* middleDiv */}
      <div className="h-[100%] flex flex-col gap-3 overflow-scroll overflow-x-hidden">

        <div className="text-[20px] md:text-xl pt-8 text-center font-nunito font-bold">
          Hey Man, your Accout has been Created! What brings you to Wabbit?
        </div>

        <div className="text-[14px] text-gray-600 text-center">
          We want to Tailor your expreience so you'll feel right at Home.
        </div>

        <div className="flex flex-row w-full h-[100%] justify-evenly items-center gap-5">

          <div
            className="w-[65%] h-[70%]  ml-5 rounded-xl shadow-lg border relative flex items-end pl-3 pb-2 cursor-pointer overflow-hidden"
            onClick={chooserUser}
          >
            <input
              className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black "
              checked={normaluser}
              onChange={chooserUser}
              type="checkbox"
              name=""
              id=""
            />

            {/* <img src={photoeditor} className="w-[90px] h-[90px] absolute top-[20%]" alt="" /> */}

            <p className="text-sm">Buying freelance service</p>
          </div>

          <div
            className="w-[65%] h-[70%] mr-5 rounded-xl shadow-lg border relative flex items-end pl-2 pb-2 cursor-pointer"
            onClick={chooseFreelance}
          >
            <input
              className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
              checked={freelance}
              onChange={chooseFreelance}
              type="checkbox"
              name=""
              id=""
            />
            {/* <img src={blogwriter} className="w-[90px] h-[90px] absolute top-6" alt="" /> */}
            
            <p className="text-sm">Selling freelance service</p>
          </div>
        </div>

        <div className="flex w-[100%] h-20 items-center justify-end">
          <button
            className="border w-fit mr-5 px-4  h-8 rounded-lg uppercase text-white bg-maincolor font-semibold "
            disabled={!freelance && !normaluser} // Disable until a type is selected
            onClick={handleNext}
          >
            next
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default UserInfo;
