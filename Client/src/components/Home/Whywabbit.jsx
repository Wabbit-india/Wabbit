import React from 'react'
import img1 from '../../assets/Home/img001.svg'
import img2 from "../../assets/Home/WhyWabbit/Hiring-removebg-preview.svg"
import img3 from "../../assets/Home/WhyWabbit/sale.png"
import designer from '../../assets/Home/WhyWabbit/designer.png'
import texttool from '../../assets/Home/WhyWabbit/text-tool.png'
import graphicdesigner from '../../assets/Home/WhyWabbit/graphicdesigner.png'
import appdevelopment from '../../assets/Home/WhyWabbit/app-development.png'
import rupees from '../../assets/Home/WhyWabbit/rupees.png'
import sale from '../../assets/Home/WhyWabbit/sale.png'

export default function Whywabbit() {
  return (
    <div className='w-scree flex items-center justify-center mt-10'>

      <div className='h-auto w-[90%] rounded-3xl flex max-sm:flex-col overflow-hidden bg-Thirdbg '>

        {/* Text-Div */}

        <div className=' w-[68%] max-lg:w-[100%]'>

          {/* Heading-Div */}

          <div className='max-lg:text-center'>
            <h1 className='text-white max-sm:text-[26px] pt-3 md:text-[50px] lg:pl-7 '>
              The right partnerships
            </h1>

            <h1 className='text-maincolor text-[24px] pt-1 md:text-[45px] sm:pr-2 lg:text-[45px] lg:pl-7'>
              elevate good companies
            </h1>

            <h1 className='text-maincolor max-lg:text-[24px] max-lg:text-start pl-5 375:pl-11 425:pl-16 md:text-[45px] sm:pl-28 lg:px-10  lg:text-[45px]'>
              to greatness.
            </h1>

          </div>

          {/* Secheading-Div */}

          <div className='text-[20px] text-white mt-3 max-sm:px-5'>
            <p className='font-nunito text-[25px] lg:text-[29px] md:px-5'>
              Access the top 1% of talent on <span className='text-maincolor font-bold'>wabbit</span>, with the complete suite of hybrid workforce management tools.This is how innovation happens today.
            </p>
          </div>


          <div className='list-none flex'>
            <img
              src={img1}
              alt=""
              className="h-[6%] w-[6%] object-contain ml-6  sm:mt-4 lg:mt-4"
            />
            <p className='text-[16px] pt-1 sm:text-[25px] sm:py-4 text-white font-nunito pl-2 lg:pl-2 lg:pt-5 xl:pt-5'>
              Elevate your e-commerce game with Wabbit.
            </p>
          </div>

          <div className='list-none flex '>
            <img
              src={img2}
              alt=""
              className="h-[6%] w-[6%] object-contain ml-5 sm:mt-5 lg:mt-4"
            />
            <p className='text-[16px] pt-1 sm:text-[25px] sm:py-4 text-white font-nunito pl-2 lg:pl-2 lg:pt-2 xl:pt-5'>
              Control every step: hire, classify, and pay your talent efficiently.
            </p>
          </div>

          <div className='list-none flex'>
            <img
              src={img3}
              alt=""
              className="h-[6%] w-[6%] object-contain ml-6"
            />
            <p className='text-[15px] sm:text-[25px] sm:pt-2 text-white font-nunito pl-2 lg:pl-4 xl:pt-5'>
              With <span className='text-maincolor'>Wabbit</span>, experience total support from start to finish.

            </p>
          </div>

          <button className='mx-6 my-3 h-[40px] w-[120px] bg-white text-maincolor rounded-lg text-[18px] font-semibold lg:mx-[70px] lg:mt-8'>
            Get details
          </button>

        </div>

        {/* Img-Div */}

        <div className='max-lg:hidden  w-[40%] bg-yellow-500'>

          {/* IMG-TOP */}

          <div className='flex lg:mt-2 bg-purple-500'>

            <div className='flex flex-col'>

              {/* TOP-Left */}

              <div className='w-[50%] h-[100%]'>
                <img
                  src={designer}
                  alt="graphicdesigner"
                  className='h-[100%] w-[60%] object-contain bg-white ml-20 lg:ml-5  rounded-tl-2xl '
                />
              </div>

              <div className='w-[50%] h-[100%]'>
                <img
                  src={texttool}
                  alt="graphicdesigner"
                  className='h-[85%] w-[60%] object-contain bg-white mt-5 ml-20 lg:ml-10 '
                />
              </div>
            </div>

            {/* TOP-Right */}

            {/* <div className=' h-[100%] w-[50%] bg-white rounded-tr-3xl'>
              <img
                src={graphicdesigner}
                alt="graphicdesigner"
                className='h-[100%] w-[100%] object-contain'
              />
            </div> */}
          </div>

          {/* IMG-bootam */}

          <div className='flex bg-pink-500'>

            {/* bootam-Right */}

            <div className=' h-[100%] w-[80%] bg-white mt-14 ml-16 lg:ml-3 rounded-bl-2xl'>
              <img
                src={appdevelopment}
                alt="graphicdesigner"
                className='h-[100%] w-[100%] object-contain '
              />
            </div>

            {/* bootam-Left */}

            <div className='flex flex-col'>

              <div className='w-[50%] h-[100%]'>
                <img
                  src={rupees}
                  alt="graphicdesigner"
                  className='h-[35%] w-[50%] object-contain bg-white mt-14 ml-20'
                />
              </div>

              <div className='w-[50%] h-[100%]'>
                <img
                  src={sale}
                  alt="graphicdesigner"
                  className='h-[35%] w-[50%] object-contain bg-white mt-3 ml-20 rounded-br-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
