import React from 'react'

function Personalinfo2({ setIndex }) {
  const moveToNextStep = () => {
    setIndex(2);
  }

  return (
    <>
      <div className="w-full min-h-screen px-4 sm:px-10 md:px-20 py-10">
        <div>
          <h1 className="text-2xl sm:text-3xl">Professional Info</h1>
          <p>This is your time to shine. Let potential buyers know what you do best.</p>
          <p>Highlight your skills, certifications, and experience.</p>
        </div>

        <div>
          <h1 className="text-right text-sm sm:text-base my-2">* Mandatory fields</h1>
          <div className="border border-gray-400"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-3">
          <div>
            <h1 className="text-lg sm:text-xl">Your Occupation*</h1>
          </div>
          <div className="w-full sm:w-1/2 flex flex-wrap gap-2">
            <select className="w-full sm:w-1/4 px-2 py-1 border border-black rounded">
              <option>Digital Marketing</option>
              {/* More options here */}
            </select>
            <select className="w-1/3  px-2 py-1 border border-black rounded">
              <option>2021</option>
              {/* More options here */}
            </select>
            <select className="w-1/3  px-2 py-1 border border-black rounded">
              <option>2024</option>
              {/* More options here */}
            </select>
          </div>
        </div>

        <div className="w-full  my-4 flex justify-between">
          <div className='md:w-1/2 sm:block 320:hidden'></div>
          <div className="md:w-1/2  ">
            <h1 className="">Choose two to five of your best skills in Digital Marketing</h1>
            <div className="p-2 flex sm:text-md 320:text-lg flex-wrap gap-6 ">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="">
                  <input type="checkbox" id={`skill-${i}`} className="cursor-pointer md:w-4 md:h-4 320:h-6 320:w-6" />
                  <label htmlFor={`skill-${i}`} className="ml-2 cursor-pointer">Affiliate Marketing</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-3 flex md:flex-row flex-col  justify-between">
          <div className='py-2'>
            <h1 className="text-lg sm:text-xl">Skills</h1>
            <p>List the skills related to the services you're offering and add your experience level.</p>
          </div>
          <div className="sm:w-1/2 text-center">
            <table className="w-full border border-gray-600 text-sm sm:text-base">
                <tr className="bg-gray-500">
                  <th>Skill</th>
                  <th>Level</th>
                  <th>Add New</th>
                </tr>
                <tr>
                  <td>Video ads</td>
                  <td>Intermediate</td>
                  <td></td>
                  {/* Add row if needed */}
                </tr>
            </table>
          </div>
        </div>

        <div className="my-2 flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="text-lg sm:text-xl">University</h1>
          </div>
          <div className="w-full sm:w-1/2">
            <input type="text" className="w-full sm:w-1/2 border border-gray-500 rounded p-2" />
          </div>
        </div>

        <div className="my-4 flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="text-lg sm:text-xl">Portfolio</h1>
          </div>
          <div className="w-full sm:w-1/2">
            <input type="text" className="w-full sm:w-1/2 border border-gray-500 rounded p-2" />
          </div>
        </div>

        <button
          onClick={moveToNextStep}
          className="bg-green-600  text-white p-2 px-4 rounded-md block mt-6"
        >
         <b> Continue</b>
        </button>
      </div>
    </>
  )
}

export default Personalinfo2;
