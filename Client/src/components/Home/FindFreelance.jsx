import React from 'react'
import img1 from '../../assets/Home/ForFreelance/img01.png'
import img2 from '../../assets/Home/ForFreelance/img02.png'
import img3 from '../../assets/Home/ForFreelance/img03.png'
import img4 from '../../assets/Home/ForFreelance/img04.png'
import lino from '../../assets/Home/Brand/lino.svg'
import timex from '../../assets/Home/Brand/timex.svg'

export default function Workwithus() {
  const Brand = [
    { image: lino, altText: "lino" },
    { image: timex, altText: "timex" },
    // { image: star, altText: "logo designer"},
  ];

  return (
    <div className='w-full   h-auto mt-[100px] cursor-pointer flex justify-center items-center'>

      <div className='w-[90%] h-[95%] rounded-2xl  flex flex-col items-center relative bg-bgmain overflow-hidden'>

        {/* Star-Img */}

        <img
          src={img1}
          alt="img01"
          className='max-sm:hidden  absolute object-cover  md:h-24 md:left-2 md:top-3 xl:h-32 xl:left-10'
        />

        <img
          src={img2}
          alt="img2"
          className='max-sm:hidden absolute object-cover md:h-28 md:-left-9 md:bottom-28 xl:h-36 xl:-left-9 xl:bottom-32'
        />

        <img
          src={img3}
          alt="img2"
          className='max-sm:hidden absolute  object-cover md:h-52 md:right-3 md:bottom-24 xl:h-80 xl:right-8 xl:bottom-20'
        />

        <img
          src={img4}
          alt="img2"
          className='max-sm:hidden absolute -rotate-45 object-cover md:h-24 md:left-[40%] md:bottom-32 xl:h-32 xl:left-[45%] xl:bottom-[140px]'
        />


        {/* Heading Dev */}

        <h1 className=' pt-3 font-nunito font-bold max-sm:text-[17px] sm:text-[35px] xl:text-[50px] '>
          Instantly Connect with the Perfect
        </h1>

        <div className='flex gap-2 pt-1 sm:gap-6'>

          <h2 className='text-maincolor font-[900]  font-nunito text-[20px] sm:text-[35px] xl:text-[50px]'>
            Freelance
          </h2>

          <h2 className='text-[20px] font-nunito font-bold sm:text-[35px] xl:text-[50px]'>
            Service for
          </h2>
        </div>

        <div className='flex gap-2 pt-1  sm:gap-6'>
          <h3 className='font-bold text-[20px] font-nunito sm:text-[35px] xl:text-[50px]'>
            Your
          </h3>

          <h3 className='text-maincolor font-nunito font-[900] text-[20px] sm:text-[35px] xl:text-[50px]'>
            Needs!
          </h3>
        </div>

        {/* Search */}

        <div className='max-2xl:mt-9 2xl:mt-20 z-10 sm:mr-14 my-16'>
          <input
            type="search"
            placeholder='what are you loocking for'
            className=' h-14 pl-5 rounded-lg font-nunito max-sm:text-[18px] bg-white max-sm:w-[250px] sm:w-[450px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] '
          />
        </div>


        {/* WorkWith */}

        <div className='max-sm:hidden w-[90%] bg-black h-14 rounded-3xl flex flex-row items-center gap-36 my-12 text-white'>
          <h1 className='pl-36 font-nunito font-bold'>
            hello world:
          </h1>
          {Brand.map((brandItem, index) => (
            <img
              key={index}
              src={brandItem.image}
              alt={brandItem.altText}
              className="h-[50%] w-auto object-contain rounded-2xl filter-red"
            />
          ))}
        </div>

      </div>
    </div>
  )
}