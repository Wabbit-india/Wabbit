import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Importing plus icon from react-icons

function Freelancer2() {
  const fileInputRef = useRef(null);
  const [isFileSelected, setIsFileSelected] = useState(false); // State to control modal visibility after file selection
  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file

  // Trigger a side effect when the selected file changes
  useEffect(() => {
    if (selectedFile) {
      console.log('File selected:', selectedFile.name);
    }
  }, [selectedFile]); // Re-run this effect whenever 'selectedFile' changes

  const handleIconClick = () => {
    fileInputRef.current.click(); // Trigger file input click when plus icon is clicked
  };

  // Triggered when the file input value changes (file is selected)
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setSelectedFile(file); // Save the selected file
      setIsFileSelected(true); // Open modal to show the pop-up
    }
  };

  const closeModal = () => {
    setIsFileSelected(false); // Close modal after showing pop-up
    setSelectedFile(null); // Reset the selected file when modal closes
  };

  return (
    <div>
      {/* Conditional rendering: hide the div when a file is selected (modal is shown) */}
      {!isFileSelected && (
        <div className='w-full p-2 h-[300px] rounded-md shadow-lg'>
          <div className='w-full h-full border-2 border-black flex flex-col justify-center items-center'>
            <div
              className='w-[60px] h-[60px] bg-blue-300 rounded-full flex justify-center items-center cursor-pointer'
              onClick={handleIconClick}
            >
              <FaPlus className='text-white text-2xl' /> {/* Plus icon */}
              <input
                id='plusbtn'
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hiding the file input
                onChange={handleFileChange} // Handle file selection
              />
            </div>
            {/* Label positioned below the plus icon */}
            <div className='mt-2'>
              <label htmlFor="plusbtn" className='text-sm font-semibold'>
                Upload Project
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Modal for file selection confirmation */}
      {isFileSelected && (
        <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg w-full max-w-[90%] sm:max-w-[90%] md:max-w-[800px] lg:max-w-[1000px] p-4 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* First div with 35% width on large screens */}
              <div className="w-full shadow-lg  md:w-[35%] h-[200px] sm:h-[250px] md:h-[300px] mx-1 mb-4 md:mb-0 flex items-center justify-center">
                {/* Image placeholder for selected file */}
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected File"
                    className="w-full rounded-lg shadow-lg h-full object-cover"
                  />
                )}
              </div>

              {/* Second div with 65% width */}
              <div className="w-full md:w-[65%] p-2">
                <h1 className="my-1 text-lg">Project Title</h1>
                <input
                  type="text"
                  className="w-full border border-gray-500 p-2 mb-4"
                  placeholder="Enter project title"
                />

<h1 className="mt-4 mx-5 text-lg">How Would You Categorize This Project?</h1>
                <div className="flex flex-wrap justify-between">
                  {/* Categories */}
                  {['Graphic Design', 'Web Development', 'App Development', 'UI/UX Design', 'Content Writing', 'SEO'].map((category, index) => (
                    <div key={index} className="w-full shadow-lg rounded-md  sm:w-1/3 p-1 flex items-center"> {/* Use w-full on small screens, w-1/3 on sm and up */}
                      <div className="w-full  p-2 flex items-center">
                        <input type="checkbox" className="mx-2" />
                        <label className=" sm:text-[15px] lg:text-[15px]">{category}</label> {/* Small text size */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                className="bg-white text-black px-4 py-2 rounded-lg border border-gray-500"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-maincolor text-white px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Freelancer2;
