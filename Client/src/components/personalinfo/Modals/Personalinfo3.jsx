import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Mycontext } from "../../../context/Mycontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Personalinfo3() {
  const navigate = useNavigate();
  const { profileData, setProfileData } = useContext(Mycontext);
  const { profileData1, setProfileData1 } = useContext(Mycontext);

  const submitHandler = async () => {
    const payload = {
      ...profileData,
      ...profileData1,
    };

    console.log("Payload to be sent:", payload);

    try {
      const response = await axios.post("http://localhost:8000/api/profile", payload, {

        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Server Response:", response.data);
      alert("Submission successful!");
      setProfileData(" ");
      setProfileData1(" ");
      navigate("/")

    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error submitting data:", error.response.data);
        alert(`Failed to submit data: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made, but no response received
        console.error("No response from server:", error.request);
        alert("No response from server. Please try again later.");
      } else {
        // Something happened while setting up the request
        console.error("Error:", error.message);
        alert("An error occurred while submitting data.");
      }
    }
  };
  return (
    <div className="w-full min-h-screen p-4 sm:p-8 md:p-16 lg:p-20">
      <div>
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-4">Professional Info</h1>
        <p className="text-sm md:text-base">
          Trust and safety is a big deal in our community. Please verify your email and phone number so
        </p>
        <p className="text-sm md:text-base">
          that we can keep your account secured
        </p>
      </div>

      <div className="border border-gray-400 my-4 md:my-8"></div>

      {/* Email Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h1 className="text-lg md:text-xl flex items-center">
            <MdEmail className="inline mx-2" /> Email
          </h1>
          <p className="text-gray-500 text-sm md:text-base">Private</p>
        </div>
        <div className="mt-2 md:mt-0">
          <button className="px-4 md:px-5 320:w-[185px] sm:w-full md:w-[200px] py-1 text-base md:text-lg bg-green-600 text-white rounded-md">
            <b> Verified </b>
          </button>
        </div>
      </div>

      {/* Phone Number Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h1 className="text-lg md:text-xl flex items-center">
            <FaPhoneAlt className="inline mx-2" /> Phone Number
          </h1>
          <p className="text-gray-500 text-sm md:text-base">Private</p>
          <p className="text-xs md:text-sm text-gray-400">We'll never share your phone number.</p>
        </div>
        <div className="mt-2 md:mt-0">
          <button className="px-4 md:px-5 py-1 text-base md:text-lg bg-green-600 text-white rounded-md">
            <b> Add Phone Number</b>
          </button>
        </div>
      </div>

      <div className="border border-gray-400 my-4 md:my-8"></div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={submitHandler}
          className="bg-green-600 text-white w-full md:w-[120px] py-2 text-sm md:text-base rounded-md"
        >
          <b>Submit</b>
        </button>
      </div>
    </div>
  );
}

export default Personalinfo3;
