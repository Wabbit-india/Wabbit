import React from 'react'

export default function About() {
    return (
        <div className='bg-white h-[70px] text-black flex items-center flex-row md:px-[30px] fixed top-0 w-[100%] z-20'>

            {/* logo container */}

            <div className='w-[55%] flex items-center justify-center text-black h-full md:w-[25%] md:items-start md:justify-start'>
                <img
                    className='w-[150px] md:w-[160px] mt-[10px] cursor-pointer'
                    src={logo} alt=""
                />
            </div>


            {/* Nav Lists container */}
            <div className='w-auto  h-full flex items-center justify-end md:w-[85%] gap-[11%]'>
                <div className='hidden md:flex flex-row items-center h-[100%] justify-between gap-[9%]'>
                    <li className='list-none text-2xl text-nowrap font-semibold md:text-xl hover:text-hovercolor hover:cursor-pointer transition ease-in'>
                        Home
                    </li>

                    <li className='list-none text-2xl text-nowrap font-semibold md:text-xl hover:text-hovercolor hover:cursor-pointer transition-all'>
                        About
                    </li>

                    <li className='list-none text-2xl text-nowrap font-semibold md:text-xl hover:text-hovercolor hover:cursor-pointer transition-all'>
                        Monetize Your Skill
                    </li>
                </div>


                <button className='text-nowrap w-[95%] px-4 py-2 border-[1px] bg-black  text-white text-[17px] font-[500] rounded-xl md:w-[150px]'>
                    Get Started
                </button>

            </div>
        </div>
    )
}
