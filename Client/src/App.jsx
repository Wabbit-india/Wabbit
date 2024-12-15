import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import UserInfo from './page/User-info';
import FreelancePortfolio from "./page/Freelance-Portfolio"
import Profile from './page/Profile';
import Joinagency from './page/Joinagency';

{/* Browse professionals by category Route  */ }
import Photocard from './components/Category-Card/Photocard';
import Mockupcard from './components/Category-Card/Mockupcard';
import Logocard from './components/Category-Card/GraphhicDesigner';
import Invititioncard from './components/Category-Card/Invititioncard'
import Videoeditor from './components/Category-Card/Videoeditor';
import Canvacard from './components/Category-Card/Canvacard';
import Webdevloper from './components/Category-Card/Webdevloper';
import UIUX from './components/Category-Card/UIUX';



function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<h1 className='text-[50px] text-black text-center'>404 Not Found</h1>} />

            {/* Normal Routeing */}


            <Route path='/userinfo' element={<UserInfo />} />
            {/* <Route path='/normaluser1' element={<NormalUser1 />} /> */}
            <Route path='/profile' element={<Profile />} />



            {/* Browse professionals by category Route  */}

            <Route path="/photocard" element={<Photocard />} />
            <Route path='/mockup' element={<Mockupcard />} />
            <Route path='/invititioncard' element={<Invititioncard />} />
            <Route path='/graphicdesigner' element={<Logocard />} />
            <Route path='/videoeditor' element={<Videoeditor />} />
            <Route path='/canvacard' element={<Canvacard />} />
            <Route path='/webdeveloper' element={<Webdevloper />} />
            <Route path='/uiux' element={<UIUX />} />



            {/* for after */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/getinfo" element={<GetinfoPage />} /> */}

             {/* Browse professionals by category   */}
          
             <Route path='/myprofile' element={<Freelancerprl/>}/> 
             {/* <Route path="/getinfo" element={<GetinfoPage/>}/>  */}
             <Route path="/photocard"  element={<Photocard/>}/>
             <Route path='/mockup' element={<Mockupcard/>}/>
             <Route path='/invititioncard' element={<Invititioncard/>}/>
             <Route path='/graphicdesigner' element={<Logocard/>}/>
             <Route path='/videoeditor' element={<Videoeditor/>}/>
             <Route path='/canvacard' element={<Canvacard/>}/>
             <Route path='/webdeveloper' element={<Webdevloper/>}/>
             <Route path='/uiux' element={<UIUX/>}/>
             <Route path='/normalUser1' element={<NormalUser1 />}/>
            <Route path='/freelancePortfolio' element={<FreelancePortfolio />} />
            <Route path='/joinagency' element={<Joinagency />} />
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
