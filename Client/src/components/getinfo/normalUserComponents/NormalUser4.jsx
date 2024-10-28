  import React, { useContext, useEffect } from 'react';
  import { Mycontext } from '../../../context/Mycontext';
import { useNavigate } from 'react-router-dom';

  const NormalUser4 = () => {
    const { setgetInfostep, userData, setUserData } = useContext(Mycontext);
    const navigate = useNavigate()

    const handlePurposeSelection = (purpose) => {
      setUserData({
        ...userData,
        purpose: userData.purpose === purpose ? "" : purpose, // Toggle purpose if clicked again
      });
    };

    const handleNextClick = async () => {
      try {
        const response = await fetch('http://localhost:8000/auth/setinfo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: localStorage.getItem("_id"), // Make sure userId is available in userData
            freelancerType: userData.freelancerType || 'buying', // Default to 'buying' if not set
            freelancingPurpose: userData.freelancingPurpose || [],
            companySize: userData.companySize || '',
            purpose: userData.purpose || '',
          }),
        });

        const result = await response.json();
        
        
        if (response.ok) {
          localStorage.setItem("userType" , result.userType);
          navigate("/")
          console.log('User information updated:', result.user);
          setgetInfostep(4); // Move to the next step if update is successful
        } else {
          console.error('Error updating user information:', result.error);
          alert('Error updating information. Please try again.');
        }
      } catch (error) {
        console.error('Request failed:', error);
        alert('Internal server error. Please try again later.');
      }
    };

    useEffect(() => {
      console.log(userData);
    }, [userData]);

    return (
      <div className="flex flex-col gap-3 h-[100%]">
        <div className="h-[100%] flex flex-col gap-3 overflow-scroll overflow-x-hidden">
          <div className="text-[20px] md:text-xl text-center font-nunito font-bold">
            Nice and what are you looking for today?
          </div>
          <div className="flex flex-col lg:flex-row w-full h-[100%] justify-evenly items-center gap-2">
            {["To start a project", "A specific project", "Just exploring"].map((purposeOption, index) => (
              <div
                key={index}
                className={`w-[80%] h-[50%] lg:w-full lg:h-[70%] rounded-xl shadow-lg border relative flex items-end pl-3 pb-2 cursor-pointer overflow-hidden ${
                  userData.purpose === purposeOption ? "border-maincolor" : ""
                }`}
                onClick={() => handlePurposeSelection(purposeOption)}
              >
                <input
                  className="absolute right-5 top-5 border cursor-pointer w-4 h-4 accent-black"
                  type="checkbox"
                  checked={userData.purpose === purposeOption}
                  readOnly
                />
                <p className="text-lg mb-4">{purposeOption}</p>
              </div>
            ))}
          </div>
          <div className="flex w-[100%] items-center justify-between">
            <button
              className="border w-fit py-1 px-4 rounded-lg uppercase text-black bg-white font-semibold"
              onClick={() => setgetInfostep(3)}
            >
              Back
            </button>
            <button
              className="border w-fit py-1 px-4 rounded-lg uppercase text-white bg-maincolor font-semibold"
              onClick={handleNextClick}
              disabled={!userData.purpose}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default NormalUser4;
