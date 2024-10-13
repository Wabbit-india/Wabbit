import React from 'react'

function Profiledet() {
  return (
    <div className='flex w-full min-h-screen justify-center items-center p-4'>
      <div className='w-full sm:w-3/4 lg:w-1/2 flex flex-col'>
        <h1 className='text-lg sm:text-2xl my-2'>Please provide the following details</h1>
        
        {/* Agency Name */}
        <div>
          <label htmlFor="input1" className='text-sm sm:text-base'>What is the name of your agency?</label>
          <input type="text" id='input1' className='rounded-md border-slate-300 border-2 w-full mb-6 mt-1 p-2 text-sm sm:text-base' />
        </div>
        
        {/* Agency Role */}
        <div>
          <label htmlFor="input2" className='text-sm sm:text-base'>What is your role at the agency?</label>
          <input type="text" id='input2' className='rounded-md border-slate-300 border-2 w-full mb-6 mt-1 p-2 text-sm sm:text-base' />
        </div>

        {/* Number of Employees */}
        <div>
          <label htmlFor="input3" className='text-sm sm:text-base'>How many employees does the agency have?</label>
          <input type="text" id='input3' className='rounded-md border-slate-300 border-2 w-full mb-6 mt-1 p-2 text-sm sm:text-base' />
        </div>

        {/* Service Category */}
        <h1 className='text-lg sm:text-2xl mb-2'>Which category best describes the services your agency provides?</h1>
        <div className='flex flex-col'>
          {['Graphics & Design', 'Web Development', 'Marketing', 'Consulting', 'SEO', 'Content Writing', 'Other'].map((service, index) => (
            <div key={index} className='flex items-center my-1'>
              <input type="radio" id={`rd${index}`} name="category" className='mr-2' />
              <label htmlFor={`rd${index}`} className='text-sm sm:text-base'>{service}</label>
            </div>
          ))}
        </div>

        {/* Agency URL */}
        <div className='mt-4'>
          <h1 className='text-lg sm:text-2xl'>What is your agency's URL?</h1>
          <p className='text-xs sm:text-sm'>No website? Share a link to your LinkedIn, Portfolio, or other online presence.</p>
          <input type="text" className='rounded-md border-slate-300 border-2 w-full mb-6 mt-1 p-2 text-sm sm:text-base' />
        </div>

        {/* Agency Description */}
        <div>
          <label htmlFor="" className='text-sm sm:text-base'>Describe your agency in a few sentences.</label>
          <textarea className='w-full rounded-md border-slate-300 border-2 h-[200px] mb-6 mt-1 p-2 text-sm sm:text-base' />
        </div>
      </div>
    </div>
  )
}

export default Profiledet;
