import React from 'react'

export default function Whywabbit() {
  return (
    <div className='w-scree h-[100vh] flex items-center justify-center'>

      <div className='h-[90%] w-[90%] rounded-3xl flex max-sm:flex-col overflow-hidden bg-Thirdbg'>

        {/* Text-Div */}

        <div className='h-[100%] w-[60%] max-sm:w-[100%] max-sm:h-[60%]'>

          {/* Heading-Div */}

          <div className='max-sm:text-center '>
            <h1 className='text-white max-sm:text-[26px] pt-3 md:text-[35px] md:ml-3 lg:text-[53px]'>
              The right partnerships
            </h1>

            <h1 className='text-maincolor text-[24px] pt-1 md:text-[35px] md:ml-3 lg:text-[48px]'>
              elevate good companies
            </h1>

            <h1 className='text-maincolor max-lg:text-[24px] max-sm:text-start pl-5 375:pl-11 425:pl-16 md:text-[35px] md:-ml-12 lg:text-[50px]'>
              to greatness.
            </h1>

          </div>

          {/* Secheading-Div */}

          <div className='text-[20px] text-white mt-3'>
            <p className='font-nunito text-[20px] pl-4'>
              Access the top 1% of talent on <span className='text-maincolor font-bold'>wabbit</span>, with the complete suite of hybrid workforce management tools.This is how innovation happens today.
            </p>
          </div>

          <div className=' max-sm:hidden list-none pl-3 mt-3'>

            <li className='text-[20px] text-white font-nunito'>
              Elevate your e-commerce game with Wabbit.
            </li>

            <li className='text-[20px] text-white font-nunito'>
              Control every step: hire, classify, and pay your talent efficiently.
            </li>

            <li className='sm:text-[18px] text-white font-nunito'>
              With <span className='text-maincolor text-[15px] font-bold'>Wabbit</span>,experience total support from start to finish.
            </li>

          </div>

          <button className=' mt-4 ml-5 h-[40px] w-[120px] bg-white text-maincolor rounded-lg text-[18px] font-semibold'>
            Get details
          </button>

        </div>

        {/* Img-Div */}

        <div className='max-lg:hidden h-[100] w-[40%]  bg-yellow-600'>

        </div>

      </div>
    </div>
  )
}
