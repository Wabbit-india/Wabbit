import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
// import Freelancerprl from './page/Freelancerprl';
// import Professioncard from './page/Professioncard';
import Photocard from './page/Photocard';
import Logocard from './page/Logocard';
import Mockupcard from './page/Mockupcard';
import Invitioncard from './page/Invititioncard';
import Canvacard from './page/Canvacard'
import Personalnav from './components/personalinfo/Personalnav';
import Chat from './page/Chat';
import Chatmain from './page/Chatmain';
// import Userformneed from './page/Userneed/Userneed0';
// import Userneedform from './page/Userneed/Userneedform';
const  App = ()=> {
  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>}/>
            {/* <Route path="/freelancerprl" element={<Freelancerprl/>}/> */}
            <Route path="/canvacard" element={<Canvacard/>}/>
            <Route path="/personalnav" element={<Personalnav/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/chatpage" element={<Chatmain/>}/>
            <Route path="/photocard" element={<Photocard/>}/>
            <Route path="/logocard" element={<Logocard/>}/>
            <Route path="/mockupcard" element={<Mockupcard/>}/>
            {/* <Route path="/userneedform" element={<Userneedform/>}/> */}
            
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
