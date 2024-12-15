import React, { useContext, useState } from 'react';
import { Mycontext } from '../../../context/Mycontext';

const Question6 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [otherValue, setOtherValue] = useState(""); // State for the "Other" input field
  const { setfaqQuestion, setprogressbar } = useContext(Mycontext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    // Clear the "Other" field if any option other than "E" is selected
    if (event.target.value !== "E") {
      setOtherValue("");
    }
  };

  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
  };

  return (
    <div className="h-full w-full flex items-center flex-col gap-5">
      <p className="text-2xl text-center font-semibold font-nunito w-[90%]">
        Please provide the references.
      </p>
      <div className="min-h-[80%] border w-[90%] rounded-lg">
        <form className="flex flex-col gap-3 h-full w-full overflow-y-scroll">

          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="musicType"
              value="E"
              checked={selectedValue === "E"}
              onChange={handleChange}
            />
            If Any
            <input
              type="text"
              name="otherMusic"
              placeholder="Specify other music"
              value={otherValue}
              disabled={selectedValue !== "E"}
              onChange={handleOtherChange}
              className="border p-2 rounded-md w-[70%] ml-4"
            />
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="musicType"
              value="D"
              checked={selectedValue === "D"}
              onChange={handleChange}
            />
            No I Don't Have Any
          </label>
        </form>

        <div className="h-[10%]  absolute bottom-28 w-[40%] flex items-center gap-20 px-7">
          <button
            className="bg-white text-black border w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#ccc]"
            onClick={() => {
              setprogressbar(83.33);
              setfaqQuestion(5);
            }}
          >
            Back
          </button>
          <button
            className="bg-maincolor text-white w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#00bf63ae]"
            disabled={selectedValue === "" || (selectedValue === "E" && otherValue.trim() === "")} // Validate for "Other"
            onClick={() => {
              setprogressbar(100);
              alert("Thank you for submitting your requirements.");
            }}
          >
            Finish
          </button>
        </div>
      </div>

    </div>
  );
};

export default Question6;
