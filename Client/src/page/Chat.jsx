import React from 'react'
import { TiHome } from "react-icons/ti";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import img from '../../public/vite.svg'
import { FiSearch } from "react-icons/fi";
import Chatmain from './Chatmain';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Chat() {
  const navigate =useNavigate();
    const value=10;
  return (
    <div className='h-screen w-full overflow-hidden   '>
      <nav className='flex sticky border-b border-gray-400 justify-between h-12 shadow-lg items-center 375:px-3'>
        <div><h1>Message</h1></div>
        <div>
        <ul className='flex gap-3 text-green-900 h-full items-center'>
        <li className='text-[24px] cursor-pointer'><TiHome /></li>
        <li className='text-[20px] cursor-pointer'><BiMessageSquareDetail /></li>
        <li className='text-[20px] cursor-pointer'><GoBell />
        </li>
        <li className='text-2xl text-white'>|</li>
        <li>
            <div className='flex gap-2'>
            <img src='' alt="" className='rounded-full h-10 w-10' /> <h1 className='text-[13px]'>Jasper Melsion</h1>
            </div>
            <h5 className='text-[10px] absolute right-12 top-7'>ID: 66666</h5>
        </li>
        </ul>
        </div>
      </nav>
      <div className='flex overflow-hidden w-full  '>
      <aside className='border-r border-gray-400 bg-gray-200  sm:max-w-[350px]  h-[93vh] shadow-lg overflow-scroll '>
        <div className='w-full h-20   flex gap-4 p-3 mb-5 sticky top-0'>
            <img src="" className='rounded-full h-10 w-10' alt="" />
            <input type="text"className='w-[350px] h-10 rounded-2xl shadow-lg   px-3 bg-gray-200' placeholder='Search' />
            <FiSearch className='text-xl absolute right-6 top-5 cursor-pointer' />
            </div>

            <div className='min-h-screen overflow-hidden  '>
            {[...Array(20)].map((_, index) => (
            
                <div className='cursor-pointer'onClick={()=>navigate('../chatpage')}>
                <div className='flex  gap-3 px-3 overflow-hidden cursor-pointer  border-t border-gray-400  py-1 '>
                <img src="" className='rounded-full h-10 w-10' alt="" />
                    <h1 className='' >Mohammed Hussain</h1>
                    <h6 className='text-[7px] relative left-[48px] top-2 block  lg:block sm:hidden'>5MINS AGO</h6>
                    </div>
                    <h5 className='text-[10px] relative -top-5 left-14'>I am typing...</h5>
                </div>     ))}

            </div>
      </aside>
      <main className='w-full hidden sm:block'>
        <Chatmain/></main>
      </div>
    </div>
  )
}

export default Chat
