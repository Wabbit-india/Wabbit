import React, { useContext } from 'react'
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
import Content from '../components/Auth/Register Steps/Content'
import RegisterStep1 from '../components/Auth/Register Steps/RegisterStep1'
import RegisterStep2 from '../components/Auth/Register Steps/RegisterStep2'



export default function Home() {
    const {isnavbar} = useContext(Mycontext);
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
