import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import Freelancerprl from './page/Freelancerprl';
import Professioncard from './page/Professioncard';
import Photocard from './page/Photocard';
import Logocard from './page/Logocard';
import Mockupcard from './page/Mockupcard';
import Invitioncard from './page/Invititioncard';
import Canvacard from './page/Canvacard'
const  App = ()=> {
  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/auth" element={<Auth/>} /> */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/freelancerprl" element={<Freelancerprl/>}/>
            <Route path="/professioncard" element={<Canvacard/>}/>
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
