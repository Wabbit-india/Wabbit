import React from 'react'
import img from '../../assets/Home/webDeveloper.png'
export default function Profile1() {
  return (
    <div>
      <div className='flex flex-wrap gap-4  items-center justify-center  '>
        <div className='w-[285px] h-[280px] bg-white px-4 shadow-lg pb-8 pt-4 rounded-lg'>
        <div className='bg-red-300  h-full w-full'></div>
        {/* <img className='mx-4'src={img} alt="" /> */}
        <h1 className='text-center text-2xl '>Title</h1>
        </div>
        <div className='w-[285px] h-[280px] bg-white px-4 shadow-lg pb-8 pt-4 rounded-lg'>
        <div className='bg-red-300  h-full w-full'></div>
        {/* <img className='mx-4'src={img} alt="" /> */}
        <h1 className='text-center text-2xl '>Title</h1>
        </div>
        <div className='w-[285px] h-[280px] bg-white px-4 shadow-lg pb-8 pt-4 rounded-lg'>
        <div className='bg-red-300  h-full w-full'></div>
        {/* <img className='mx-4'src={img} alt="" /> */}
        <h1 className='text-center text-2xl '>Title</h1>
        </div>
      </div>
    </div>
  )
}
