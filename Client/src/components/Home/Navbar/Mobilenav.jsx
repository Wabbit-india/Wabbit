import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ClickAwayListener from "react-click-away-listener";
import { Mycontext } from '../../../context/Mycontext';

export default function Mobilenav() {
  const {setIsnavbar } = useContext(Mycontext);

  const handleClickAway = () => {
    setIsnavbar(false)
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='h-[35%] w-[100%] fixed top-16  z-20 bg-white  '>
        <nav>
          <ul className=' py-10 pl-5 flex justify-center flex-col gap-5'>

            <Link to={"/"}
              className='font-nunito font-bold text-[20px]'>
              Home
            </Link>

            <Link to="/about"
              className='font-nunito font-bold text-[20px]'>
              About 
            </Link>

            <Link
              className='font-nunito font-bold text-[20px]'>
              Monetize Your Skill
            </Link>

          </ul>
        </nav>



        <nav>

        </nav>
      </div>
    </ClickAwayListener>
  )
}
