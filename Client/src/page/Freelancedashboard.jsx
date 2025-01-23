import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar/Navbar'
import { MdMessage } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdSupportAgent, MdNewspaper, MdAccountBox } from "react-icons/md";
import Chat from '../components/Seller/chat/chat';
import Profile from '../components/Seller/Profile/Profile';
import Support from '../components/Seller/Support';
import Payout from '../components/Seller/Payout';
import Projects from '../components/Seller/Projects';

export default function Freelancedashboard() {

  const sidebutton = [
    { id: 1, icons: <MdAccountBox />, name: 'Profiles' },
    { id: 2, icons: <MdMessage />, name: 'Message' },
    { id: 3, icons: <MdNewspaper />, name: 'Projects' },
    { id: 4, icons: <FaSackDollar />, name: 'Payouts' },
    { id: 5, icons: <MdSupportAgent />, name: 'Support' },
  ];
  const [activeComponent, setActiveComponent] = useState(1)

  const [activeId, setActiveId] = useState(1); // Track the active button

  const changeHandler = (id) => {
    setActiveId(id);
    setActiveComponent(id) // Set the clicked button as active
  };

  return (
    <>
      <Navbar />

      <div className='overflow-hidden  flex flex-row w-full h-[89.30vh] mt-[85px]'>
        <div className="flex">

          <aside className=" w-[300px] h-auto mt-8 shadow-lg flex flex-col gap-3 py-8 items-center">
            {sidebutton.map((item) => (
              <div
                key={item.id}
                onClick={() => changeHandler(item.id)}
                className={`hidden lg:flex cursor-pointer lg:text-2xl text-xl w-[80%] rounded-lg p-2 items-center justify-evenly ${activeId === item.id ? 'bg-green-400' : ''
                  }`}
              >
                <i className="lg:text-3xl text-xl">{item.icons}</i>
                <h2>{item.name}</h2>
              </div>
            ))}


          </aside>
        </div>

        <div className='w-[81%] h-screen lg:w-[100%]'>
          <main className='w-[80%] h-screen'>
            {activeComponent === 1 ? <Profile /> : null}
            {activeComponent === 2 ? <Chat /> : null}
            {activeComponent === 3 ? <Projects /> : null}
            {activeComponent === 4 ? <Payout /> : null}
            {activeComponent === 5 ? <Support /> : null}
          </main>
        </div>
      </div>
    </>
  );
}
