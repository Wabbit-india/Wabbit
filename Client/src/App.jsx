import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';


{/* Browse professionals by category Route  */ }
import Photocard from './components/Category-Card/Photocard';
import Mockupcard from './components/Category-Card/Mockupcard';
import Logocard from './components/Category-Card/GraphhicDesigner';
import Invititioncard from './components/Category-Card/Invititioncard'
import Videoeditor from './components/Category-Card/Videoeditor';
import Canvacard from './components/Category-Card/Canvacard';
import Webdevloper from './components/Category-Card/Webdevloper';
import UIUX from './components/Category-Card/UIUX';
import PersonalNav from './components/personalinfo/Personalnav'
<<<<<<< HEAD
import Freelancer1 from './components/Profile/Modals/Freelancer1';
=======

>>>>>>> f183e0340e1b41b5df799d5b4fbb136cd2713a8c


function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<h1 className='text-[50px] text-black text-center'>404 Not Found</h1>} />

            {/* Normal Routeing */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path='/normaluser1' element={<NormalUser1 />} /> */}
           
            <Route path="/profile" element={<PersonalNav />} />


            {/* Category Route */}
            <Route path="/photocard" element={<Photocard />} />
            <Route path='/mockup' element={<Mockupcard />} />
            <Route path='/invititioncard' element={<Invititioncard />} />
            <Route path='/graphicdesigner' element={<Logocard />} />
            <Route path='/videoeditor' element={<Videoeditor />} />
            <Route path='/canvacard' element={<Canvacard />} />
            <Route path='/webdeveloper' element={<Webdevloper />} />
            <Route path='/uiux' element={<UIUX />} />

            {/* for after */}

            {/* <Route path='/freelancePortfolio' element={<FreelancePortfolio />} />
            <Route path='/joinagency' element={<Joinagency />} /> */}
            
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
