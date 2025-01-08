import React, { useState } from 'react'
import logo from "../../assets/Home/Nav/navlogo.png";
export default function Navbar() {
    const name = localStorage.getItem("username");

    const [sideModal, setSideModal] = useState(false);

    const handleSideModalClose = () => {
        setSideModal(false);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        setSideModal(false);
    };

    return (
        <div className=" h-[85px] text-black flex items-center flex-row md:px-[30px] fixed top-0 w-[100%] z-20 border-b border-maincolor">
            {/* three dot container */}

            {/* <div className="w-[20%] flex items-center justify-center h-full md:hidden">
                <i
                    className="fa-solid fa-bars text-[25px]">

                </i>
            </div> */}

            {/* logo container */}

            <div className="w-[55%] flex items-center justify-center text-black h-full md:w-[25%] md:items-start md:justify-start">
                <img
                    className="w-[150px] md:w-[160px] mt-[18px] cursor-pointer"
                    src={logo}
                    alt="logo"
                />
            </div>

            {/* Nav Lists container */}
            <div className="w-auto h-full flex items-center justify-end md:w-[85%] gap-[11%]">
                <div className="hidden md:flex flex-row items-center h-[100%] justify-between gap-[9%]">

                    <li className="list-none text-3xl text-nowrap font-semibold md:text-xl hover:text-hovercolor hover:cursor-pointer transition-all">
                        Notification
                    </li>
                </div>

                <button
                    className="text-nowrap  mr-[150px] w-[100%] px-4 py-2 flex items-center justify-center sm:left-[0px]  sm:text-lg 320:relative right-1 320:text-sm bg-maincolor text-white text-[30px] font-[500] rounded-xl md:w-[150px]"
                >
                    Switch to Buyer
                </button>

            </div>

            {/* Profile button */}

            <button
                className="bg-maincolor rounded-full w-[65px] h-[60px] text-white text-center uppercase font-bold ml-8 text-[30px]"
                onClick={() => {
                    setSideModal(true);
                }}
            >
                {name[0]}

            </button>

            {sideModal && (

                <ClickAwayListener onClickAway={handleSideModalClose}>
                    <div className="fixed top-[70px] right-0 w-[250px] bg-white shadow-lg rounded-lg z-50">
                        <ul className="p-4">
                            <li
                                className="text-lg font-medium py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={handleLogout}

                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                </ClickAwayListener>
            )}

        </div>
    )
}
