import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";

export default function Fordesigner() {
  return (
    //npm i typewrite-effect install karlije chutiya
    // Main container with full width and height, center-aligning the content
    <div className='bg-dcolor py-4 w-full min-h-screen flex justify-center items-center text-center font-nunito px-4'>
      {/* Parent Div - Responsive width up to a maximum size */}
      <div className='w-full max-w-4xl'>
        
        {/* First Heading - Adjust font size for different screen sizes */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
          Find your next
        </h1>

        {/* Second Heading - Includes Typewriter effect for dynamic words */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
          {/* Typewriter span - inline-block ensures it stays in the same line with "today" */}
          <span className='text-green-800 inline-block'>
            <Typewriter
              className="changeword"
              options={{
                color: "red",
                strings: ["Designer", "Developer", "Photographer", "VideoEditor"], // Dynamic words
                autoStart: true, // Starts automatically
                loop: true, // Continues to loop the words
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
        <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-full my-6 space-y-4 lg:space-y-0'>
          {/* First Button - Get Started */}
          <div className='py-3 px-5 w-full max-w-[170px] rounded-3xl bg-black text-white'>
            <Link>Get started now</Link>
          </div>
          {/* Second Button - Learn about Hiring */}
          <div className='py-3 px-5 w-full max-w-[170px] rounded-3xl bg-white text-black'>
            <Link>Learn about hiring</Link>
          </div>
        </div>

        {/* Footer Text with link */}
        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
          Are you a Freelancer? <Link to='' className='font-bold underline'>Join Wabbit</Link>
        </p>
      </div>
    </div>
  )
}
