import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
// import Photocard from './page/Photocard'
// import Profiledet from './page/Profiledet';
import Freelancerprl from "./components/Freelancerprl"
import Photocard from './components/Card/Photocard';
import Mockupcard from './components/Card/Mockupcard';
import Logocard from './components/Card/GraphhicDesigner';
import Invititioncard from './components/Card/Invititioncard'
import Videoeditor from './components/Card/Videoeditor';
import Canvacard from './components/Card/Canvacard';
import Webdevloper from './components/Card/Webdevloper';
import UIUX from './components/Card/UIUX';
import NormalUser1 from './components/getinfo/normalUserComponents/normalUser1'

function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<h1 className='text-[50px] text-black text-center'>404 Not Found</h1>} />
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
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
