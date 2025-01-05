import React from "react";
// Component for a reusable selection card
const SelectionCard = ({ text, image,isSelected, onClick }) => {
    return (
      <div
        className={`w-full md:w-[48%]  h-[40%] md:h-5/6  rounded-lg p-4 flex items-center justify-center text-center transition-all relative ${
          isSelected ? "outline outline-maincolor bg-gray-100" : "bg-gray-50"
        }`}
        onClick={onClick} // Handles click events to set selection
      >
        {/* Checkbox to indicate selection status */}
        <input
          type="checkbox"
          className="absolute top-2 right-2"
          checked={isSelected} // Checkbox reflects selection state
          readOnly // Prevent direct editing of the checkbox
        />
        {/* Display image passed as a prop */}
      <img
        src={image}
        alt={text}
        className=" absolute w-24 h-24 md:w-[70%] md:h-[70%] object-contain mb-2 md:top-5 md:left-5"
      />
        {/* Display text passed as a prop */}
        <p className="text-gray-700 font-semibold text-sm md:text-base absolute bottom-2 left-4">
          {text}
        </p>
      </div>
    );
  };


export default SelectionCard;
