import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";
import hiring from "../../../assets/Auth/Asset for 1st Modal/hiring.png";
import Buying from "../../../assets/Auth/Asset for 1st Modal/video_9953891.png";
import SelectionCard from "../utils/SelectedCard";
import Questionnaire from "./Questionnaire";
import Questionnaire2 from "./Questionnaire2";

const RegisterInfoModal = () => {
  const { userData, setUserData, registerUsername, setRegisterStep, setIsModal, setnewModal } = useContext(Mycontext); // Access context value
  const [step, setStep] = useState(1); // Track the current step

  const handleSelection = (type) => {
    setUserData((prev) => ({ ...prev, freelancerType: type }));
  };

  const goToNextStep = () => {
    if (userData.freelancerType) {
      setStep(2); // Move to the next step if freelancerType is set
    }
  };

  const goBack = () => {
    if (step === 1) {
      setnewModal(false); // Close the current modal
      setRegisterStep(2); // Navigate to RegisterStep2
      setIsModal(true); // Show the modal
    } else {
      setStep(step - 1);
    }
  };

  const goBackToModal = () => {
    setStep(1); // Reset to the modal page
    setUserData((prev) => ({ ...prev, freelancerType: "" })); // Reset freelancerType
  };

  console.log(userData.freelancerType); // Check if freelancerType is being updated correctly

  return (
    <div className="w-[90vw] md:w-[80vw] lg:w-[600px] xl:w-[850px] bg-white h-[85vh] rounded-2xl flex flex-col overflow-hidden relative z-80">
      {step === 1 ? (
        <div className="w-full h-full flex flex-col items-center justify-start py-10 px-6 md:px-14 gap-5 overflow-y-scroll">
          <p className="text-lg md:text-2xl text-center font-semibold font-nunito">
            {registerUsername}, your account has been created! What brings you to Wabbit?
          </p>
          <p className="text-sm md:text-xl text-gray-500 font-semibold">
            We want to tailor your experience so you'll feel right at home
          </p>

          <div className="flex flex-col md:flex-row w-full gap-3 items-center px-2 md:px-4 flex-grow justify-evenly py-2">

            <SelectionCard
              text="Buying freelance services"
              image={Buying}
              isSelected={userData.freelancerType === "Buying"}
              onClick={() => handleSelection("Buying")}
            />
            
            <SelectionCard
              text="Selling freelance services"
              image={hiring}
              isSelected={userData.freelancerType === "Selling"}
              onClick={() => handleSelection("Selling")}
            />
          </div>

          <div className="flex items-center justify-between w-full px-4">
            <button
              className="bg-white text-black px-4 md:px-5 py-2 rounded-lg border text-sm md:text-base"
              onClick={goBack}
            >
              Back
            </button>
            <button
              className={`px-4 md:px-5 py-2 rounded-lg text-white text-sm md:text-base ${
                userData.freelancerType
                  ? "bg-maincolor hover:bg-maincolor/90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={goToNextStep}
              disabled={!userData.freelancerType}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // Conditionally render the Questionnaire based on freelancerType
        userData.freelancerType === "Buying" ? (
          <Questionnaire goBackToModal={goBackToModal} />
        ) : (
          <Questionnaire2 goBackToModal={goBackToModal} />
        )
      )}
    </div>
  );
};


export default RegisterInfoModal;
