import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";

const Question3 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { setfaqQuestion, setprogressbar } = useContext(Mycontext);

  // Handler to update selected value
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="h-full w-full flex items-center flex-col gap-5">
      <p className="text-2xl text-center font-semibold font-nunito w-[90%]">
        How long do you want the final video to be?
      </p>
      <div className="min-h-[80%] border w-[90%] rounded-lg">
        <form className="flex flex-col gap-3 h-full w-full overflow-y-scroll">
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="30_seconds"
              checked={selectedValue === "30_seconds"}
              onChange={handleChange}
            />
            30 seconds
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="1_minute"
              checked={selectedValue === "1_minute"}
              onChange={handleChange}
            />
            1 minute
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="5_minutes"
              checked={selectedValue === "5_minutes"}
              onChange={handleChange}
            />
            5 minutes
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="10_minutes"
              checked={selectedValue === "10_minutes"}
              onChange={handleChange}
            />
            10 minutes
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="30_minutes"
              checked={selectedValue === "30_minutes"}
              onChange={handleChange}
            />
            30 minutes
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="1_hour"
              checked={selectedValue === "1_hour"}
              onChange={handleChange}
            />
            1 hour
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="videoDuration"
              value="2_hours"
              checked={selectedValue === "2_hours"}
              onChange={handleChange}
            />
            2 hours
          </label>
        </form>

        <div className="h-[10%]  absolute bottom-28 w-[40%] flex items-center gap-20 px-7">
          <button
            className="bg-white text-black border w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#ccc]"
            onClick={() => {
              setprogressbar(33.32);
              setfaqQuestion(2);
            }}
          >
            Back
          </button>
          <button
            className="bg-maincolor text-white w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#00bf63ae]"
            disabled={selectedValue === ""} // Disable next button if no options selected
            onClick={() => {
              setfaqQuestion(4);
              setprogressbar(66.64);
            }}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Question3;
