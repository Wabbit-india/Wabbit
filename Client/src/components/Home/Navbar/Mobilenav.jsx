import React from 'react'
import { Link } from 'react-router-dom'

export default function Mobilenav() {
  return (
    <div className='h-[55%] w-[100%] fixed top-16 left-2 z-20 rounded-2xl bg-white '>
      <nav>
        <ul className=' py-10 pl-5 flex justify-center flex-col gap-5'>

          <Link className='font-nunito font-bold text-[20px]'>
            Home
          </Link>

          <Link className='font-nunito font-bold text-[20px]' to="/about">
            About
          </Link>

          <Link
            className='font-nunito font-bold text-[20px]'>
            Monetize Your Skill
          </Link>
        </ul>
      </nav>
    </div>
  )
}
