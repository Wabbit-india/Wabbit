import React, { useContext } from 'react'
import { Mycontext } from '../context/Mycontext'
import Navbar from "../components/Home/Navbar/Navbar"
import MobileNav from '../components/Home/Navbar/Mobilenav'
import FindFreelance from '../components/Home/FindFreelance'
export default function Home() {
    const isnavbar = useContext(Mycontext);
    return (
        <div>
                <Navbar />
                {/* {isnavbar && <MobileNav />} */}
                <FindFreelance />
        </div>
    )
}
