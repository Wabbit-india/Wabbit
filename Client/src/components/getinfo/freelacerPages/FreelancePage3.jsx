import React, { useContext } from 'react';
import { Mycontext } from '../../../context/Mycontext';
import { useNavigate } from 'react-router-dom';

const FreelancePage3 = () => {
  const { setgetInfostep, userData } = useContext(Mycontext);
  const navigate = useNavigate()

  const handleProfileCompletion = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/setinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: localStorage.getItem('_id'),
          freelancerType: userData.freelancerType,   // Replace with userId as stored in context or local storage
          sellingPurpose: userData.sellingPurpose || '', // Default to empty string if not set
          experienceMode: userData.experienceMode || '', // Default to empty string if not set
        }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("userType" , result.userType)
        navigate("/")
        console.log('Profile completion successful:', result.user);
        setgetInfostep(4); // Move to the next step if update is successful
      } else {
        console.error('Error completing profile:', result.error);
        alert('Error completing profile. Please try again.');
      }
    } catch (error) {
      console.error('Request failed:', error);
      alert('Internal server error. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col gap-3 h-[100%] font-nunito">
      <div className="h-[90%] flex w-[100%] items-center justify-center">
        <p className="font-bold text-3xl font-nunito">Great, you're almost there.</p>
      </div>
      <div className="flex w-[100%] items-center justify-center gap-5">
        <button
          className="border w-fit py-1 px-4 rounded-lg text-white bg-black font-semibold"
          onClick={handleProfileCompletion}
        >
          Complete your seller profile
        </button>
        <button
          className="border w-fit py-1 px-4 rounded-lg text-black bg-white font-semibold"
          onClick={() => setgetInfostep(4)}
        >
          Start exploring
        </button>
      </div>
    </div>
  );
};

export default FreelancePage3;
