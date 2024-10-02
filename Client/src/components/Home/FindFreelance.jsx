import React from 'react'
import img1 from '../../assets/Home/img01.png'
import img2 from '../../assets/Home/img02.png'
import img3 from '../../assets/Home/img03.png'
import img4 from '../../assets/Home/img04.png'

export default function Workwithus() {
  const headings = ["Trusted by:", "h1", "h1", "h1", "h1"]

  return (
    <div className='w-full mt-[100px] cursor-pointer flex justify-center items-center max-xl:h-[490px] xl:h-[539px] 2xl:h-[600px] '>

      <div className='w-[95%] h-[95%] rounded-2xl  flex flex-col items-center relative bg-bgmain'>

        {/* Star-Img */}

        <img
          src={img1}
          alt="img01"
          className='max-sm:hidden absolute object-cover md:h-24 md:left-2 md:top-3 xl:h-32 xl:left-10'
        />

        <img
          src={img2}
          alt="img2"
          className='max-sm:hidden absolute object-cover md:h-28 md:left-2 md:bottom-28 xl:h-36 xl:left-10 xl:bottom-32'
        />

        <img
          src={img3}
          alt="img2"
          className='max-sm:hidden absolute  object-cover md:h-52 md:right-3 md:bottom-24 xl:h-80 xl:right-8 xl:bottom-20'
        />

        <img
          src={img4}
          alt="img2"
          className='max-sm:hidden absolute -rotate-45 object-cover md:h-24 md:left-[40%] md:bottom-32 xl:h-32 xl:left-[45%] xl:bottom-[90px]'
        />


        {/* Heading Dev */}

        <h1 className=' pt-3 font-nunito max-sm:text-[17px] sm:text-[35px] xl:text-[50px] '>
          Instantly Connect with the Perfect
        </h1>

        <div className='flex gap-2 pt-1 sm:gap-6'>

          <h2 className='text-maincolor font-[900]  font-nunito text-[20px] sm:text-[35px] xl:text-[50px]'>
            Freelance
          </h2>

          <h2 className='text-[20px] font-nunito sm:text-[35px] xl:text-[50px]'>
            Service for
          </h2>
        </div>

        <div className='flex gap-2 pt-1  sm:gap-6'>
          <h3 className='font-[500] text-[20px] font-nunito sm:text-[35px] xl:text-[50px]'>
            Your
          </h3>

          <h3 className='text-maincolor font-[500] text-[20px] sm:text-[35px] xl:text-[50px]'>
            Needs!
          </h3>
        </div>

        {/* Search */}

        <div className='max-2xl:mt-9 2xl:mt-20 z-10 sm:mr-14'>
          <input
            type="search"
            placeholder='what are you loocking for'
            className=' h-14 pl-5 rounded-lg font-nunito text-[22px] bg-white max-sm:w-[285px] sm:w-[450px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] '
          />
        </div>


        {/* WorkWith */}

        <div className=' max-sm:hidden w-[90%] bg-black h-14 rounded-3xl flex flex-row justify-evenly  items-center mt-28'>
          {headings.map((heading, index) => (
            <h1 className='text-white'
              key={index}>{heading}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}