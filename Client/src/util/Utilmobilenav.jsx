import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdSupportAgent, MdNewspaper, MdAccountBox } from "react-icons/md";
import ClickAwayListener from "react-click-away-listener";
import { Mycontext } from "../context/Mycontext";

export default function Mobilenav() {
  const [isVisible, setIsVisible] = useState(false); // Local state for animation
  const token = localStorage.getItem("token");
  const usertype = localStorage.getItem("accountType");

  const sidebutton = [
    { id: 1, icons: <MdAccountBox />, name: "Profiles" },
    { id: 2, icons: <MdMessage />, name: "Message" },
    { id: 3, icons: <MdNewspaper />, name: "Projects" },
    { id: 4, icons: <FaSackDollar />, name: "Payouts" },
    { id: 5, icons: <MdSupportAgent />, name: "Support" },
  ];

  const sidebutton2 = [
    { id: 1, icons: <MdAccountBox />, name: "Profiles" },
    { id: 2, icons: <MdMessage />, name: "Message" },
    { id: 3, icons: <MdNewspaper />, name: "Projects" },
    { id: 4, icons: <FaSackDollar />, name: "Payouts" },
    { id: 5, icons: <MdSupportAgent />, name: "Support" },
  ];

  const {
    setActiveComponent,
    activeId,
    setActiveId,
    setIsutilnavbar

  } = useContext(Mycontext);

  const changeHandler = (id) => {
    setActiveId(id);
    setActiveComponent(id); // Set the clicked button as active
  };
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleClickAway = () => {
    setIsVisible(false);
    setTimeout(() => setIsnavbar(false), 300);
  };

  const handleResize = () => {
    if (window.innerWidth > 760) {
      setIsVisible(false);
      setTimeout(() => setIsnavbar(false), 300);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const a = "buying"

  return (



    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`fixed  top-[70px] z-[999]  shadow-lg transition-transform duration-500 ease-in-out ${isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ height: "30%", width: "74%" }}
      >
        {/* {!token || usertype &&"Buying" === "Buying" ? ( */}
        {a === "Buying" ? (
          <div>
            {sidebutton2.map((item) => (
              <nav
                key={item.id}
                onClick={() => {
                  changeHandler(item.id);
                  setIsutilnavbar(false);
                }}
                className={`z-9 relative cursor-pointer lg:text-2xl text-xl w-[100%] rounded-lg p-2 flex items-center  justify-evenly ${activeId === item.id ? "bg-green-400 " : null
                  }`}
              >
                <i className="lg:text-3xl text-xl">{item.icons}</i>
                <h2>{item.name}</h2>

              </nav>
            ))}
          </div>

        ) : (

          <div className="bg-white shadow-md w-full h-[700px]">
            {/* <aside className=" w-[300px] h-auto lg:visible invisible   mt-8 shadow-lg flex flex-col gap-3 py-8 items-center"> */}

            {sidebutton.map((item) => (
              <nav
                key={item.id}
                onClick={() => {
                  changeHandler(item.id);
                  setIsutilnavbar(false);
                }}
                className={`z-9 relative cursor-pointer lg:text-2xl text-xl w-[100%] rounded-lg p-2 flex items-center  justify-evenly ${activeId === item.id ? "bg-green-400 " : null
                  }`}
              >
                <i className="lg:text-3xl text-xl">{item.icons}</i>
                <h2>{item.name}</h2>

              </nav>
            ))}

            <div
              className="relative top-32 bg-maincolor cursor-pointer lg:text-2xl text-xl w-[100%] rounded-lg p-2 flex items-center  justify-evenly"
              onClick={logoutHandler}
            >
              Logout
            </div>

            {/* </aside> */}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
