import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import Photocard from './page/Photocard'
import Profiledet from './page/Profiledet';
import Freelancerprl from "./components/Freelancerprl"

import Photocard from './components/Card/Photocard'
// import Profiledet from './page/Profiledet';
// import GetinfoPage from './page/GetinfoPage';
function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/editor' element={<Photocard/>}/>
            <Route path='/myprofile' element={<Freelancerprl/>}/>
            {/* <Route path="/photocard" element={<Photocard/>}/> */}
            {/* <Route path="/getinfo" element={<GetinfoPage/>}/> */}
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
