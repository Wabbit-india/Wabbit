import React, { useContext } from 'react'
import { Mycontext } from '../context/Mycontext'
import Navbar from "../components/Home/Navbar/Navbar"
import MobileNav from '../components/Home/Navbar/Mobilenav'
import FindFreelance from '../components/Home/FindFreelance'
import Category from '../components/Home/Category'
import Aboutus from '../components/Home/Aboutus'
import Whywabbit from '../components/Home/Whywabbit'
import Footer from "../components/Home/Footer"

export default function Home() {
    const isnavbar = useContext(Mycontext);
    return (
        <div className='flex flex-col h-auto justify-between'> 
                <Navbar />
                {/* {isnavbar && <MobileNav />} */}
                <FindFreelance />
                <Category/>
                {/* <Whywabbit/>
                <Aboutus/> */}
                <Footer/>
        </div>
    )
}
