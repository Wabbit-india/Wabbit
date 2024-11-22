import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";

const Question1 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { setfaqQuestion, setprogressbar } = useContext(Mycontext);

  // Handler to update selected value
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="h-full w-full flex items-center flex-col gap-5">
      <p className="text-2xl text-center font-semibold font-nunito w-[90%]">
        What type of project required video editing?
      </p>
      <div className="min-h-[80%] border w-[90%] rounded-lg">
        <form className="flex flex-col gap-3 h-full w-full overflow-y-scroll">
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Commercial ad"
              checked={selectedValue === "Commercial ad"}
              onChange={handleChange}
            />
            Commercial ad
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Event Video"
              checked={selectedValue === "Event Video"}
              onChange={handleChange}
            />
            Event Video
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Full length movie"
              checked={selectedValue === "Full length movie"}
              onChange={handleChange}
            />
            Full length movie
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Home video"
              checked={selectedValue === "Home video"}
              onChange={handleChange}
            />
            Home video
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Music video"
              checked={selectedValue === "Music video"}
              onChange={handleChange}
            />
            Music video
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Short film"
              checked={selectedValue === "Short film"}
              onChange={handleChange}
            />
            Short film
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Social Media - Reel"
              checked={selectedValue === "Social Media - Reel"}
              onChange={handleChange}
            />
            Social Media - Reel
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="radio"
              name="projectType"
              value="Social Media - Video"
              checked={selectedValue === "Social Media - Video"}
              onChange={handleChange}
            />
            Social Media - Video
          </label>
        </form>
      </div>
      <div className="h-[10%] border absolute bottom-0 w-full flex items-center justify-end px-7">
        <button
          className="bg-maincolor text-white w-[20%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#00bf63ae]"
          disabled={selectedValue === "" ? true : false}
          onClick={() => {
            setfaqQuestion(2);
            setprogressbar(33.32);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question1;
