import React from 'react'
import img1 from '../../assets/Home/img01.png'
import img2 from '../../assets/Home/img02.png'
import img3 from '../../assets/Home/img03.png'
import img4 from '../../assets/Home/img04.png'

export default function Workwithus() {
  const headings = ["Trusted by:", "h1", "h1", "h1", "h1"]

  return (
    <div className='w-screen h max-xl:h-[490px] xl:h-[539px] 2xl:h-[600px]'>

      <div className='w-[95%] h-[100%] cursor-pointer bg-bgmain -m-3 flex flex-col items-center rounded-2xl max-2xl:ml-[3%] 2xl:ml-[40px] '>

        {/* Star-Img */}

        <img
          src={img1}
          alt="img01"
          className='max-sm:hidden absolute object-cover sm:h-24 sm:left-7 sm:top-36 xl:left-20'
        />

        <img
          src={img2}
          alt="img2"
          className='max-sm:hidden absolute h-[125px] object-cover sm:bottom-60 sm:left-7 sm:h-24 xl:bottom-36 xl:left-20 xl:h-32 2xl:bottom-60 2xl:left-16 2xl:h-40'
        />

        <img
          src={img3}
          alt="img2"
          className='max-sm:hidden absolute  object-cover sm:h-[250px] sm:right-3 sm:bottom-32 xl:right-24 xl:bottom-20 xl:h-[300px] 2xl:right-16 2xl:bottom-44 2xl:h-[350px]'
        />

        <img
          src={img4}
          alt="img2"
          className='max-sm:hidden absolute h-[125px] bject-cover -rotate-45 sm:bottom-48 xl:bottom-28 2xl:bottom-56 2xl:h-32'
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

        <div className=' max-sm:hidden w-[90%] bg-black h-14 relative top-44 rounded-3xl flex flex-row justify-evenly  items-center sm:top-[140px] lg:top-36 2xl:top-[145px]'>
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