import React, { useContext, useState } from 'react';
import { Mycontext } from '../../../context/Mycontext';

const Question4 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { setfaqQuestion, setprogressbar } = useContext(Mycontext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="h-full w-full flex items-center flex-col gap-5">
      <p className="text-2xl text-center font-semibold font-nunito w-[90%]">
        When do you need the video editing complete by?
      </p>
      <div className="min-h-[80%] border w-[90%] rounded-lg">
        <form className="flex flex-col gap-3 h-full w-full overflow-y-scroll">
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="deadline"
              value="ASAP"
              checked={selectedValue === "ASAP"}
              onChange={handleChange}
            />
            ASAP
          </label>

          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="deadline"
              value="Within a week"
              checked={selectedValue === "Within a week"}
              onChange={handleChange}
            />
            Within a week
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="deadline"
              value="Within 2 weeks"
              checked={selectedValue === "Within 2 weeks"}
              onChange={handleChange}
            />
            Within 2 weeks
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="deadline"
              value="Within a month"
              checked={selectedValue === "Within a month"}
              onChange={handleChange}
            />
            Within a month
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="deadline"
              value="Within 3 months"
              checked={selectedValue === "Within 3 months"}
              onChange={handleChange}
            />
            Within 3 months
          </label>
        </form>

        <div className="h-[10%]  absolute bottom-28 w-[40%] flex items-center gap-20 px-7">
          <button
            className="bg-white text-black border w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#ccc]"
            onClick={() => {
              setprogressbar(49.98);
              setfaqQuestion(3);
            }}
          >
            Back
          </button>
          <button
            className="bg-maincolor text-white w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#00bf63ae]"
            disabled={selectedValue === ""} // Disable next button if no options selected
            onClick={() => {
              setfaqQuestion(5);
              setprogressbar(83.33);
            }}
          >
            Next
          </button>
        </div>
      </div>


    </div>
  );
};

export default Question4;