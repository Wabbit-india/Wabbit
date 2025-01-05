import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";

const Question2 = () => {
  const [selectedValues, setSelectedValues] = useState([]); // Array to store multiple selections
  const [otherValue, setOtherValue] = useState(""); // State for the "Other" input field
  const { setfaqQuestion, setprogressbar } = useContext(Mycontext);

  // Handler to update selected values
  const handleChange = (event) => {
    const { value, checked } = event.target;

    // Update selectedValues based on checkbox state
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  return (
    <div className="h-full w-full flex items-center flex-col gap-5">
      <p className="text-2xl text-center font-semibold font-nunito w-[90%]">
        What additional features do you want in your final edit?
      </p>
      <div className="min-h-[80%] border w-[90%] rounded-lg">
        <form className="flex flex-col gap-3 h-full w-full overflow-y-scroll">
          {/* Existing checkboxes */}
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="No additional features required"
              checked={selectedValues.includes("No additional features required")}
              onChange={handleChange}
            />
            No additional features required
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Additional footage - stock images"
              checked={selectedValues.includes("Additional footage - stock images")}
              onChange={handleChange}
            />
            Additional footage - stock images
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Additional footage - stock videos"
              checked={selectedValues.includes("Additional footage - stock videos")}
              onChange={handleChange}
            />
            Additional footage - stock videos
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Animation"
              checked={selectedValues.includes("Animation")}
              onChange={handleChange}
            />
            Animation
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Music - original soundtrack"
              checked={selectedValues.includes("Music - original soundtrack")}
              onChange={handleChange}
            />
            Music - original soundtrack
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Music - stock"
              checked={selectedValues.includes("Music - stock")}
              onChange={handleChange}
            />
            Music - stock
          </label>
          <label className="flex items-center gap-5 h-[12%] border-b p-4">
            <input
              type="checkbox"
              name="feature"
              value="Voice over"
              checked={selectedValues.includes("Voice over")}
              onChange={handleChange}
            />
            Voice over
          </label>
          {/* Text input for "Other" */}
          <label className="flex items-center justify-center gap-5 h-[12%] border-b px-7 py-8">
            <input
              type="text"
              name="feature"
              placeholder="other"
              value={otherValue}
              onChange={(e) => {
                setOtherValue(e.target.value);
                if (e.target.value) {
                  if (!selectedValues.includes(e.target.value)) {
                    setSelectedValues([...selectedValues, e.target.value]);
                  }
                } else {
                  setSelectedValues(selectedValues.filter((item) => item !== otherValue));
                }
              }}
              className="border p-2 rounded-md w-full"
            />
          </label>


          <div className="h-[10%]  absolute bottom-28 w-[40%] flex items-center gap-20 px-7">
            <button
              className="bg-white text-black border w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#ccc]"
              onClick={() => {
                setprogressbar(16.66);
                setfaqQuestion(1);
              }}
            >
              Back
            </button>
            <button
              className="bg-maincolor text-white w-[30%] h-[70%] rounded-lg disabled:cursor-not-allowed disabled:bg-[#00bf63ae]"
              disabled={selectedValues.length === 0} // Disable next button if no options selected
              onClick={() => {
                setfaqQuestion(3);
                setprogressbar(49.98);
              }}
            >
              Next
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Question2;
