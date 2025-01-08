import React, { useState } from 'react';
import { MdMessage } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdSupportAgent, MdNewspaper, MdAccountBox } from "react-icons/md";
import Profile from './Profile';

export default function Freelancedashboard() {
  const sidebutton = [
    { id: 1, icons: <MdAccountBox />, name: 'Profiles' },
    { id: 2, icons: <MdMessage />, name: 'Message' },
    { id: 3, icons: <MdNewspaper />, name: 'Projects' },
    { id: 4, icons: <FaSackDollar />, name: 'Payouts' },
    { id: 5, icons: <MdSupportAgent />, name: 'Support' },
  ];
  const [activeComponent,setActiveComponent]=useState(1)

  const [activeId, setActiveId] = useState(1); // Track the active button

  const changeHandler = (id) => {
    setActiveId(id);
    setActiveComponent(id) // Set the clicked button as active
  };

  return (
    <div className='overflow-hidden w-full h-[100vh]'>
      <nav className='w-full h-[70px] bg-black'></nav>
      <div className="flex">
        <aside className=" w-[300px] h-[100vh] shadow-lg flex flex-col gap-3 py-8 items-center">
          {sidebutton.map((item) => (
            <div
              key={item.id}
              onClick={() => changeHandler(item.id)}
              className={` cursor-pointer lg:text-2xl text-xl w-[80%] rounded-lg p-2 flex items-center  justify-evenly ${
                activeId === item.id ? 'bg-green-400 ' : null
              }`}
            >
              <i className='lg:text-3xl text-xl'>{item.icons}</i>
              <h2>{item.name}</h2>
            </div>
          ))}
        </aside>
        <main className='w-[80%] h-screen bg-blue-200'>
          {activeComponent===1?<Profile/>:null}
          {activeComponent===2?<Profile/>:null}
          {activeComponent===3?<Profile/>:null}
          {activeComponent===4?<Profile/>:null}
          {activeComponent===5?<Profile/>:null}
        </main>
      </div>
    </div>
  );
}
