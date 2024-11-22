import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../context/Mycontext'
import Navbar from "../components/Home/Navbar/Navbar"
import MobileNav from '../components/Home/Navbar/Mobilenav'
import FindFreelance from '../components/Home/FindFreelance'
import Category from '../components/Home/Category'
import Topeditors from '../components/Home/Topeditors'
import BusinessesSlide from '../components/Home/BusinessesSlide'
import Whywabbit from '../components/Home/Whywabbit'
import FreelancersSlide from '../components/Home/FreelancersSlide'
import Fordesigner from '../components/Home/Fordesigner'
import Footer from '../components/Home/Footer'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const {isnavbar} = useContext(Mycontext);
    const navigate = useNavigate();
    
    useEffect(() => {
        const _id = localStorage.getItem("_id");
        const authtoken = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const userType = localStorage.getItem("userType");
    
        if (_id && authtoken && username && !userType) {
          navigate("/getinfo"); // Redirect to "/getinfo" if userType is missing
        }
    }, [])
    
    return (
        <div className='flex flex-col h-auto justify-between'>
            <Navbar />
            {isnavbar && <MobileNav />}
            <FindFreelance />
            <Category />
            <Topeditors />
            <BusinessesSlide />
            <Whywabbit />
            <FreelancersSlide/>
            <Fordesigner />
            <Footer/>
            
           
        </div>
    )
}
