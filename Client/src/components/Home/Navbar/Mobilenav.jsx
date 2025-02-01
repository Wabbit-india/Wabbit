import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMessage } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdSupportAgent, MdNewspaper, MdAccountBox } from "react-icons/md";

import ClickAwayListener from 'react-click-away-listener';
import { Mycontext } from '../../../context/Mycontext';

export default function Mobilenav() {
  const [isVisible, setIsVisible] = useState(false); // Local state for animation
  const token = localStorage.getItem("token")
  const usertype = localStorage.getItem("accountType")
    const sidebutton = [
      { id: 1, icons: <MdAccountBox />, name: 'Profiles' },
      { id: 2, icons: <MdMessage />, name: 'Message' },
      { id: 3, icons: <MdNewspaper />, name: 'Projects' },
      { id: 4, icons: <FaSackDollar />, name: 'Payouts' },
      { id: 5, icons: <MdSupportAgent />, name: 'Support' },
    ];
  const { activeComponent, setActiveComponent,activeId, setActiveId, setIsnavbar} = useContext(Mycontext);
    const changeHandler = (id) => {
      setActiveId(id);
      setActiveComponent(id) // Set the clicked button as active
    };
    const logoutHandler = () => {
      localStorage.clear();
      navigate("/");
  
    }
  
  const handleClickAway = () => {
    setIsVisible(false);
    setTimeout(() => setIsnavbar(false), 300); // Delay to sync with animation
  };

  const handleResize = () => {
    if (window.innerWidth > 760) {
      setIsVisible(false);
      setTimeout(() => setIsnavbar(false), 300);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`fixed  top-[70px] z-[999]  shadow-lg transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ height: '30%', width: '74%' }}
      >

        {!token||usertype === 'Buying'?(
        <nav>
          <ul className="py-10 pl-5 flex justify-center flex-col gap-5">
            <Link to="/" className="font-nunito font-bold text-[20px]">
              Home
            </Link>
            <Link to="/onboardingseller" className="font-nunito font-bold text-[20px]">
              About
            </Link>
            <Link className="font-nunito font-bold text-[20px]">
              Monetize Your Skill
            </Link>
          </ul>
        </nav>

        ):(
          <div className='bg-white shadow-md w-full h-[700px]'>
            {/* <aside className=" w-[300px] h-auto lg:visible invisible   mt-8 shadow-lg flex flex-col gap-3 py-8 items-center"> */}
          {sidebutton.map((item) => (
            <div 
                 key={item.id}
                 onClick={() => {
                  changeHandler(item.id);
                  setIsnavbar(false);
                }}
                               className={`z-9 relative cursor-pointer lg:text-2xl text-xl w-[100%] rounded-lg p-2 flex items-center  justify-evenly ${activeId === item.id ? 'bg-green-400 ' : null
                   }`}
               >
                 <i className='lg:text-3xl text-xl'>{item.icons}</i>
                 <h2>{item.name}</h2>
               </div>
             ))}
                    <div className='relative top-32 bg-maincolor cursor-pointer lg:text-2xl text-xl w-[100%] rounded-lg p-2 flex items-center  justify-evenly' onClick={logoutHandler}>Logout</div>

          {/* </aside> */}

          </div>
          
        )}
        
      </div>
    </ClickAwayListener>
  );
}
