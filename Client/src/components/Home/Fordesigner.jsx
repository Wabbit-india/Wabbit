import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

export default function Fordesigner() {
  return (
   
    <div className='bg-Secbg py-4 w-full min-h-[80vh] flex justify-center items-center text-center font-nunito px-4'>

      {/* Parent Div - Responsive width up to a maximum size */}

      <div className='w-full max-w-4xl'>
        
       
        <h1 className='text-3xl my-7 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  leading-tight'>
          Find your next
        </h1>

        
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
          
          <span className='text-bgmain inline-block'>
            <Typewriter
              className="changeword"
              options={{
                color: "red",
                strings: ["Designer", "Developer", "VideoEditor"], 
                autoStart: true, 
                loop: true, 
              }}
            />
          </span>

          today
        </h1>

        {/* Subtitle text - Adjust font size based on screen size */}

        <h4 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-thin my-4'>
          The world’s leading brands use Wabbit to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
        </h4>
        
        {/* Buttons Section - Flex layout for button alignment */}
        
        <div className='flex mx-auto px-4 flex-col lg:flex-row justify-center lg:justify-evenly items-center w-full max-w-[90%] lg:max-w-[50%] my-6 space-y-4 lg:space-y-0'>
  <div className='py-3 px-5 w-full max-w-[170px] rounded-3xl bg-black text-white text-center'>
    <Link href='#'>Get started now</Link>
  </div>
  
  <div className='py-3 px-5 w-full max-w-[170px] rounded-3xl bg-white text-black text-center'>
    <Link href='#'>Learn about hiring</Link>
  </div>
</div>

   
        <p className='text-sm sm:text-base md:text-lg lg:text-xl '>
          Are you a Freelancer? <Link to='' className='font-semibold font-sans text-[15px] pl-2 text-black underline'>Join Wabbit</Link>
        </p>
      </div>
    </div>
  )
}
